Feature: Buy Journey
  Scenario: Select item from homepage
    Given  the user is on the "homepage"

  Scenario: Select item from homepage
    Given  the user is on the "home" page
    When  the user selects item through hovering over it
    Then  the Product Page is displayed

  Scenario:Add product to cart from homepage
    Given the user is on the "homepage"
    When the user adds item to cart by hovering over it
    Then the successfully submitted message for "added to cart" is displayed

  Scenario:Add product to cart from product page
    Given the user is on the "product" page
    When the user selects "details of item"
    And the user adds item to cart
    Then the successfully submitted message for "added to cart" is displayed

  Scenario: Add a message
    Given the user is on the "account details" page
    When the user selects "submits message"
    Then the successfully submitted message for "add message" is displayed

  Scenario: Test product filters on dresses page.
    Given the user is on the "women" page
    When the user selects "different filters"
    Then The correct product is displayed

  Scenario: Clear filters
    Given the user is on the "women" page
    When the user selects "different filters"
    And  the user selects "clears filters"
    Then all 7 products are displayed

  Scenario: Subscribe to news and special sales
    Given the user is on the "home" page
    When the user completes the newsletter form with a "valid" email address
    Then the successfully submitted message for "subscription" is displayed

  Scenario: Proceed to Contact Us page and send a message
    Given the user is on the "contact us" page
    When the user completes the contact us form
    Then the successfully submitted message for "contact us" is displayed
