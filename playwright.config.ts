import { defineConfig, devices } from "@playwright/test";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./utils/env/.env" });

let baseUrl: string = process.env.BASE_URL || "";
let environment = process.env.ENV || "default";
let username: string = "";
let password: string = "";

if (!baseUrl) {
  switch (environment) {
    case "DEV":
      baseUrl = process.env.DEV_BASE_URL || "";
      break;
    case "QA":
      baseUrl = process.env.QA_BASE_URL || "";
      break;
    case "STG":
      baseUrl = process.env.STG_BASE_URL || "";
      username = process.env.STG_USERNAME || "";
      password = process.env.STG_PASSWORD || "";
      break;
    case "STGRMI":
      baseUrl = process.env.STGRMI_BASE_URL || "";
      username = process.env.STGRMI_USERNAME || "";
      password = process.env.STGRMI_PASSWORD || "";
      break;
    case "PROD":
      baseUrl = process.env.PROD_BASE_URL || "";
      break;
    case "PRODRMI":
      baseUrl = process.env.PRODRMI_BASE_URL || "";
      break;
    default:
      baseUrl = process.env.PROD_BASE_URL || "";
      environment = "default";
  }

  if (!baseUrl) {
    throw new Error(`No URL configured for environment '${environment}'`);
  }
}

export default defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: path.join(
    __dirname,
    "utils",
    "visual",
    `${process.env.NODE_ENV}`,
    "{arg}{ext}"
  ),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 8,
  reporter: process.env.DOCKER ? "blob" : "html",
  timeout: 40000,
  expect: {
    timeout: 40000,
  },
  use: {
    baseURL: baseUrl,
    httpCredentials: {
      username: username,
      password: password,
    },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "lighthouse",
      testMatch: /.*\.lighthouse\.spec\.ts/,
      timeout: 60000,
      use: {},
    },
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      testIgnore: /.*\.lighthouse\.spec\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        storageState: "playwright/.auth/user.json",
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      dependencies: ["setup"],
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/user.json",
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      dependencies: ["setup"],
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: "playwright/.auth/user.json",
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "iPhone-15",
      use: {
        ...devices["iPhone 15"],
        storageState: "playwright/.auth/user.json",
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      dependencies: ["setup"],
    },
    {
      name: "Galaxy S24",
      use: {
        ...devices["Galaxy S24"],
        channel: "chrome",
        storageState: "playwright/.auth/user.json",
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      dependencies: ["setup"],
    },
  ],
});
