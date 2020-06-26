
Feature: Sign In

  Background: Clear cookies
    Given clear cookies

  Scenario: User signs in using a registered email
    Given the user is on the "sign in" page
    When the user enters "registered" email
    And "valid" password
    Then the successfully submitted message for "user logged in" is displayed

  Scenario: User signs in using an unregistered email
    Given the user is on the "sign in" page
    When the user enters "unregistered" email
    And "valid" password
    Then "invalid email" alert is displayed

  Scenario: User enters registered email to recover password
    Given the user is on the "forgotten password" page
    When the user enters "registered" email
    And clicks retrieve password
    Then "invalid recovery email" alert is displayed

  Scenario: User can sign out
    Given the user is signed in
    When the user clicks sign out
    Then the successfully submitted message for "signed out" is displayed

  Scenario: User enters an invalid password
    Given the user is on the "sign in" page
    When the user enters "registered" email
    And "invalid" password
    Then "invalid password" alert is displayed

  Scenario: User enters new address on the accounts page
    Given the user is on the "address" page
    When the user adds a new address
    Then the successfully submitted message for "new address" is displayed

  Scenario: User enters an unregistered email to recover password
    Given the user is on the "forgotten password" page
    When the user enters "unregistered" email
    And clicks retrieve password
    Then the successfully submitted message for "recovery email" is displayed

  Scenario: User logs in and updates password
    Given the user is on the "information" page
    When user updates password
    Then the successfully submitted message for "new password" is displayed

