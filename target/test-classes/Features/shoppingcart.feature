Feature:Shopping Cart

  Scenario:Remove item from shopping basket
    Given the user is on the "shopping cart" page
    And the user has "1 item" in their basket
    When the item is deleted
    Then the item should be removed
    And pricing & totals should be updated

  Scenario:Increase quantity of product in basket
    Given the user is on the "shopping cart" page
    And the user has "1 item" in their basket
    When user increases quantity of item
    Then basket is updated
    And product counter is updated
    And pricing & totals should be updated

  Scenario:Proceed to checkout not logged in
    Given user is on the ""shopping cart"" page
    And user is not logged in
    And user has ""1 item"" in basket
    When user proceeds to checkout
    Then sign-in displayed

  Scenario:Proceed to checkout and buy the item while logged in
    Given user is on the ""shopping cart"" page
    And user is logged in
    And user has ""1 item"" in basket
    When user proceeds to checkout
    And fills in form
    Then order confirmation displayed







  Scenario: Make invoice address different to delivery address
    Given user is on the "shopping cart" page
    And user is logged in
    And user has "1 item" in basket
    When user changes invoice address on checkout
    Then shipping method should be displayed

  Scenario: Multiple items in shopping cart displayed correctly
    Given user is on the "shopping cart" page
    And user has "2 items" in basket
    Then all items are displayed
    And product counter & prices are correct

  Scenario: Add a comment to your order
    Given user is on the "shopping cart" page
    And user is logged in
    And user has "1 item" in basket
    When user writes in shipping method in checkout form
    Then comment is added

  Scenario: Proceed to checkout and logout
    Given user is on the "shopping cart" page
    And user is logged in
    And user has "1 item" in basket
    When user signs out from checkout page
    Then cart is empty if user logs back on

  Scenario: Add new address
    Given user is on the ""shopping cart"" page
    And user is logged in
    And user has ""1 item"" in basket
    And user has at least 1 saved address
    When user adds new address to checkout form
    Then new address is saved



