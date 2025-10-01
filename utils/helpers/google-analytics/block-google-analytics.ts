import { Page } from "@playwright/test";

export async function blockGoogleAnalytics(page: Page) {
  await page.route("https://www.google-analytics.com/g/collect*", (route) => {
    route.fulfill({
      status: 204,
      body: "",
    });
  });
  await page.route("**/analytics.google.com/**", (route) => {
    route.fulfill({ status: 204, body: "" });
  });
  await page.route("**/google.com/measurement/**", (route) => {
    route.fulfill({ status: 204, body: "" });
  });

  await page.route("**/google.com/pagead/**", (route) => {
    route.fulfill({ status: 204, body: "" });
  });

  await page.route("**/googletagmanager.com/**", (route) => {
    route.fulfill({ status: 204, body: "" });
  });
}
