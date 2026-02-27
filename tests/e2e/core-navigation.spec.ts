import { test, expect } from '@playwright/test';
import { waitForAppReady, removeEmergentBadge } from '../fixtures/helpers';

test.describe('Core Navigation & Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await waitForAppReady(page);
    await removeEmergentBadge(page);
  });

  test('Homepage loads with new logo and design', async ({ page }) => {
    // Check sidebar logo is visible
    const logo = page.getByTestId('sidebar-logo');
    await expect(logo).toBeVisible();
    
    // Check sidebar is present
    const sidebar = page.getByTestId('main-sidebar');
    await expect(sidebar).toBeVisible();
    
    // Check System Status page is displayed by default
    await expect(page.getByRole('heading', { name: 'System Status' })).toBeVisible();
  });

  test('Sidebar navigation items are present', async ({ page }) => {
    const sidebar = page.getByTestId('main-sidebar');
    
    // Check all navigation items exist
    await expect(sidebar.getByText('System Status')).toBeVisible();
    await expect(sidebar.getByText('COMEX Overview')).toBeVisible();
    await expect(sidebar.getByText('Market Pressure')).toBeVisible();
    await expect(sidebar.getByText('Decision Readiness')).toBeVisible();
    await expect(sidebar.getByText('Decision Scenarios')).toBeVisible();
    await expect(sidebar.getByText('Process Visibility')).toBeVisible();
    await expect(sidebar.getByText('Proof Blocks')).toBeVisible();
    await expect(sidebar.getByText('Decision Gates')).toBeVisible();
    await expect(sidebar.getByText('Decision Amplifiers')).toBeVisible();
    await expect(sidebar.getByText('Team')).toBeVisible();
    await expect(sidebar.getByText('Sources & Method')).toBeVisible();
  });

  test('Team navigation link works', async ({ page }) => {
    // Click Team in sidebar
    await page.getByRole('link', { name: /Team/i }).click();
    
    // Verify Team page loads
    await expect(page.getByTestId('team-page')).toBeVisible();
  });

  test('Language toggle displays and functions', async ({ page }) => {
    const langToggle = page.getByTestId('language-toggle');
    await expect(langToggle).toBeVisible();
    
    // Check initial state shows EN
    await expect(langToggle).toContainText('EN');
    
    // Toggle to French
    await langToggle.click();
    
    // Check page title changes to French
    await expect(page.getByRole('heading', { name: /État du Système/i })).toBeVisible({ timeout: 5000 });
    
    // Toggle back to English
    await langToggle.click();
    await expect(page.getByRole('heading', { name: 'System Status' })).toBeVisible({ timeout: 5000 });
  });

  test('Operator panel displays both contacts', async ({ page }) => {
    // Check Lucas Ansel contact
    await expect(page.locator('text=Lucas Ansel').first()).toBeVisible();
    await expect(page.getByTestId('operator-email-link')).toBeVisible();
    await expect(page.getByTestId('operator-linkedin-link')).toBeVisible();
    
    // Check Ayoub Bouzalmad contact
    await expect(page.locator('text=Ayoub Bouzalmad').first()).toBeVisible();
    await expect(page.getByTestId('operator2-email-link')).toBeVisible();
    await expect(page.getByTestId('operator2-linkedin-link')).toBeVisible();
  });

  test('Footer displays Industrial Decision branding', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer content
    const footer = page.locator('.app-footer');
    await expect(footer.getByText('Industrial Decision')).toBeVisible();
    await expect(footer.getByText('Engineering Better Decisions')).toBeVisible();
    await expect(footer.getByText('Lucas Ansel')).toBeVisible();
    await expect(footer.getByText('Ayoub Bouzalmad')).toBeVisible();
  });
});
