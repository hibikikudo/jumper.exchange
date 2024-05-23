import type { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import {
  findTheBestRoute,
  openMainMenu,
  itemInMenu,
  closeWelcomeScreen,
} from './testData/commonFunctions';

test.describe('Jumper full e2e flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to the homepage and change tabs', async ({ page }) => {
    await closeWelcomeScreen(page);
    await page.getByRole('tab', { name: 'Exchange' }).click();
    await expect(
      page.locator('[id="widget-header-\\:r0\\:"]').getByText('Exchange'),
    ).toBeVisible();
    await page.getByRole('tab', { name: 'Gas' }).click();
    await expect(
      page.locator('[id="widget-header-\\:r4\\:"]').getByText('Gas'),
    ).toBeVisible();
    await page.getByRole('tab', { name: 'Buy' }).click();
    await expect(
      page
        .frameLocator('iframe[title="Onramper widget"]')
        .getByText('Buy crypto')
        .getByText('Buy crypto'),
    ).toBeVisible();
  });

  test('should handle welcome screen', async ({ page }) => {
    await findTheBestRoute(page);
    await expect(
      page.getByRole('heading', { name: 'Find the best route' }),
    ).not.toBeVisible();
  });

  test('should show again welcome screen when clicking jumper logo', async ({
    page,
  }) => {
    await page.reload();
    await findTheBestRoute(page);
    await expect(
      page.getByRole('heading', { name: 'Find the best route' }),
    ).not.toBeVisible();
    await page.locator('#jumper-logo').click();
    await expect(
      page.getByRole('heading', { name: 'Find the best route' }),
    ).toBeVisible();
  });

  test('should be able to open menu and click away to close it', async ({
    page,
  }) => {
    await closeWelcomeScreen(page);
    await openMainMenu(page);
    await expect(page.getByRole('menu')).toBeVisible();
    await page.locator('body').click();
    await expect(page.getByRole('menu')).not.toBeVisible();
  });

  test('should be able to navigate to profile', async ({ page }) => {
    let profileUrl = `${await page.url()}profile/`;
    await closeWelcomeScreen(page);
    await openMainMenu(page);
    await expect(page.getByRole('menu')).toBeVisible();
    await itemInMenu(page, 'Jumper Profile');
    await page.waitForLoadState('networkidle');
    expect(await page.url()).toBe(profileUrl);
    await page.waitForLoadState('load');
    await page.locator('.profile-page').isVisible();
  });

  test('should be able to navigate to jumper learn', async ({ page }) => {
    let learnUrl = `${await page.url()}learn/`;
    await closeWelcomeScreen(page);
    await openMainMenu(page);
    await expect(page.getByRole('menu')).toBeVisible();
    await itemInMenu(page, 'Jumper Learn');
    await page.waitForLoadState('networkidle');
    expect(await page.url()).toBe(learnUrl);
    await page.waitForLoadState('load');
    await page.locator('.learn-page').isVisible();
  });

  test('should be able to navigate to lifi explorer', async ({ page }) => {
    await closeWelcomeScreen(page);
    await page.locator('#main-burger-menu-button').click();
    await expect(page.getByRole('menu')).toBeVisible();
    await itemInMenu(page, 'LI.FI Explorer');
    const newPage = await page.waitForEvent('popup');
    expect(newPage.url()).toBe(
      'https://explorer.li.fi/?utm_source=jumper&utm_campaign=jumper_to_explorer&utm_medium=menu',
    );
  });

  test('should be able to navigate to X', async ({ page }) => {
    let xUrl = 'https://x.com/JumperExchange';
    await closeWelcomeScreen(page);
    await page.locator('#main-burger-menu-button').click();
    await expect(page.getByRole('menu')).toBeVisible();
    await page.getByRole('menuitem', { name: 'X', exact: true }).click();
    const newPage = await page.waitForEvent('popup');
    expect(newPage.url()).toBe(xUrl);
  });
  test('should be able to navigate to Discord', async ({ page }) => {
    let discordUrl = 'https://discord.com/invite/lifi';
    await closeWelcomeScreen(page);
    await page.locator('#main-burger-menu-button').click();
    await expect(page.getByRole('menu')).toBeVisible();
    await itemInMenu(page, 'Discord');
    const newPage = await page.waitForEvent('popup');
    expect(newPage.url()).toBe(discordUrl);
  });
});