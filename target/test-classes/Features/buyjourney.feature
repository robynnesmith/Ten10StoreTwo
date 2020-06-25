
Feature: Buy Journey
  Background: Clear cookies
    Given clear cookies
@dev
  Scenario: Select item from homepage
    Given  the user is on the "home" page
    When  the user selects item through hovering over it
    Then  the Product Page is displayed

  Scenario:Add product to cart from homepage
    Given the user is on the "home" page
    When the user adds "first item" to cart by hovering over it
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

  Scenario: Add item via Catalogue search
    Given the user is on the "home" page
    When the user types product name into search our catalogue bar
    Then the successfully submitted message for "added to cart" is displayed

  Scenario: Continue Shopping and add second item to basket
    Given the user is on the "home" page
    And the user adds "first item" to cart by hovering over it
    When the user adds "second item" to cart by hovering over it
    Then the successfully submitted message for "added to cart" is displayed

  Scenario: Not enough stock insufficient stock alert
    Given the user is on the "product" page
    When the user enters a high value in the quantity field
    Then "insufficient stock" alert is displayed

#  Scenario: Not enough stock add to cart button disabled
#    Given the user is on the "product" page
#    When the user enters a high value in the quantity field
#    Then add to cart button disabled

  Scenario: product available with different option
    Given the user is on the "home" page
    When the user selects item through hovering over it
    Then "insufficient stock" alert is displayed

