export const createCleanTextProvider = ({ provider }) => {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const item of provider) {
        const { textPlain = '', ...rest } = item;

        yield { textPlain: textPlain.replace(/(?:\r\n|\r|\n)/g, ''), ...rest };
      }
    },
  };
};
