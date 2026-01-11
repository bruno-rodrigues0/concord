import type { LoggerOptions } from "pino";

export const loggerConfig: LoggerOptions = {
  level: "warn",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "HH:MM:ss",
      ignore: "pid,hostname",
    },
  },
};
