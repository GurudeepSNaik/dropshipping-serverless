import { LogLevel } from '../types/logger';
import { logger } from './logger';


interface FormatErrorResponseParams {
  statusCode: number;
  message: string;
  details?: string;
  event?: any;
  functionName: string;
  job: string;
  level: LogLevel;
}

export const formatErrorResponse = async ({
  statusCode,
  message,
  details,
  event,
  functionName,
  job,
  level,
}: FormatErrorResponseParams): Promise<{ statusCode: number; body: string }> => {
  await logger({
    message,
    function: functionName,
    job,
    level,
    error: details,
    context: {
      event,
    },
  });

  return {
    statusCode,
    body: JSON.stringify({
      message,
      ...(details && { details }),
    }),
  };
};
