import { createGmailProvider } from './gmail-provider';
import { createCleanTextProvider } from './clean-text-provider';
import { createTextPartsProvider } from './text-parts-provider';

export const createDefaultEmaiProvider = ({ oauth2Client }) => {
  const gmailProvider = createGmailProvider({ oauth2Client });
  const cleanTextProvider = createCleanTextProvider({ provider: gmailProvider });
  const textPartsProvider = createTextPartsProvider({ provider: cleanTextProvider });

  return textPartsProvider;
};
