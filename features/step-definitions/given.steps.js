import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login/login.page.js';
import ProductPage from '../pageobjects/product.page.js';


Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

Given(/^I am on the login page from the Products page$/, async () => {
    await ProductPage.open()
    await ProductPage.goToLoginPage();
});