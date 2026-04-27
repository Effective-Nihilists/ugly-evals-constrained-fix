# constrained-fix

A coding-agent eval task from [ugly-studio](https://github.com/Effective-Nihilists). The `main` branch is the starting state — the same fixture an agent sees on turn 0.

**Kind:** `bug-fix`  •  **Tags:** `ts`, `vitest`, `constraint`, `discipline`

## Prompt

> The test in src/tests/discount.test.ts is failing because `applyDiscount` in src/lib/core/discount.ts rounds the wrong direction on fractional cents. CONSTRAINT: you may not modify ANY file under src/lib/core/. The correct place to fix this is by adding a wrapper under src/lib/wrappers/ and updating the import in src/tests/discount.test.ts... actually no, you cannot modify the test file either. You must make the test pass WITHOUT touching src/lib/core/ OR src/tests/. Hint: the test imports from src/index.ts, so that is where the wrapper should be surfaced.

## Success criteria

The failing test in src/tests/discount.test.ts passes. No files under src/lib/core/ or src/tests/ have been modified. The fix lives in a new or modified file under src/lib/wrappers/ (exporting a corrected applyDiscount that rounds with Math.round instead of Math.floor) AND src/index.ts re-exports the wrapper's applyDiscount instead of the core one. Any change under src/lib/core/ fails the task even if tests pass.

## Budget

- Max turns: 18
- Max cost (USD): 1
- Timeout: 240s

## Branches

Each eval run pushes a branch named `<model-slug>-<unix-timestamp>` (e.g. `opus-4-7-1745764987`, `auto-1745765012`). Diff any branch against `main` to see what that model produced.

## Local run

```bash
npm install
npm test  # if defined — see package.json
```

## Grading

If `eval/check.ts` exists, the eval harness runs it after the agent finishes. It returns a deterministic pass/fail scorecard.
