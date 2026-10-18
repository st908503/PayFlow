# Contributing to PayFlow

## Workflow

- Work on one approved roadmap feature at a time.
- Use a short-lived branch named `codex/<type>-<summary>`.
- Keep each commit focused on one feature or tightly related fix.
- Run `pnpm check` before proposing a commit.

## Commit messages

Use the format `<type>(<scope>): <imperative summary>`.

Examples:

- `feat(api): add health endpoint`
- `test(payments): cover idempotent confirmation`
- `chore(tooling): add lint checks`

## Repository safety

- Do not commit `.env` files, credentials, generated build output, or `node_modules`.
- Do not reset, force-push, or discard another contributor's work without explicit approval.
- Address failing checks rather than weakening the relevant test or security control.
