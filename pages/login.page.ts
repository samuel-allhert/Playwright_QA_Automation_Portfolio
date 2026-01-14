import { Page, Locator, expect } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly fieldUsername: Locator;
    readonly fieldPassword: Locator;
    readonly textPleaseLogin: Locator;
    readonly loginButton: Locator;
    readonly textNotifIncorrectCredentials: Locator;

    constructor(page: Page){
        this.page = page;
        this.fieldUsername = page.locator('//input[@id="txt-username"]');
        this.fieldPassword = page.locator('//input[@id="txt-password"]');
        this.textPleaseLogin = page.locator('//p[@class="lead"]');
        this.loginButton = page.locator('//button[@id="btn-login"]');
        this.textNotifIncorrectCredentials = page.locator('//p[@class="lead text-danger"]');
    }

    async verifyTextPleaseLoginExists(){
        await expect(this.textPleaseLogin).toBeVisible();
    }

    async notifIncorrectCredentials(){
        await expect(this.textNotifIncorrectCredentials).toBeVisible();
    }

    async fillCorrectUsernameAndPassword(){
        await this.fieldUsername.fill('John Doe');
        await this.fieldPassword.fill('ThisIsNotAPassword');
    }

    async fillIncorrectUsernameAndPassword(){
        await this.fieldUsername.fill('ABCDE');
        await this.fieldPassword.fill('Password123');
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}