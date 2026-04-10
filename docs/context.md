# Product Context

## Product summary

This repository is the shared base for a real-estate application built with Next.js 16.
It is intended to serve as a consistent starting point for multiple collaborators working in the same codebase.

## Current state

- The project is currently a starter scaffold, not a full product implementation.
- Core platform tooling is already installed: Next.js, React, TypeScript, Tailwind CSS, ESLint, React Query, `xlsx`, `jspdf`, `jspdf-autotable`, and `react-calendar`.
- The repository already supports SSR with the App Router and has a root provider layer for client-side libraries.

## Intended domain

The expected product direction is a real-estate management app. Likely product areas include:

- property listings
- client and lead management
- scheduling visits or appointments
- exporting reports to Excel and PDF
- operational dashboards for internal teams

These domains should guide naming, modules, and UX decisions unless the team explicitly changes direction.

## Collaboration goals

- Keep the project easy to onboard into.
- Make structural decisions explicit and repeatable.
- Prefer conventions over ad hoc folder creation.
- Document important product or architecture decisions close to the codebase.

## Non-goals for now

- Do not assume a finalized business workflow that has not been documented yet.
- Do not prematurely add backend services, auth providers, or state libraries beyond the current stack unless there is a clear implementation need.
- Do not treat the current landing page as final product direction; it is only a starter surface.
