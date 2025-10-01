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

## Environment Configuration

### Environment File Setup

After cloning the repository, you'll need to create your local environment file:

1. **Copy the example file**: Navigate to `utils/env/` and copy `.env.example` to `.env`:
   ```powershell
   # PowerShell
   Copy-Item "utils/env/.env.example" "utils/env/.env"
   
   # Or using Command Prompt
   copy "utils\env\.env.example" "utils\env\.env"
   ```

2. **Configure your environment**: Edit the new `utils/env/.env` file with your local configuration values.

3. **Important**: The `.env` file is automatically ignored by Git, so your local configurations and any sensitive information will never be committed to the repository.

The `.env.example` file serves as a template showing the required environment variables and their expected format. Always keep the example file updated when adding new environment variables to ensure other team members know what configuration is needed.

## MCP Server Setup

### What is MCP (Model Context Protocol)?

MCP enables AI assistants to securely access external data sources and tools. For this automation framework, an MCP server can provide enhanced capabilities for test generation, debugging, and project management.

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- This automation framework already set up

### Setting Up Playwright MCP Server

1. **Install MCP Playwright Server**:
   ```powershell
   # Using npm
   npm install -g @modelcontextprotocol/server-playwright
   
   # Or using pnpm
   pnpm add -g @modelcontextprotocol/server-playwright
   ```

2. **Configure MCP Client** (Claude Desktop/VS Code):
   
   **For Claude Desktop** - Add to your `claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["@modelcontextprotocol/server-playwright"],
         "env": {
           "PLAYWRIGHT_BASE_URL": "https://your-test-site.com"
         }
       }
     }
   }
   ```

   **For VS Code** - Install the MCP extension and configure similarly.

3. **Environment Configuration**:
   ```powershell
   # Add to your .env file
   PLAYWRIGHT_BASE_URL=https://your-test-site.com
   PLAYWRIGHT_BROWSER=chromium
   PLAYWRIGHT_HEADLESS=false
   ```

### Using MCP with This Framework

1. **Test Generation**: Use MCP to generate new test scenarios based on user flows
2. **Debugging**: Get AI assistance for test failures and debugging
3. **Code Review**: Automated suggestions for test improvement
4. **Documentation**: Generate test documentation and reports

### Example MCP Commands

```powershell
# Start MCP server manually for testing
npx @modelcontextprotocol/server-playwright

# Run with specific configuration
PLAYWRIGHT_BASE_URL=https://your-site.com npx @modelcontextprotocol/server-playwright
```

### Troubleshooting MCP Setup

- **Permission Issues**: Run PowerShell as Administrator if needed
- **Path Issues**: Ensure Node.js and npm are in your system PATH
- **Port Conflicts**: MCP servers typically use different ports automatically
- **Browser Issues**: Make sure Playwright browsers are installed: `npx playwright install`

### Benefits of MCP Integration

- **Enhanced Test Creation**: AI-assisted test scenario generation
- **Smart Debugging**: Contextual assistance for test failures
- **Code Quality**: Automated suggestions for best practices
- **Documentation**: Auto-generated test documentation
- **Maintenance**: Proactive suggestions for test updates

For more information, visit the [MCP Documentation](https://modelcontextprotocol.io/docs).
