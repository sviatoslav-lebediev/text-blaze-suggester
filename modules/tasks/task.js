import { randomBytes } from 'crypto';
import * as statuses from './statuses';

export class Task {
  result = undefined;
  status = statuses.PENDING;
  id = randomBytes(10).toString('hex');

  constructor(command, options = {}) {
    this.command = command;
    this.options = options;
  }

  async execute() {
    this.status = statuses.IN_PROGRESS;

    try {
      this.result = await this.command(this.options);

      this.status = statuses.DONE;
    } catch (error) {
      this.status = statuses.ERROR;

      throw error;
    }
  }
}
