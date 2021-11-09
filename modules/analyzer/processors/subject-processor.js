export class SubjectProcessor {
  data = new Map();

  constructor(minCount = 3) {
    this.minCount = minCount;
  }

  process({ subject }) {
    // TODO remove something related to the subject (somebodys' name...)

    if (this.data.has(subject)) {
      this.data.set(subject, this.data.get(subject) + 1);
    } else {
      this.data.set(subject, 1);
    }
  }

  getResult() {
    return [...this.data.entries()].filter(([, count]) => count >= this.minCount).map(([title]) => title);
  }
}
