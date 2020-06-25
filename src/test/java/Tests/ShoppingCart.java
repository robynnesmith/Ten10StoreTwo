package Tests;

import org.junit.Before;
import org.junit.Test;
import pageObjects.*;

/**
 * Created by jack.forman on 08/11/2016.
 */
public class ShoppingCart {

    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


    @Before
    public void individualSetUp() {
        homepage.clearCookies();
        homepage.goTo();
    }

    /**
     * Remove item from shopping cart
     * Pre-Condition - Item must be in basket
     * Navigate to basket
     * Click Delete
     * Verify Item is removed from Basket
     * Extension - verify pricing and totals are updated to reflect accurately
     */
    @Test
    public void removeItemFromShoppingBasket() {

        homepage.itemAddedToCart();
        basketpage.navigateToBasket();
        basketpage.deleteItemFromBasket();
        basketpage.checkItemRemovedFromBasket();

    }

    /**
     * Increase quantity of product
     * Pre-Condition - Must have one item in basket
     * Navigate to basket
     * Increase quantity of product
     * Verify basket updated with correct quantity
     * Verify Product counter (Top right) is updated
     * Extension - verify pricing and totals are updated to reflect accurately
     */
    @Test
    public void increaseQuantityOfProductInBasket() {
        homepage.itemAddedToCart();
        basketpage.navigateToBasket();
        basketpage.increaseQuantity();
        basketpage.verifyQuantityUpdated();
        basketpage.verifyProductCountUpdated();

    }

    /**
     * Proceed to checkout - not signed in
     * Pre-Condition - Must have one item in basket && not be signed in
     * Navigate to basket
     * Click proceed to checkout
     * Verify sign in page displayed
     */
    @Test
    public void proceedToCheckoutNotLoggedIn() {
        homepage.itemAddedToCart();
        basketpage.navigateToBasket();
        basketpage.clickProceedToCheckout();
        basketpage.isPersonalInformationPageDisplayed();
    }

    /**
     * Proceed to checkout - signed in
     * Pre-Condition - Must have one item in basket && be signed in
     * Navigate to basket
     * Click proceed to checkout
     * Delivery Address Page is shown
     * Click proceed to checkout
     * Shipping page is shown
     * Agree to terms of service
     * Click proceed to checkout
     * Payment page is displayed
     * Click pay by bank wire
     * Confirm order
     * Order confirmation page is displayed
     */
    @Test
    public void proceedToCheckoutAndBuyLoggedIn() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.goTo();
        homepage.addItemToCart();
        basketpage.clickModalProceedToCheckout();
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.shippingPageDisplayed();
        checkoutPage.enterShippingComment();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.paymentPageDisplayed();
        checkoutPage.clickPayByBankWire();
        checkoutPage.agreeToTerms();
        checkoutPage.confirmOrder();
        checkoutPage.orderConfirmationDisplayed();
        signInPage.clickSignOut();
    }

    /**
     * Navigate to basket
     * Click proceed to checkout
     * Delivery Address Page is shown
     * Make invoice address different
     * Click continue button
     * Verify shipping method displayed
     */
    @Test
    public void makeInvoiceAddressDifferentToDeliveryAddress() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.goTo();
        homepage.addItemToCart();
        basketpage.clickModalProceedToCheckout();
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.differentInvoiceAddress();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.paymentPageDisplayed();
        homepage.goTo();
        signInPage.clickSignOut();

    }


    /**
     * * Navigate to basket
     * * Proceed to checkout
     * * Select Address
     * * Write a comment in 'Shipping Method' section
     * * Verify comment has been added
     */
    @Test
    public void addCommentToOrder() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.goTo();
        homepage.addItemToCart();
        basketpage.clickModalProceedToCheckout();
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.shippingPageDisplayed();
        checkoutPage.enterShippingComment();
        homepage.goTo();
        signInPage.clickSignOut();
    }

    /**
     * *Navigate to basket
     * *Click proceed to checkout
     * *Logout
     * *Verify cart emptied when sign back in.
     */
    @Test
    public void proceedToCheckoutAndLogout() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.goTo();
        homepage.addItemToCart();
        basketpage.clickModalProceedToCheckout();
        signInPage.clickSignOut();
        signInPage.clickSignIn();
        signInPage.login();
        basketpage.cartButton();
        signInPage.clickSignOut();
    }

    /**
     * *Navigate to basket
     * *Proceed to checkout
     * *Click "+ new address"
     * *Fill out address form
     * *Verify new address is created
     */
    @Test
    public void addNewAddress() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.goTo();
        homepage.addItemToCart();
        basketpage.clickModalProceedToCheckout();
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.setAddNewAddress();
        //once you're done with this test make sure you sign out
//        signInPage.clickSignOut();
    }


}
