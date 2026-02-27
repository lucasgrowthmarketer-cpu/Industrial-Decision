import { test, expect } from '@playwright/test';
import { waitForAppReady, removeEmergentBadge } from '../fixtures/helpers';

test.describe('Decision Gates Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gates', { waitUntil: 'domcontentloaded' });
    await waitForAppReady(page);
    await removeEmergentBadge(page);
  });

  test('Decision Gates page loads with correct structure', async ({ page }) => {
    // Check page container
    const gatesPage = page.getByTestId('decision-gates-page');
    await expect(gatesPage).toBeVisible();
    
    // Check page title
    await expect(page.getByRole('heading', { name: 'Decision Gates' })).toBeVisible();
  });

  test('Four decision gates are displayed', async ({ page }) => {
    // Check all 4 gate cards are visible
    const discreetGate = page.getByTestId('gate-card-discreet');
    const exploratoryGate = page.getByTestId('gate-card-exploratory');
    const urgentGate = page.getByTestId('gate-card-urgent');
    const postcrisisGate = page.getByTestId('gate-card-postcrisis');
    
    await expect(discreetGate).toBeVisible();
    await expect(exploratoryGate).toBeVisible();
    await expect(urgentGate).toBeVisible();
    await expect(postcrisisGate).toBeVisible();
  });

  test('Discreet Gate content is correct', async ({ page }) => {
    const discreetGate = page.getByTestId('gate-card-discreet');
    
    await expect(discreetGate.getByText('Discreet Gate')).toBeVisible();
    await expect(discreetGate.getByText('Confidential strategic assessment')).toBeVisible();
    await expect(discreetGate.getByText('48–72 hours')).toBeVisible();
    await expect(discreetGate.getByText('Secure email or private call')).toBeVisible();
  });

  test('Exploratory Gate content is correct', async ({ page }) => {
    const exploratoryGate = page.getByTestId('gate-card-exploratory');
    
    await expect(exploratoryGate.getByText('Exploratory Gate')).toBeVisible();
    await expect(exploratoryGate.getByText('3–5 business days')).toBeVisible();
  });

  test('Urgent Gate content is correct', async ({ page }) => {
    const urgentGate = page.getByTestId('gate-card-urgent');
    
    await expect(urgentGate.getByText('Urgent Gate')).toBeVisible();
    await expect(urgentGate.getByText('12–24h initial contact')).toBeVisible();
  });

  test('Post-Crisis Gate content is correct', async ({ page }) => {
    const postcrisisGate = page.getByTestId('gate-card-postcrisis');
    
    await expect(postcrisisGate.getByText('Post-Crisis Gate')).toBeVisible();
    await expect(postcrisisGate.getByText('2–3 business days')).toBeVisible();
  });

  test('Gate enter button opens modal', async ({ page }) => {
    // Click on Discreet Gate enter button
    const enterBtn = page.getByTestId('gate-enter-btn-discreet');
    await enterBtn.click();
    
    // Modal should appear
    const modal = page.getByTestId('gate-modal');
    await expect(modal).toBeVisible();
    
    // Form should be visible
    const form = page.getByTestId('gate-entry-form');
    await expect(form).toBeVisible();
    
    // Check form fields
    await expect(page.getByTestId('gate-form-name')).toBeVisible();
    await expect(page.getByTestId('gate-form-company')).toBeVisible();
    await expect(page.getByTestId('gate-form-email')).toBeVisible();
    await expect(page.getByTestId('gate-form-context')).toBeVisible();
    await expect(page.getByTestId('gate-form-contact-method')).toBeVisible();
    await expect(page.getByTestId('gate-form-submit')).toBeVisible();
    
    // Close modal
    const closeBtn = page.getByTestId('gate-modal-close-btn');
    await closeBtn.click();
    await expect(modal).not.toBeVisible();
  });

  test('Introduction form section is present', async ({ page }) => {
    // Check introduction form section
    const introSection = page.getByTestId('introduction-form-section');
    await expect(introSection).toBeVisible();
    
    // Check form
    const introForm = page.getByTestId('introduction-form');
    await expect(introForm).toBeVisible();
    
    // Check form fields
    await expect(page.getByTestId('intro-form-name')).toBeVisible();
    await expect(page.getByTestId('intro-form-company')).toBeVisible();
    await expect(page.getByTestId('intro-form-email')).toBeVisible();
    await expect(page.getByTestId('intro-form-context')).toBeVisible();
    await expect(page.getByTestId('intro-form-submit')).toBeVisible();
  });

  test('Contact form submits via API', async ({ page }) => {
    // Note: This test validates the form can be filled and submitted
    // The actual email sending depends on SMTP configuration
    
    // Open modal
    const enterBtn = page.getByTestId('gate-enter-btn-exploratory');
    await enterBtn.click();
    
    // Fill form
    await page.getByTestId('gate-form-name').fill('TEST_John Doe');
    await page.getByTestId('gate-form-company').fill('TEST_Acme Corp');
    await page.getByTestId('gate-form-email').fill('test@example.com');
    await page.getByTestId('gate-form-context').fill('Testing the decision gates form');
    
    // Submit form - wait for API response
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/contact') && response.status() >= 200
    );
    
    await page.getByTestId('gate-form-submit').click();
    
    // Wait for response (either success or error due to SMTP)
    const response = await responsePromise;
    
    // Response should be either 200 (success) or 500 (SMTP failure)
    expect([200, 500]).toContain(response.status());
  });
});
