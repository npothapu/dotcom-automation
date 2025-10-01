import { lighthouseTest } from './fixture/lightouse-fixture';
import { playAudit } from 'playwright-lighthouse';
import lighthouseDesktopConfig from 'lighthouse/core/config/lr-desktop-config.js';
import lighthouseMobileConfig from 'lighthouse/core/config/lr-mobile-config.js';

lighthouseTest.describe('Lighthouse Performance Audits', 
  { 
    tag: ["@lighthouse-report"]
   }, 
   () => {
  lighthouseTest('Desktop Lighthouse Audit',
    { 
      tag:["@lighthouse-report-desktop"]
    },
    async ({ browser, port }) => {
    const page = await browser.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
    
    await playAudit({
      page,
      port,
      config: lighthouseDesktopConfig,
      thresholds: {
        performance: 20,
        accessibility: 90,
        'best-practices': 50,
        seo: 80,
      },
      reports: {
        formats: {
          html: true,
          json: false
        },
        name: 'desktop-lighthouse-report',
        directory: './lighthouse-reports'
      }
    });
    
    await page.close();
  });

  lighthouseTest('Mobile Lighthouse Audit',
    { 
      tag:["@lighthouse-report-mobile"]
    },
     async ({ browser, port }) => {
    const page = await browser.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
    
    await playAudit({
      page,
      port,
      config: lighthouseMobileConfig,
      thresholds: {
        performance: 20,
        accessibility: 90,
        'best-practices': 50,
        seo: 80,
      },
      reports: {
        formats: {
          html: true,
          json: false
        },
        name: 'mobile-lighthouse-report',
        directory: './lighthouse-reports'
      }
    });
    
    await page.close();   
  });

});