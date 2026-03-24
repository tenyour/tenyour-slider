# Contributing

Thanks for your interest in contributing to Tenyour Slider.

For substantial changes (new APIs, large refactors, or behavior shifts), please **open an issue first**. Small fixes and documentation improvements can be submitted directly as pull requests.


## Development setup

```bash
git clone https://github.com/tenyour/tenyour-slider.git
cd tenyour-slider
npm install
npm run storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

Other useful commands:

- `npm run build` — produce the library bundle (and surface compile errors)
- `npm test` — run the test suite
- `npm run build-storybook` — static Storybook build (CI-style check)

## How to propose changes

1. **Open an issue** for major or ambiguous work, or if you want to confirm fit before coding.
2. **Fork the repo** and create a branch from `main` (or the default branch).
3. **Make focused changes** with a clear scope; prefer several small PRs over one huge one.
4. **Add or update Storybook stories** when you change behavior, props, or visuals that users would notice.
5. **Run `npm run build`** (and `npm test` when tests apply) before opening a PR.
6. **Open a pull request** with a short description of what changed and why. Link related issues when applicable.

## Coding conventions

- **Accessibility first** — the component is built on the native range input; preserve keyboard use, labels, and sensible defaults for screen readers.
- **Controlled API** — `value` is controlled; do not introduce patterns that silently ignore `onChange` or break predictable parent state.
- **API stability** — avoid breaking changes to public props and types unless discussed in an issue and versioned appropriately.
- **Match existing style** — follow the project’s TypeScript, formatting, and file layout; extend existing utilities instead of duplicating logic.
- **Document behavior** — update `docs/` or README when user-facing behavior or props change.

## Pull request process

- Keep the PR description in **complete sentences** and scoped to what you changed.
- Ensure the branch is **up to date** with the default branch when reasonable.
- Respond to review feedback; maintainers may suggest follow-ups or request tests/story updates.

## Reporting bugs

Please [open an issue](https://github.com/tenyour/tenyour-slider/issues) with:

- **Reproduction** — minimal code or steps (e.g. Storybook story, sandbox, or snippet).
- **Expected vs actual** behavior.
- **Environment** when relevant — React version, browser, OS.
- **Screenshots or recordings** if they help explain UI or accessibility problems.
