import { test, expect } from '@playwright/test';
import { waitForAppReady, removeEmergentBadge } from '../fixtures/helpers';

test.describe('Team Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team', { waitUntil: 'domcontentloaded' });
    await waitForAppReady(page);
    await removeEmergentBadge(page);
  });

  test('Team page loads with correct structure', async ({ page }) => {
    // Check team page container
    const teamPage = page.getByTestId('team-page');
    await expect(teamPage).toBeVisible();
    
    // Check page title
    await expect(page.getByRole('heading', { name: 'Team' })).toBeVisible();
    
    // Check subtitle
    await expect(page.getByText('The minds behind Industrial Decision Interface')).toBeVisible();
  });

  test('Three team members are displayed', async ({ page }) => {
    // Check all 3 team member cards are visible
    const lucasCard = page.getByTestId('team-card-lucas');
    const ayoubCard = page.getByTestId('team-card-ayoub');
    const davidCard = page.getByTestId('team-card-david');
    
    await expect(lucasCard).toBeVisible();
    await expect(ayoubCard).toBeVisible();
    await expect(davidCard).toBeVisible();
    
    // Check names and roles
    await expect(lucasCard.getByText('Lucas Ansel')).toBeVisible();
    await expect(lucasCard.getByText('Digital Strategy & Industrial Web Architecture')).toBeVisible();
    
    await expect(ayoubCard.getByText('Ayoub Bouzalmad')).toBeVisible();
    await expect(ayoubCard.getByText('Technical Implementation & Data Systems')).toBeVisible();
    
    await expect(davidCard.getByText('David Ansel')).toBeVisible();
    await expect(davidCard.getByText('Industrial Operations & Strategic Advisory')).toBeVisible();
  });

  test('Team cards are expandable - Lucas Ansel', async ({ page }) => {
    const lucasCard = page.getByTestId('team-card-lucas');
    const lucasHeader = lucasCard.locator('.team-card-header');
    
    // Click to expand
    await lucasHeader.click();
    
    // Details should now be visible
    const lucasDetails = page.getByTestId('team-details-lucas');
    await expect(lucasDetails).toBeVisible();
    
    // Check expanded content
    await expect(lucasDetails.getByText('Description')).toBeVisible();
    await expect(lucasDetails.getByText('Decision Scope')).toBeVisible();
    await expect(lucasDetails.getByText('Contribution')).toBeVisible();
    await expect(lucasDetails.getByText('Core Expertise')).toBeVisible();
    
    // Check expertise items are visible
    await expect(lucasDetails.getByText('Industrial web architecture')).toBeVisible();
  });

  test('Team cards are expandable - Ayoub Bouzalmad', async ({ page }) => {
    const ayoubCard = page.getByTestId('team-card-ayoub');
    
    // Initially details should be hidden
    const ayoubDetails = page.getByTestId('team-details-ayoub');
    await expect(ayoubDetails).not.toBeVisible();
    
    // Click to expand
    await ayoubCard.click();
    
    // Details should now be visible
    await expect(ayoubDetails).toBeVisible();
    
    // Check technical content exists
    await expect(ayoubDetails.getByText('Full-stack development')).toBeVisible();
    await expect(ayoubDetails.getByText('Data engineering')).toBeVisible();
  });

  test('Team cards are expandable - David Ansel', async ({ page }) => {
    const davidCard = page.getByTestId('team-card-david');
    const davidHeader = davidCard.locator('.team-card-header');
    
    // Click to expand
    await davidHeader.click();
    
    // Details should now be visible
    const davidDetails = page.getByTestId('team-details-david');
    await expect(davidDetails).toBeVisible();
    
    // Check industrial operations content using exact match
    await expect(davidDetails.getByText('Industrial operations', { exact: true })).toBeVisible();
    await expect(davidDetails.getByText('Strategic advisory', { exact: true })).toBeVisible();
  });

  test('Collective Approach section is present', async ({ page }) => {
    // Check for Collective Approach section
    await expect(page.getByText('Our Collective Approach')).toBeVisible();
    await expect(page.getByText(/Industrial decision-making requires more than technical capability/i)).toBeVisible();
  });
});
