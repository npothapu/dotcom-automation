import { test, expect } from "@playwright/test";
import {
  blockGoogleAnalytics,
  doFillAndSubmitForm,
  prodTestUser,
} from "../../../../../utils";

test(
  "Should successfully submit event code and rmi form",
  {
    tag: [
      "@rmi-prod",
      "@rmi-prod-event-code-form",
      "@rmi-submission",
      "@redesign",
    ],
  },
  async ({ page }) => {
    const eventCode = process.env.RMI_EVENT_CODE;
    if (!eventCode) {
      throw new Error("RMI_EVENT_CODE not found, oopsie!");
    }
    await blockGoogleAnalytics(page);
    await page.goto("/hheac", { waitUntil: "domcontentloaded" });
    await page.getByRole("textbox", { name: "Event Code" }).fill(eventCode);
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("textbox", { name: "First Name, required" })
    ).toBeVisible();
    await doFillAndSubmitForm(page, prodTestUser);
    await expect(
      page.getByRole("heading", {
        name: "Thank you",
      })
    ).toBeVisible();
  }
);
