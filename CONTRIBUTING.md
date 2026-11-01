# Contributing to ShelfDeck

Thanks for your interest in ShelfDeck. The project is in its design phase, so right now the most useful contributions are ideas, translations and early design work. Code contributions will open up once the monorepo is bootstrapped (Phase 1 in the [roadmap](README.md#roadmap)).

## Ways to help today

- **Share ideas.** Open a feature request if something you need is missing from the [README](README.md).
- **Translate the README.** Copy `README.md` into `docs/i18n/README.<lang>.md`, translate it, fix the relative links (`../../`) and add your language to the selector line in every README.
- **Propose a poster theme.** Use the *New poster theme* issue template and attach a sketch or mockup.
- **Propose a source adapter.** GitLab, Codeberg, Civitai, Kaggle, npm, PyPI, crates.io… use the *New source adapter* template.

## Contribution surfaces (once code lands)

| Surface | Location | What it takes |
| :--- | :--- | :--- |
| Poster themes | `packages/cover-engine/themes/` | One self-contained TypeScript/SVG file. No sync or auth knowledge needed. |
| Source adapters | `packages/core/sources/` | Implement the `SourceAdapter` interface plus fixture-based unit tests. |
| Image providers | `packages/cover-engine/providers/` | Implement `ImageProviderAdapter`, roughly 80 lines. |
| Translations | `docs/i18n/` | Markdown only. |

## Workflow

1. Search existing issues before opening a new one.
2. For anything bigger than a typo, open an issue first so we can agree on the approach.
3. Fork the repo and create a branch: `feat/short-description`, `fix/…` or `docs/…`.
4. Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages (`feat:`, `fix:`, `docs:`, `chore:`).
5. Open a pull request using the template and link the related issue.

## Ground rules

- **Never commit secrets.** API keys and tokens must never appear in code, fixtures, screenshots or logs. This is a core product promise.
- **Keep the local-first promise.** Features must not require a ShelfDeck-operated server.
- **Be kind.** All participation is covered by the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
