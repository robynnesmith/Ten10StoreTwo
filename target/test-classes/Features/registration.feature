Feature: Registration

  Background: Clear cookies
    Given clear cookies

  Scenario: Register user with already Registered Email Address.
    Given the user is on the "create a new account" page
    When the user completes the form with a "registered" email address
    Then "user already registered" alert is displayed

  Scenario: New user is able to register.
    Given the user is on the "create a new account" page
    When the user completes the form with a "unregistered" email address
    Then the successfully submitted message for "user logged in" is displayed

  Scenario: Numeric values are entered into the name field.
    Given the user is on the "create a new account" page
    When the user enters a "unregistered" email address
    And the user enters an invalid "name"
    Then "invalid name" alert is displayed

  Scenario: An invalid Date of Birth is entered.
    Given the user is on the "create a new account" page
    When the user enters a "unregistered" email address
    And the user enters an invalid "date of birth"
    Then "invalid date of birth" alert is displayed
