import { createGetHandler } from 'utils/http';
import { defaultTaskManager } from 'modules/tasks';

export default createGetHandler((req, res) => {
  const { id } = req.query;
  const task = defaultTaskManager.getTaskById(id);

  if (task) {
    res.send({
      data: {
        status: task.status,
        suggestions: task.result,
      },
    });
  } else {
    res.status(404).end();
  }
});
