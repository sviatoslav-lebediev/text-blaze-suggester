import { createGetHandler } from 'utils/http';
import { createAuthClient } from 'utils/googleapis';
import { Task, defaultTaskManager } from 'modules/tasks';
import { createDefaultEmaiProvider } from 'modules/analyzer/providers';
import { createDefaultEmailProcessor } from 'modules/analyzer/processors';
import { createAnalyzeEmailCommand } from 'modules/analyzer/analyze-email-command';

export default createGetHandler(async (req, res) => {
  const code = req.query.code;
  const oauth2Client = createAuthClient();
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const processor = createDefaultEmailProcessor();
  const provider = createDefaultEmaiProvider({ oauth2Client });

  const task = new Task(createAnalyzeEmailCommand({ processor, provider }));

  defaultTaskManager.execute(task);

  res.redirect(302, `/tasks/${task.id}`);
});
