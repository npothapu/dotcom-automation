import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  eastCoastOfficer,
  closeHelpWidget,
  handleGoogleMapsPopup,
} from "../../../../utils/index";

test(
  "Find recruiting station for Officer prior service member and navigate to correct destination on Google Maps",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-prior-service",
      "@recruiting-stations-prior-service-officer",
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
      .fill(eastCoastOfficer.userEnteredZip);
    await page
      .getByRole("radio", { name: eastCoastOfficer.rank!.Officer! })
      .check();
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeEnabled();
    await findMyRecruitingStationBtn.click();
    const recruitingStationName = page.getByRole("heading", {
      name: eastCoastOfficer.name,
    });
    const recruitingStationAddress = page.getByText(eastCoastOfficer.address);
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
