import Page from './page.js';

export default class Header extends Page{

  get logInButton(){
      return $('[data-qa-id="login"]');
  }
  
  async goToLoginPage(){
    await this.logInButton.waitForClickable();
    await this.logInButton.click();
  }
}