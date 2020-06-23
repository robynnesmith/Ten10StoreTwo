Feature: Registration

  Scenario: Register user with already Registered Email Address.
    Given the user is on the "create an account" page
    When the user completes the form with an already "registered" email address
    Then an error message is displayed

    Scenario: New user is able to register.
    Given the user is on the "create an account" page
    When the user completes the form with an "unregistered" email address
    Then the "my account" page is displayed

    Scenario: Numeric values are entered into the name field.
    Given the user is on the "create an account" page
    When the user enters an "unregistered" email address
    And the user enters numeric values into the name field
    Then an invalid name error is displayed

    Scenario: An invalid Date of Birth is entered.
    Given the user is on the "create new account" page
    When the user enters an "unregistered" email address
    And the user enters an invalid date of birth
    Then an invalid date of birth error is displayed
