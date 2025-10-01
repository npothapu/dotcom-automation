import { test, expect } from "@playwright/test";
import {
  allEducationLevels,
  doFillAndSubmitForm,
  blockGoogleAnalytics,
  acceptCookies,
} from "../../../../../utils";

const educationLevels = Object.entries(allEducationLevels.educationLevel);
for (const [gradeName, gradeValue] of educationLevels) {
  test(
    `(${gradeName}) can successfully submit RMI form`,
    {
      tag: [
        "@rmi-stg",
        "@rmi-stg-main-form",
        "@rmi-education-levels",
        `@rmi-${gradeName}`,
        "@redesign",
      ],
    },
    async ({ page }) => {
      await blockGoogleAnalytics(page);
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await acceptCookies(page);
      const setAllEducationLevels = {
        ...allEducationLevels,
        gradeName: gradeValue,
      };
      await doFillAndSubmitForm(page, setAllEducationLevels);
      await expect(
        page.getByText(
          "Thank You for considering the noble path of becoming a United States Marine."
        )
      ).toBeVisible();
    }
  );
}
