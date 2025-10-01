import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  eastCoastReserves,
  closeHelpWidget,
  handleGoogleMapsPopup,
} from "../../../../utils/index";

test(
  "Find recruiting station for Reserves prior service member and navigate to correct destination on Google Maps",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-prior-service",
      "@recruiting-stations-prior-service-reserves",
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
      .fill(eastCoastReserves.userEnteredZip);
    await page
      .getByRole("radio", { name: eastCoastReserves.rank!.Enlisted! })
      .check();
    await page
      .getByRole("radio", {
        name: eastCoastReserves.servicePreference!.Reserves!,
      })
      .check();
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeEnabled();
    await findMyRecruitingStationBtn.click();
    const recruitingStationName = page.getByRole("heading", {
      name: eastCoastReserves.name,
    });
    const recruitingStationAddress = page.getByText(eastCoastReserves.address);
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
    expect(decodedURL).toContain("BLDG 5550 WESTOVER ARB");
    expect(decodedURL).toContain("CHICOPEE");
    expect(decodedURL).toContain("MA");
    expect(decodedURL).toContain("01022");
  }
);
