import { When } from '@wdio/cucumber-framework';
import {unregisterUser, registerUser} from '../../data.js'
import LoginPage from '../pageobjects/login/login.page.js';

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password)
});

When(/^I login with wrong credentials$/, async () => {
  await LoginPage.login(unregisterUser.email, unregisterUser.pass)
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.login(registerUser.email, registerUser.pass)
});

When(/^I click on the Hudl logo$/, async () => {
  await LoginPage.goToTheMainPage();
});

When(/^I click on the Sign up link$/, async () => {
  await LoginPage.goToSignUpPage();
});

When(/^I click on the Need help link$/, async () => {
  await LoginPage.goToLoginHelpPage();
});

When(/^I click on the Organization option$/, async () => {
  await LoginPage.goToLoginOrganizationPage();
});

When(/^I click the back button$/, async () => {
  await LoginPage.goToBack();
});