import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginHelpPage extends Page {
  get emailInput(){
    return $('[data-qa-id="password-reset-input"]');
  }
}

export default new LoginHelpPage();