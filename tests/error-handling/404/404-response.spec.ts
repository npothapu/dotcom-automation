import { test, expect } from '@playwright/test';

test("Should return 404 response status code and display error page",
  {
    tag:["@error-handling", "@404-response"]
  },
  async({ page }) => {
  const response = await page.goto('/life-as-a-marine/standards', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(404);
  await expect(page.frameLocator('iframe').getByText("404: PAGE NOT FOUND")).toBeVisible();
});