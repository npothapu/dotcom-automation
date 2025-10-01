import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  eastCoastRecruitingStation,
  closeHelpWidget,
  handleGoogleMapsPopup,
} from "../../../../../utils/index";

test(
  "Find recruiting station for HS graduate and navigate to correct destination on Google Maps",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-high-school-graduate",
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
      .fill(eastCoastRecruitingStation.userEnteredZip);
    await page.getByRole("textbox", { name: "Education" }).click();
    await expect(
      page.getByRole("button", { name: "High School Graduate" })
    ).toBeVisible();
    await page.getByRole("button", { name: "High School Graduate" }).click();
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeEnabled();
    await findMyRecruitingStationBtn.click();
    const recruitingStationName = page.getByRole("heading", {
      name: eastCoastRecruitingStation.name,
    });
    const recruitingStationAddress = page.getByText(
      eastCoastRecruitingStation.address
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
    expect(decodedURL).toContain("123 Example Street");
    expect(decodedURL).toContain("Example City");
    expect(decodedURL).toContain("EX");
    expect(decodedURL).toContain("12345");
  }
);
