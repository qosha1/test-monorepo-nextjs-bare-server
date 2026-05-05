# test-monorepo-nextjs-bare-server

Reproduces the raise-simpli failure (project 3446 / build 17745):

- Monorepo with `web-app/` Next.js app subdir
- `web-app/package.json` scripts.start = `node server.js`
- No `server.js` exists anywhere
- The user runs `npm run dev` locally (next dev), never npm start

Our platform must NOT propagate `npm start` to the container — it would
fail with `Cannot find module '/app/web-app/server.js'`. Instead, fall
through to `next start` (against the `.next/` build output) or the
standalone server (`node .next/standalone/server.js`) if available.
