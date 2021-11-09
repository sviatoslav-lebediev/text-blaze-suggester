import { google } from 'googleapis';

export const createAuthClient = (options = [process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGEL_AUHT_CALLBACK]) =>
  new google.auth.OAuth2(...options);
