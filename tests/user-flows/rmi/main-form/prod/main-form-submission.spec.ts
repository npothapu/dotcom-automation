import { test, expect } from "@playwright/test";
import {
  prodTestUser,
  doFillAndSubmitForm,
  blockGoogleAnalytics,
  acceptCookies,
} from "../../../../../utils";

test(
  "Should successfully submit RMI form",
  { tag: ["@rmi-prod", "@rmi-prod-main-form", "@rmi-submission", "@redesign"] },
  async ({ page }) => {
    await blockGoogleAnalytics(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await acceptCookies(page);
    await doFillAndSubmitForm(page, prodTestUser);
    await expect(
      page.getByText(
        "Thank You for considering the noble path of becoming a United States Marine."
      )
    ).toBeVisible();
  }
);
