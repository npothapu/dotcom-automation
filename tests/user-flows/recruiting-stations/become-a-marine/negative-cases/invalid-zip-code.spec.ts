import { test, expect } from "@playwright/test";
import { acceptCookies, closeHelpWidget } from "../../../../../utils/index";

test(
  "Invalid zip code should show No Results Found",
  {
    tag: [
      "@user-flows",
      "@recruiting-stations",
      "@recruiting-stations-invalid-zip-code",
    ],
  },
  async ({ page, isMobile }) => {
    await page.goto("/locations.html", { waitUntil: "domcontentloaded" });
    await acceptCookies(page);
    if (isMobile) {
      await closeHelpWidget(page);
    }
    await page.getByRole("spinbutton", { name: "Zip Code" }).fill("123456789");
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
    await expect(page.getByText("- No Results Found -")).toBeVisible();
  }
);
