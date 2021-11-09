export class TasksManager {
  tasks = new Map();

  // we can add queue or something else if needed
  execute(task) {
    this.tasks.set(task.id, task);

    task.execute();
  }

  getTaskById(taskId) {
    return this.tasks.get(taskId);
  }
}
