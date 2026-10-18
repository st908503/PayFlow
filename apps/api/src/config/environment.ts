import { config } from 'dotenv';
import { z } from 'zod';

config({ path: new URL('../../../../.env', import.meta.url), quiet: true });

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65_535).default(3000),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
});

export type Environment = z.infer<typeof environmentSchema>;

export function parseEnvironment(input: Record<string, string | undefined>): Environment {
  const result = environmentSchema.safeParse(input);

  if (!result.success) {
    throw new Error(
      `Invalid environment configuration: ${JSON.stringify(result.error.flatten().fieldErrors)}`,
    );
  }

  return result.data;
}

export const environment = parseEnvironment(process.env);
