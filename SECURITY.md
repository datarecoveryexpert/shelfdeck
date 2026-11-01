# Security Policy

ShelfDeck handles user API tokens, untrusted README content and, through the optional local bridge, spawns local processes. We take reports seriously.

## Reporting a vulnerability

Please **do not open a public issue** for security problems. Report them privately through GitHub:

**[Report a vulnerability](https://github.com/datarecoveryexpert/shelfdeck/security/advisories/new)**

If you cannot use GitHub, e-mail [a.ceyhan@goldverikurtarma.com](mailto:a.ceyhan@goldverikurtarma.com) with the subject `[ShelfDeck Security]`.

Include a description, the affected component (web app, extension, local bridge, sync engine, vault Action), reproduction steps and the impact you expect. You will get an acknowledgement within 7 days.

## Scope

Areas of particular interest:

- Token leakage: any path where a GitHub PAT, Hugging Face token or BYOK key could reach a server other than its own API endpoint, or end up in a vault commit.
- The local CLI bridge (`127.0.0.1` binding, PIN pairing, origin checks, subprocess isolation).
- Prompt injection through README or model-card content.
- XSS through Markdown notes, release notes or AI-generated SVG covers.

## Supported versions

There is no release yet. Once versions ship, only the latest minor release will receive security fixes.
