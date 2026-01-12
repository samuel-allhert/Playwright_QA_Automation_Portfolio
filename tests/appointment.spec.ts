import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test.use({
    viewport: { width: 1500, height: 725 },
});

test('Make Appointment with Valid Data', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await homePage.verifyButtonMakeAppointmentExists();

    await homePage.clickButtonMakeAppointment();
  
    await loginPage.verifyTextPleaseLoginExists();
    await loginPage.fillCorrectUsernameAndPassword();
    await loginPage.clickLoginButton();

    await homePage.verifyCheckboxHospitalReadmissionExists();

    await homePage.chooseDropdownFacility();
    await homePage.chooseRadioHealthcare();
    await homePage.fillDate();
    await homePage.fillComment();
    await homePage.clickCheckboxHospitalReadmission();
    await homePage.clickButtonBookAppointment();

    await page.waitForTimeout(5000);
});