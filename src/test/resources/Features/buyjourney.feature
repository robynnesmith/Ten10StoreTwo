Feature: Buy Journey

  Scenario: Select item from homepage
    Given  the user is on the "home" page
    When  the user selects item through hovering over it
    Then  the Product Page is displayed


  Scenario:Add product to cart from homepage
    Given the user is on the "home" page
    When the user adds item to cart by hovering over it
    Then verify product has been added to cart

  Scenario:Add product to cart from product page
    Given the user is on the "product" page
    When the user selects details of item
    And the user adds item to cart
    Then verify the product has been added to the cart

  Scenario: Add a message
    Given the user has "successfully signed in"
    And the user navigates to "details" page
    When the user fills out message form
    Then then the message has been sent off
    And verify message  is displayed

  Scenario: Test product filters on dresses page.
    Given The user is on the "women" page
    When The "Size" selector
    And "colour" selector
    And "price" selector are checked
    Then The correct product is displayed