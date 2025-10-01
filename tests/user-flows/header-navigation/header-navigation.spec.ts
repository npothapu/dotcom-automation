import { test, expect } from '@playwright/test';
import { subnavs } from '../../../utils/data/index';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  for (const nav of subnavs) {
    test(`should navigate to ${nav.pageTitle} from ${nav.linkName}`, 
  {
    tag:["@user-flows", "@header-navigation", `@${nav.linkName}`]
  }, 
      async ({ page, isMobile }) => {
        if (isMobile) {
              await page.getByRole('button', { name: 'Close' }).click();
              await page.locator('#lhc_needhelp_widget_v2')
              .contentFrame()
              .getByRole('button', { name: 'Close' }).click();
              await page.getByRole('button', { name: 'Menu' }).click();
        }
        await page.getByRole('link', { name: nav.mainNav }).click();
        await page.getByRole('link', { name: nav.linkName, exact: true }).click();
        await expect(page).toHaveURL(nav.urlSuffix);
        await expect(page).toHaveTitle(nav.pageTitle);
    });
  }
