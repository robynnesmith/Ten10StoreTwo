Feature: Sign In

  Background: Clear cookies
    Given clear cookies

  Scenario: User signs in using a registered email
    Given the user is on the "sign in" page
    When the user enters "registered" email
    And a "valid" password
    Then the successfully submitted message for "user logged in" is displayed

  Scenario: User signs in using an unregistered email
    Given the user is on the "sign in" page
    When the user enters "unregistered" email
    And a "valid" password
    Then "invalid email" alert is displayed

  Scenario: User enters registered email to recover password
    Given the user is on the "forgotten password" page
    When the user enters "registered" email
    And clicks retrieve password
    Then a confirmation message displayed

  Scenario: User can sign out
    Given the user is signed in
    When the user clicks sign out
    Then the user is signed out

  Scenario: User enters an invalid password
    Given the user is on the "sign in" page
    When the user enters "registered" email
    And the user enters an "invalid" password
    Then "invalid password" alert is displayed

  Scenario: User enters new address on the accounts page
    Given the user is signed in
    And on the addresses page
    When the user adds a new address
    Then a new address is added to the address page

  Scenario: User enters an unregistered email to recover password
    Given the user is on the "forgotten password" page
    When the user enters "unregistered" email
    And clicks retrieve password
    Then "invalid recovery email" alert is displayed

