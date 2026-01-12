import { Page, Locator, expect } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly buttonMakeAppointment: Locator;
    readonly checkboxHospitalReadmission: Locator;
    readonly dropdownFacility: Locator;
    //readonly optionFacility: Locator;
    readonly radioHealthcare: Locator;
    readonly fieldDate: Locator;
    readonly fieldComment: Locator;
    readonly buttonBookAppointment: Locator;
    readonly textAppointmentConfirmation: Locator;

    constructor(page: Page){
        this.page = page;
        this.buttonMakeAppointment = page.locator('//a[@id="btn-make-appointment"]');
        this.checkboxHospitalReadmission = page.locator('//label[@for="chk_hospotal_readmission"]/input');
        this.dropdownFacility = page.locator('//select[@id="combo_facility"]');
        //this.optionFacility = page.locator('');
        this.radioHealthcare = page.locator('//div[@class="col-sm-4"]/label');
        this.fieldDate = page.locator('//input[@placeholder="dd/mm/yyyy"]');
        this.fieldComment = page.locator('//textarea[@id="txt_comment"]');
        this.buttonBookAppointment = page.locator('//button[@id="btn-book-appointment"]');
        this.textAppointmentConfirmation = page.locator('//p[@class="lead"]');
    }

    async clickButtonBookAppointment(){
        await this.buttonBookAppointment.click()
    }

    async fillComment(){
        await this.fieldComment.fill('Learning Playwright!!!');
    }

    async fillDate(){
        await this.fieldDate.click();
        await this.fieldDate.pressSequentially('15/01/2026', { delay: 50 });
        await this.fieldDate.press('Enter');
        await this.fieldDate.press('Escape');
    }

    async chooseRadioHealthcare(){
        const randomIndex = Math.floor(Math.random() * 2) + 1;

        await this.radioHealthcare.nth(randomIndex).check();
    }

    async chooseDropdownFacility(){
        await this.dropdownFacility.click();
        await this.page.waitForTimeout(500);

        const randomIndex = Math.floor(Math.random() * 2) + 1;
        await this.dropdownFacility.selectOption({ index: randomIndex });

        await this.page.waitForTimeout(500);
        await this.dropdownFacility.click();
    }

    async verifyButtonMakeAppointmentExists(){
        await expect(this.buttonMakeAppointment).toBeVisible();
    }

    async verifyTextAppointmentConfirmationExists(){
        await expect(this.textAppointmentConfirmation).toBeVisible();
    }

    async clickButtonMakeAppointment(){
        await this.buttonMakeAppointment.click();
    }

    async verifyCheckboxHospitalReadmissionExists(){
        await expect(this.checkboxHospitalReadmission).toBeVisible();
    }

    async clickCheckboxHospitalReadmission(){
        await this.checkboxHospitalReadmission.check();
    }
}