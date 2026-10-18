# PayFlow

PayFlow is an educational, portfolio-focused MERN payment platform. It will model merchant payments using simulated processing only; it is not a licensed payment processor and must not be used for real funds or payment credentials.

## Current status

Phase 0 development foundations are in place. The repository currently contains shared tooling and documentation only. There is no API, web application, database, or runnable payment flow yet.

## Prerequisites

- Node.js 22 or later
- pnpm 12 or later
- Git

Docker is installed on the development machine but is not needed for the current milestone. It will be required later for local infrastructure such as MongoDB and Redis.

## Local setup

```bash
git clone <repository-url>
cd "MERN PayFlow"
pnpm install --frozen-lockfile
cp .env.example .env
pnpm check
```

The `.env` file is local-only and ignored by Git. Do not add credentials, tokens, or real payment data to source control.

## Available commands

| Command             | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `pnpm format`       | Format supported files with Prettier.              |
| `pnpm format:check` | Check formatting without changing files.           |
| `pnpm typecheck`    | Validate the shared TypeScript configuration.      |
| `pnpm lint`         | Run ESLint.                                        |
| `pnpm test`         | Run tests when application packages are added.     |
| `pnpm check`        | Run formatting, type-checking, linting, and tests. |

`pnpm dev` and `pnpm build` intentionally report that no workspace packages exist yet. They will become functional when the API and web packages are introduced.

## Development workflow

Work through one approved roadmap feature at a time. Before proposing a commit, run:

```bash
pnpm check
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch, commit, and repository-safety conventions.

## Security boundaries

- Use synthetic data only.
- Never store raw card numbers or CVVs.
- Keep secrets in ignored local environment files.
- Treat this project as a learning system, not production-ready financial infrastructure.
