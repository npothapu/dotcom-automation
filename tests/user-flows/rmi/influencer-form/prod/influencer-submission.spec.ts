import { test, expect } from "@playwright/test";
import {
  prodTestUser,
  doFillAndSubmitInfluencerForm,
  blockGoogleAnalytics,
} from "../../../../../utils";

test(
  "Should successfully submit RMI Influencer form",
  {
    tag: [
      "@rmi-prod",
      "@rmi-prod-influencer-form",
      "@rmi-submission",
      "@redesign",
    ],
  },
  async ({ page }) => {
    await blockGoogleAnalytics(page);
    await page.goto("/influencer", { waitUntil: "domcontentloaded" });
    await doFillAndSubmitInfluencerForm(page, prodTestUser);
    await expect(
      page.getByRole("heading", {
        name: "Thank you for joining the united states Marine Corps influencer program",
      })
    ).toBeVisible();
  }
);
