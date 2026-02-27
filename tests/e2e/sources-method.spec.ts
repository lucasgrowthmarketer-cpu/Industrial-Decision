import { test, expect } from '@playwright/test';
import { waitForAppReady, removeEmergentBadge } from '../fixtures/helpers';

test.describe('Sources & Method Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sources', { waitUntil: 'domcontentloaded' });
    await waitForAppReady(page);
    await removeEmergentBadge(page);
  });

  test('Sources & Method page loads with correct structure', async ({ page }) => {
    // Check page container
    const sourcesPage = page.getByTestId('sources-method-page');
    await expect(sourcesPage).toBeVisible();
    
    // Check page title
    await expect(page.getByRole('heading', { name: 'Sources & Method' })).toBeVisible();
  });

  test('Data Sources section displays Banque de France and Altares', async ({ page }) => {
    // Check Data Sources section
    await expect(page.getByText('Data Sources')).toBeVisible();
    await expect(page.getByText('Banque de France')).toBeVisible();
    await expect(page.getByText('Altares')).toBeVisible();
    
    // Check badges
    await expect(page.getByText('Judicial Focus')).toBeVisible();
    await expect(page.getByText('Commercial Scope')).toBeVisible();
  });

  test('Data Acknowledgment section displays Jean-Baptiste Borron', async ({ page }) => {
    // Check Data Acknowledgment section
    await expect(page.getByText('Data Acknowledgment')).toBeVisible();
    await expect(page.getByText('Jean-Baptiste Borron')).toBeVisible();
    await expect(page.getByText('Industrial Expert')).toBeVisible();
  });

  test('Data Acknowledgment section displays ALMA Machines outils', async ({ page }) => {
    await expect(page.getByText('ALMA Machines outils')).toBeVisible();
    await expect(page.getByText('Data Partner')).toBeVisible();
  });

  test('Audit Methodology section is present', async ({ page }) => {
    await expect(page.getByText('Audit Methodology')).toBeVisible();
    await expect(page.getByText('Decision Readiness Score (DRS)')).toBeVisible();
  });

  test('Composite Indices section displays IPI and URI', async ({ page }) => {
    await expect(page.getByText('Composite Indices')).toBeVisible();
    await expect(page.getByText('Industrial Pressure Index (IPI)')).toBeVisible();
    await expect(page.getByText('Uncertainty Reduction Index (URI)')).toBeVisible();
  });

  test('Governance & Display Rules section is present', async ({ page }) => {
    await expect(page.getByText('Governance & Display Rules')).toBeVisible();
    await expect(page.getByText('Metrics Display Protocol')).toBeVisible();
  });

  test('Interface Classification section is present', async ({ page }) => {
    await expect(page.getByText('Interface Classification')).toBeVisible();
    await expect(page.getByText('Semi-Confidential Tool')).toBeVisible();
  });

  test('French translation works for Sources & Method', async ({ page }) => {
    // Toggle to French
    const langToggle = page.getByTestId('language-toggle');
    await langToggle.click();
    
    // Check French content
    await expect(page.getByRole('heading', { name: 'Sources & Méthode' })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('Sources de Données')).toBeVisible();
    await expect(page.getByText('Reconnaissance des Données')).toBeVisible();
  });
});
