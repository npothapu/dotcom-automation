import { test, expect } from "@playwright/test";
import { acceptCookies, internalFooterLinks } from "../../../../utils/index";

for (const link of internalFooterLinks) {
  test(
    `${link.ariaLabel} internal footer link navigates to correct URL`,
    {
      tag: [
        "@user-flows",
        "@footer",
        "@footer-links",
        "@footer-internal-link-navigation",
        "@redesign",
      ],
    },
    async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await acceptCookies(page);
      await page
        .locator(".cmp-experiencefragment--footer")
        .getByRole("link", { name: link.ariaLabel })
        .click();
      await page.waitForURL(link.linkUrl!, { waitUntil: "domcontentloaded" });
      expect(page.url()).toBe(link.linkUrl!);
    }
  );
}
