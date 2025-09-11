import {test, expect} from "@playwright/test";

test("Should display Becoming a Marine page and return 200 status code",
  {
    tag:["@content-validation", "@resource-pages", "@becoming-a-marine"]
  },
  async ({ page }) => {
  const response = await page.goto('/content/marines/en/resources/becoming-a-marine.html', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);
  await expect(page.getByText("BECOMING A MARINE: EARNED – NEVER GIVEN")).toBeVisible();
});