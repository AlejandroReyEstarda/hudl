import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[data-qa-id="email-input"]');
    }

    get inputPassword () {
        return $('[data-qa-id="password-input"]');
    }

    get btnLogIn () {
        return $('[data-qa-id="login-btn"]');
    }

    get errorMsg(){
        return $('[data-qa-id="error-display"]');
    }

    get hudlLogo(){
        return $('form a.uni-link');
    }

    get signUp(){
        return $('[href="/register/signup"]')
    }

    get rememberMe(){
        return $('[data-qa-id="remember-me-checkbox-label"]');
    }

    get helpMe(){
        return $('[data-qa-id="need-help-link"]');
    }

    get organizationOption(){
        return $('[data-qa-id="log-in-with-organization-btn"]')
    }

    get backButton(){
        return $('#app a')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForClickable();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogIn.click();
    }

    async goToTheMainPage(){
        await this.hudlLogo.waitForClickable();
        await this.hudlLogo.click();
    }

    async goToSignUpPage(){
        await this.signUp.waitForClickable();
        await this.signUp.click();
    }

    async goToLoginHelpPage(){
        await this.helpMe.waitForClickable();
        await this.helpMe.click();
    }

    async goToLoginOrganizationPage(){
        await this.organizationOption.waitForClickable();
        await this.organizationOption.click();
    }


    async goToBack(){
        await this.backButton.waitForClickable();
        await this.backButton.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
