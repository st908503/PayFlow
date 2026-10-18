import type { OpenAPIV3 } from 'openapi-types';

export const openApiDocument: OpenAPIV3.Document = {
  openapi: '3.0.3',
  info: {
    title: 'PayFlow API',
    version: '1.0.0',
    description:
      'Portfolio and learning API for simulated payment processing. It must not be used with real payment credentials or funds.',
  },
  servers: [{ url: '/api/v1' }],
  paths: {
    '/health': {
      get: {
        operationId: 'getHealth',
        summary: 'Check API liveness',
        responses: {
          '200': {
            description: 'The API process is responding.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['status'],
                  properties: {
                    status: { type: 'string', example: 'ok' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/echo': {
      post: {
        operationId: 'echoMessage',
        summary: 'Validate and return a message',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['message'],
                properties: {
                  message: { type: 'string', minLength: 1, maxLength: 500 },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Validated message.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['message'],
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Malformed or invalid JSON request body.',
          },
        },
      },
    },
  },
};
