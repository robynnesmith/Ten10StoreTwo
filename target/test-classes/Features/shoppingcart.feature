Feature:Shopping Cart

  Background: Clear cookies
    Given clear cookies


  Scenario:Remove item from shopping basket
    Given the user is on the "shopping cart" page
    When the user deletes an item from their basket
    Then pricing & totals should be updated

  Scenario:Increase quantity of product in basket
    Given the user is on the "shopping cart" page
    When the user increases quantity of item
    Then their basket is updated
    And product counter is updated

    Scenario:Proceed to checkout not logged in
    Given the user is "not logged in"
    When the user proceeds to checkout
    Then the sign-in page is displayed

  Scenario:Proceed to checkout and buy item while logged in
    Given the user is "logged in"
    When the user proceeds to checkout
    And fills in form
    Then the order confirmation displayed










  Scenario: Make invoice address different to delivery address
    Given the user is "logged in"
    When the user changes their invoice address on checkout
    Then the shipping method should be displayed

#  Scenario: Multiple items in shopping cart displayed correctly
#    Given the user is on the "shopping cart" page
#    And the user has "2 items" in their basket
#    Then all items are displayed
#    And the product counter & prices are correct


  Scenario: Add a comment to your order
    Given the user is "logged in"
    When the user writes a comment in shipping method in checkout form
    Then the comment is added


  Scenario: Proceed to checkout and logout
    Given the user is "logged in"
    When the user signs out from checkout page
    Then their cart is empty when user logs back on

    @dev
  Scenario: Add new address
    Given the user is "logged in"
    When the user adds new address to checkout form
    Then the new address is saved



