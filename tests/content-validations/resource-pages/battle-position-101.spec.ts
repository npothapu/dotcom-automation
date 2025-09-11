import {test, expect} from "@playwright/test";

test("Should display Battle Position 101 page and return 200 status code",
  {
    tag:["@content-validation", "@resource-pages", "@battle-position"]
  },
  async ({ page }) => {
  const response = await page.goto('/resources/battle-position-101.html', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);
  await expect(page.getByText("Battle Position 101")).toBeVisible();
});