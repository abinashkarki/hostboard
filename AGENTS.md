# Hostboard

Turnover board for short-stay property managers: which properties have guests leaving and arriving today, who cleans each one, and the clean's status.

- `src/lib/board.ts` builds the board rows from bookings; keep its logic pure and covered by `src/lib/board.test.ts` (Vitest).
- `src/components/` renders the board. `src/data/seed.ts` is demo data, fixed to one day.
- Each customer (a property management company) sees only its own properties. Never mix customers in one board.

## Checks

`npm run typecheck && npm test`
