import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/login';
import { loginPageUrl, password, username } from '../../testData/testData';
import { flashMessage } from '../locators/login';

test.describe('Login page', () => {

    let myLogin; 

    test.beforeEach(async ({page}) => {
        myLogin = new LoginPage(page); 
    })

    test('test', async ({page}) => {
        await myLogin.login(loginPageUrl, username, password); 
        await expect(page.locator(flashMessage)).toContainText('You logged into a secure area'); 
    });

    test.skip('should successfully logout', async ({ page }) => {
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.getByText('You logged out of the secure').click();
    })
})

// './testData/smthing.txt'

// // Start waiting for download before clicking. Note no await.
// const downloadPromise = page.waitForEvent('download');
// await page.getByText('Download file').click();
// const download = await downloadPromise;

// // Wait for the download process to complete and save the downloaded file somewhere.
// await download.saveAs('./downloads' + 'sunflower.txt');