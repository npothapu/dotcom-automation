import { test, expect } from "@playwright/test";
import {
  acceptCookies,
  closeHelpWidget,
  eastCoastEnlisted,
} from "../../../../../utils/index";

test(
  "Prior Service Marines - Invalid zip code should show No Results Found",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-prior-service",
      "@recruiting-stations-prior-service-invalid-zip-code",
    ],
  },
  async ({ page, isMobile }) => {
    await page.goto("/locations.html", { waitUntil: "domcontentloaded" });
    await acceptCookies(page);
    if (isMobile) {
      await closeHelpWidget(page);
    }
    await page.getByRole("button", { name: "prior service marines" }).click();
    await page.getByRole("spinbutton", { name: "Zip Code" }).fill("123456789");
    await page
      .getByRole("radio", { name: eastCoastEnlisted.rank!.Enlisted! })
      .check();
    const findMyRecruitingStationBtn = page.getByRole("button", {
      name: "Find my recruiting station",
    });
    await expect(findMyRecruitingStationBtn).toBeEnabled();
    await findMyRecruitingStationBtn.click();
    await expect(page.getByText("- No Results Found -")).toBeVisible();
  }
);
