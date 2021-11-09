import { createGetHandler } from 'utils/http';
import { createAuthClient } from 'utils/googleapis';
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

export default createGetHandler((req, res) => {
  const oAuth2Client = createAuthClient();

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES.join(' '),
  });

  res.redirect(302, authorizeUrl);
});
