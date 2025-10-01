import { test, expect } from "@playwright/test";
import {
  allRanks,
  doFillAndSubmitForm,
  blockGoogleAnalytics,
  acceptCookies,
} from "../../../../../utils";

const ranks = Object.entries(allRanks.priorServiceRank!);
for (const [rankName, rankValue] of ranks) {
  test(
    `(${rankValue}) can successfully submit RMI form`,
    {
      tag: [
        "@rmi-stg",
        "@rmi-main-form",
        "@rmi-all-ranks",
        `@rmi-${rankName}`,
        "@redesign",
      ],
    },
    async ({ page }) => {
      await blockGoogleAnalytics(page);
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await acceptCookies(page);
      const setAllRanks = {
        ...allRanks,
        priorServiceRank: rankName,
      };
      await doFillAndSubmitForm(page, setAllRanks);
      await expect(
        page.getByText(
          "Thank You for considering the noble path of becoming a United States Marine."
        )
      ).toBeVisible();
    }
  );
}
