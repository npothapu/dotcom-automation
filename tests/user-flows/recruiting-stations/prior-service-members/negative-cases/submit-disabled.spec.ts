import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  closeHelpWidget,
  eastCoastRecruitingStation,
} from "../../../../../utils/index";

test(
  "Submit button should be disabled for Prior Service Marines with no rank or service preference selected",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-prior-service",
      "@recruiting-stations-disabled-submit-button-prior-service",
    ],
  },
  async ({ page, isMobile }) => {
    await page.goto("/locations.html", { waitUntil: "domcontentloaded" });
    await acceptCookies(page);
    if (isMobile) {
      await closeHelpWidget(page);
    }
    await page.getByRole("button", { name: "prior service marines" }).click();
    await page
      .getByRole("spinbutton", { name: "Zip Code" })
      .fill(eastCoastRecruitingStation.userEnteredZip);
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeDisabled();
  }
);
