import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  eastCoastCollegeRecruitingStation,
  closeHelpWidget,
  handleGoogleMapsPopup,
} from "../../../../../utils/index";

test(
  "Four year college student should show school name/location selection options, and show appropriate recruiting station results",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-four-year-student",
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
      .fill(eastCoastCollegeRecruitingStation.userEnteredZip);
    await page.getByRole("textbox", { name: "Education" }).click();
    await expect(
      page.getByRole("button", { name: "-Year College (Student)" })
    ).toBeVisible();
    await page.getByRole("button", { name: "-Year College (Student)" }).click();
    const stateSelection = page.getByRole("textbox", { name: "College State" });
    await stateSelection.click();
    const stateOption = page.getByRole("button", {
      name: eastCoastCollegeRecruitingStation.collegeState,
    });
    await stateOption.click({ force: true });
    const collegeNameSelection = page.getByRole("textbox", {
      name: "College Name",
    });
    await collegeNameSelection.click();
    const collegeOption = page.getByRole("button", {
      name: eastCoastCollegeRecruitingStation.collegeName,
    });
    await collegeOption.click();
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeEnabled();
    await findMyRecruitingStationBtn.click();
    const recruitingStationName = page.getByRole("heading", {
      name: eastCoastCollegeRecruitingStation.name,
    });
    const recruitingStationAddress = page.getByText(
      eastCoastCollegeRecruitingStation.address
    );
    await expect(recruitingStationName).toBeVisible();
    await expect(recruitingStationAddress).toBeVisible();
    await page.getByRole("link", { name: "Directions" }).click();
    const pageNavigation = page.waitForEvent("popup");
    const nextPage = await pageNavigation;
    const currentURL = nextPage.url();
    const decodedURL = decodeURIComponent(currentURL);
    if (isMobile) {
      await handleGoogleMapsPopup(nextPage);
    }
    expect(decodedURL).toContain("456 College Avenue");
    expect(decodedURL).toContain("Example Town");
    expect(decodedURL).toContain("EX");
    expect(decodedURL).toContain("54321");
  }
);
