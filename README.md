# Dotcom Automation Suite

## Setup

Note: Below local setup and references are for VSCode.

Prereq: Ensure you have local admin permissions.

- Clone the repo.
- Save to a local directory, rather than a OneDrive synced directory.
- Install Homebrew
  - Brew will automatically install git.
  - Install Node via Homebrew
  - If you already have git & Node installed, you can skip
- Open a command prompt or terminal at the project root, run the following commands
  - Install Dependencies
    - Install project dependencies: npm/pnpm install
    - Install DotEnv: npm/pnpm install dotenv
    - Install Cross-Env: npm/pnpm install cross-env
    - Install Playwright Lighthouse Library: npm/pnpm install --save-dev playwright-lighthouse playwright lighthouse
- Install these VSCode extensions for ease of use:
  - Playwright Test for VSCode
  - Prettier - Code formatter
- Turn VSCode setting to periodically fetch from main ON.
- Ensure VSCode is set to Auto Save

### Utilities

#### Environment Files

#### Helpers

This directory contains all the repeated functions throughout all tests, or tests in common.
When utilizing multiple helper functions they will be separated via area of function and specific use case.

### UI Mode

UI Mode will launch a user interface where you can start, stop, & pause tests while viewing everything you test is written to do. This is an excellent feature when attempting to debug your tests. Be sure to try it out, by using the terminal command: npx playwright test --ui

### Running the suite

Refer to package json for npm scripts for running different environments or test suites.
`npm run test:prod` || `npm run test:stg`

`npx playwright test`
Runs the end-to-end tests.

`npx playwright test --grep @tag`
Runs test with the specified @tag associated, can further be specified via --project

`npx playwright test --ui`
Starts the interactive UI mode.

`npx playwright test --project=chromium`
Runs the tests only on Desktop Chrome.

`npx playwright test example`
Runs the tests in a specific file.

`npx playwright test --debug`
Runs the tests in debug mode.

`npx playwright codegen`
Auto generate tests with Codegen.

But there's [more](https://playwright.dev/docs/test-cli)!
