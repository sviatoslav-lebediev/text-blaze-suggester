export class ComposedProcessor {
  constructor(processors) {
    this.processors = processors;
  }

  process(data) {
    for (const processor of this.processors) {
      processor.process(data);
    }
  }

  getResult() {
    const results = new Set(this.processors.map((processor) => processor.getResult()).flat());

    return results.values();
  }
}
