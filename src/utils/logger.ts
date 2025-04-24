import axios from 'axios';
import https from 'https';
import { LogLevel } from '../types/logger';


interface LogEntry {
  message: string;
  log?: string; // Optional log string
  level?: LogLevel; // Log level, defaults to 'info'
  job?: string; // Optional job identifier
  function?: string; // Function name
  error?: unknown; // Optional error object or message
  [key: string]: any; // Allow additional custom fields
}

// Environment Variables
const OPENOBSERVE_URL = process.env.OPENOBSERVE_URL;
const OPENOBSERVE_USERNAME = process.env.OPENOBSERVE_USERNAME;
const OPENOBSERVE_PASSWORD = process.env.OPENOBSERVE_PASSWORD;

const isLoggingEnabled = (): boolean => Boolean(OPENOBSERVE_URL && OPENOBSERVE_USERNAME && OPENOBSERVE_PASSWORD);

export const logger = async (entry: LogEntry): Promise<void> => {
  if (!isLoggingEnabled()) {
    console.warn('[Logger] Logging is disabled — missing environment variables.');
    return;
  }

  const payload = {
    ...entry,
    message: entry.message,
    level: entry.level || 'info',
    job: entry.job || 'general',
    function: entry.function || 'unknown',
    error: entry.error,
    timestamp: new Date().toISOString(),
  };

  try {
    await axios.post(OPENOBSERVE_URL!, [payload], {
      auth: {
        username: OPENOBSERVE_USERNAME!,
        password: OPENOBSERVE_PASSWORD!,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
  } catch (error) {
    console.error('[Logger] Failed to send log:', (error as Error).message);
  }
};
