Feature: The login

  Scenario: As a user, I can navigate to the international main page
    Given I am on the login page
    When I click on the Hudl logo
    Then I should be in the international main page

  Scenario: As a user, I can navigate to the Sign up page
    Given I am on the login page
    When I click on the Sign up link
    Then I should be in the Sign up page

  Scenario: As a user, I can navigate to the Login Help page
    Given I am on the login page
    When I click on the Need help link
    Then I should be in the Login Help page

  Scenario: As a user, I can navigate to the Login Organization page
    Given I am on the login page
    When I click on the Organization option
    Then I should be in the Login Organization page

  Scenario: As a user, I can come back to my previous page
    Given I am on the login page from the Products page
    When I click the back button
    Then I should be in the Products page

  Scenario: As a unregister user, I can't log into the application
    Given I am on the login page
    When I login with wrong credentials
    Then I should see an error message

  Scenario: As a register user, I can log into the application
    Given I am on the login page
    When I login with valid credentials
    Then I should be logged in