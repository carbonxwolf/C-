import { test, expect } from '@playwright/test';

test.describe('Portfolio Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with name and tagline', async ({ page }) => {
    // Check for Salman Hafiz name
    await expect(page.getByRole('heading', { name: /Salman Hafiz/i })).toBeVisible();
    
    // Check for tagline
    await expect(page.getByText(/React Developer & WordPress Customizer/i)).toBeVisible();
  });

  test('should have View My Case Studies CTA button', async ({ page }) => {
    const ctaButton = page.getByRole('link', { name: /View My Case Studies/i });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/projects');
  });

  test('should display skill bar', async ({ page }) => {
    // Check for at least one skill
    await expect(page.getByText(/React/i)).toBeVisible();
  });

  test('should display three featured project cards', async ({ page }) => {
    // Wait for projects to load
    await page.waitForSelector('text=Featured Projects', { timeout: 5000 });
    
    // Check for project cards
    const projectCards = page.locator('[class*="group"]').filter({ hasText: /View Case Study/i });
    await expect(projectCards).toHaveCount(3, { timeout: 5000 });
  });

  test('should navigate to project detail page when card is clicked', async ({ page }) => {
    // Click on first project card
    await page.locator('a[href*="/projects/"]').first().click();
    
    // Should navigate to project detail page
    await expect(page).toHaveURL(/\/projects\/.+/);
    
    // Should show back button
    await expect(page.getByText(/Back to Projects/i)).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate to different pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await expect(page).toHaveURL('/projects');
    
    // Navigate to About
    await page.getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL('/about');
    
    // Navigate back to Home
    await page.getByRole('link', { name: /Signal & Case/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/');
    
    // Find and click dark mode toggle
    const darkModeToggle = page.getByRole('button', { name: /Toggle dark mode/i });
    await darkModeToggle.click();
    
    // Check if dark class is applied to html element
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).toContain('dark');
  });
});
