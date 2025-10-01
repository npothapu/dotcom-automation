import {test, expect} from "@playwright/test";

test("Should display A Battle Won, A Lasting Change page and return 200 status code",
  {
    tag:["@content-validation", "@resource-pages", "@battle-won-lasting-change"]
  }, 
  async ({ page }) => {
  const response = await page.goto('/content/marines/en/resources/a-battle-won--a-lasting-change.html', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(200);
  await expect(page.getByText("A Battle Won, A Lasting Change")).toBeVisible();
});