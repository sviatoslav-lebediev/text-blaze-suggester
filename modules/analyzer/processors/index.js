import { HeadProcessor } from './head-processor';
import { SignatureProcessor } from './signature-processor';
import { SubjectProcessor } from './subject-processor';
import { ComposedProcessor } from './composed-processor';
import { StrictEqualProcessor } from './strict-equal-processor';

export const createDefaultEmailProcessor = () => {
  const processors = [new HeadProcessor(), new SignatureProcessor(), new StrictEqualProcessor(), new SubjectProcessor()];

  return new ComposedProcessor(processors);
};
