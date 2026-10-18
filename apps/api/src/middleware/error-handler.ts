import type { ErrorRequestHandler } from 'express';

import { AppError } from '../errors/app-error.js';

function isMalformedJsonError(error: unknown): boolean {
  return error instanceof SyntaxError && 'status' in error && error.status === 400;
}

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  void _next;

  if (isMalformedJsonError(error)) {
    response.status(400).json({
      error: {
        code: 'MALFORMED_JSON',
        message: 'Request body must contain valid JSON.',
      },
    });
    return;
  }

  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
      },
    });
    return;
  }

  response.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred.',
    },
  });
};
