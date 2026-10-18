import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { openApiDocument } from './docs/openapi.js';
import { AppError } from './errors/app-error.js';
import { errorHandler } from './middleware/error-handler.js';
import { requestLogger } from './middleware/request-logger.js';
import { apiV1Router } from './routes/api-v1.js';

export const app = express();

app.use(requestLogger);
app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ message: 'PayFlow API is running.' });
});

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use('/api/v1', apiV1Router);

app.use((_request, _response, next) => {
  next(new AppError(404, 'NOT_FOUND', 'Route not found.'));
});

app.use(errorHandler);
