import { randomUUID } from 'node:crypto';

import { pinoHttp } from 'pino-http';

import { environment } from '../config/environment.js';

export const requestLogger = pinoHttp({
  level: environment.LOG_LEVEL,
  genReqId: (_request, response) => {
    const requestId = randomUUID();
    response.setHeader('x-request-id', requestId);
    return requestId;
  },
  redact: ['req.headers.authorization', 'req.headers.cookie', 'res.headers.set-cookie'],
});
