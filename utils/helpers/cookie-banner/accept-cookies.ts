import { Page } from "@playwright/test";

export const acceptCookies = async (page: Page) => {
  await page.getByRole("button", { name: "Accept Cookies" }).click();
};
