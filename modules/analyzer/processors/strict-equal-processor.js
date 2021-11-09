export class StrictEqualProcessor {
  data = new Map();

  constructor(minCount = 3) {
    this.minCount = minCount;
  }

  process({ textParts }) {
    for (const textPart of textParts) {
      if (textPart.split(' ').length > 3) {
        if (this.data.has(textPart)) {
          this.data.set(textPart, this.data.get(textPart) + 1);
        } else {
          this.data.set(textPart, 1);
        }
      }
    }
  }

  getResult() {
    return [...this.data.entries()].filter(([, count]) => count >= this.minCount).map(([textPart]) => textPart);
  }
}
