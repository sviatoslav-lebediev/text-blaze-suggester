export const createTextPartsProvider = ({ provider }) => {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const item of provider) {
        const textParts = item.textPlain.split(/[.?!]/gi);

        yield { textParts, ...item };
      }
    },
  };
};
