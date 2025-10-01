import {test, expect} from "@playwright/test";
import AxeBuilder from '@axe-core/playwright';

  test("Homepage should have no accessibility violations",
    {
      tag:["@accessibility", "@homepage"]
    },
    async ({ page }) => {
    await page.goto("/");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const criticalViolations = accessibilityScanResults.violations.filter(
      violation => violation.impact && ['serious', 'critical'].includes(violation.impact)
    );
    expect(criticalViolations).toEqual([]);
});