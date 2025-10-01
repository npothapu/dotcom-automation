import { Page } from "@playwright/test";

export const closeHelpWidget = async (page: Page) => {
  await page
    .locator("#lhc_needhelp_widget_v2")
    .contentFrame()
    .getByRole("button", { name: "Close" })
    .click();
};
