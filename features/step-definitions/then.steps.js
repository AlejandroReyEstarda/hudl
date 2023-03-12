import {Then } from '@wdio/cucumber-framework';
import { BASE_URL } from '../../data.js';
import LoginPage from '../pageobjects/login/login.page.js';
import LoginHelpPage from '../pageobjects/login/help.page.js';
import LoginOrganizationPage from '../pageobjects/login/organization.page.js';

Then(/^I should see an error message$/, async () => {
  await expect(LoginPage.errorMsg).toBeClickable();
});

Then(/^I should be in the international main page$/, async () => {
  await expect(browser).toHaveUrl(`${BASE_URL}/`)
});

Then(/^I should be logged in$/, async () => {
  await expect(browser).toHaveUrl(`${BASE_URL}/home`)
});

Then(/^I should be in the Sign up page$/, async () => {
  await expect(browser).toHaveUrl(`${BASE_URL}/register/signup`)
});

Then(/^I should be in the Login Help page$/, async () => {
  await expect(await LoginHelpPage.emailInput).toBeClickable();
});

Then(/^I should be in the Login Organization page$/, async () => {
  await expect(await LoginOrganizationPage.emailInput).toBeClickable();
});

Then(/^I should be in the Products page$/, async () => {
  await expect(browser).toHaveUrl(`${BASE_URL}/products`)
});