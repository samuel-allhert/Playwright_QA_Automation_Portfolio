import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';


test.use({
    viewport: { width: 1500, height: 725 },
});

test('Login with Correct Credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await homePage.verifyButtonMakeAppointmentExists();

    await homePage.clickButtonMakeAppointment();
  
    await loginPage.verifyTextPleaseLoginExists();
    await loginPage.fillCorrectUsernameAndPassword();
    await loginPage.clickLoginButton();

    await homePage.verifyCheckboxHospitalReadmissionExists();

    await page.waitForTimeout(5000);
});

test('Login with Incorrect Credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await homePage.verifyButtonMakeAppointmentExists();

    await homePage.clickButtonMakeAppointment();
  
    await loginPage.verifyTextPleaseLoginExists();
    await loginPage.fillIncorrectUsernameAndPassword();
    await loginPage.clickLoginButton();

    await loginPage.notifIncorrectCredentials();

    await page.waitForTimeout(5000);
});