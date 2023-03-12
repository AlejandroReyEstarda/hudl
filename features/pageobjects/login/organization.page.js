import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginOrganizationPage extends Page {
  get emailInput(){
    return $('[name="username"]');
  }
}

export default new LoginOrganizationPage();