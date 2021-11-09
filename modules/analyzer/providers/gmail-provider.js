import { google } from 'googleapis';
import parseMessage from 'gmail-api-parse-message';

const defaultLimit = parseInt(process.env.GMAIL_PROVIDER_LIMIT, 10) || 20;

export const createGmailProvider = ({ oauth2Client, limit = defaultLimit, labelIds = ['SENT'] }) => {
  return {
    async *[Symbol.asyncIterator]() {
      const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
      const result = await gmail.users.messages.list({ userId: 'me', labelIds });

      //TODO walk through the pages->messages

      for (let index = 0; index < limit; index++) {
        const { id } = result.data.messages[index];
        const { data } = await gmail.users.messages.get({ userId: 'me', id });

        const {
          textPlain,
          headers: { subject },
        } = parseMessage(data);

        yield { textPlain, subject };
      }
    },
  };
};
