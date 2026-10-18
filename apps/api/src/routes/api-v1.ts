import { Router } from 'express';
import { z } from 'zod';

import { openApiDocument } from '../docs/openapi.js';
import { validateBody } from '../middleware/validate-request.js';

export const apiV1Router = Router();

const echoBodySchema = z.object({
  message: z.string().trim().min(1).max(500),
});

apiV1Router.get('/openapi.json', (_request, response) => {
  response.json(openApiDocument);
});

apiV1Router.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

apiV1Router.post('/echo', validateBody(echoBodySchema), (request, response) => {
  response.status(200).json({ message: request.body.message });
});
