import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  westCoastRecruitingStation,
  closeHelpWidget,
} from "../../../../../../utils/index";

test(
  "Find Recruiting Station button should not be clickable for 10th grade and below education selection",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-tenth-grade-below",
    ],
  },
  async ({ page, isMobile }) => {
    await page.goto("/locations.html", { waitUntil: "domcontentloaded" });
    await acceptCookies(page);
    if (isMobile) {
      await closeHelpWidget(page);
    }
    await page
      .getByRole("spinbutton", { name: "Zip Code" })
      .fill(westCoastRecruitingStation.userEnteredZip);
    await page.getByRole("textbox", { name: "Education" }).click();
    await page
      .getByRole("button", { name: "High School 10th Grade and Below" })
      .click();
    const ageRestrictionMessage = page.getByText(
      "You must be 16 years old and a high school junior to connect with a Marine Recruiter"
    );
    const findMyRecruitingStationButton = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationButton).toBeDisabled();
    await expect(ageRestrictionMessage).toBeVisible();
  }
);
