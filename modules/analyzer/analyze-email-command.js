import { debuglog } from 'util';

const debug = debuglog('suggester:analyze.email.command');

export const createAnalyzeEmailCommand =
  ({ provider, processor }) =>
  async () => {
    for await (const email of provider) {
      debug('textPlain', email.textPlain);

      processor.process(email);
    }

    if (debug.enabled) {
      debug('result', [...processor.getResult()]);
    }

    return [...processor.getResult()].map((value) => ({ value }));
  };
