import { test, expect } from "@playwright/test"

test("Should return 500 status code and display error page",
  {
    tag:["@error-handling", "@500-response"]
  },
  async ({ page }) => {
  const response = await page.goto('/bin/httpstatus?code=500', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(500);
  await expect(page.frameLocator('iframe').getByText("500: INTERNAL SERVER ERROR")).toBeVisible();
});