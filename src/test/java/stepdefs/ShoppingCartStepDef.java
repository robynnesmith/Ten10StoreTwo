package stepdefs;

import config.DriverFactory;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;


public class ShoppingCartStepDef {
    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


    //    @Given("^the user is on the \"([^\"]*)\" page$")
//    public void userOnShoppingCartPage(String page) {
//        if(page.equals("shopping cart")) {
//            homepage.goTo();
//            homepage.itemAddedToCart();
//        }
//    }
//************************************************
//Scenario:Remove item from shopping basket
    @When("^the user deletes an item from their basket$")
    public void userDeletesItemFromBasket() {
        basketpage.navigateToBasket();
        basketpage.deleteItemFromBasket();
    }

    @Then("^pricing & totals should be updated$")
    public void pricingAndTotalsUpdated() {
        basketpage.checkItemRemovedFromBasket();
    }

//************************************************
//Scenario:Increase quantity of product in basket

    @When("^the user increases quantity of item$")
    public void userIncreasesQuantityOfItem() {
        basketpage.navigateToBasket();
        basketpage.increaseQuantity();
    }

    @Then("^their basket is updated$")
    public void basketIsUpdated() {
        basketpage.verifyQuantityUpdated();
    }

    @And("^product counter is updated$")
    public void productCounterIsUpdated() {
        basketpage.verifyProductCountUpdated();
    }


//************************************************
//Scenario:Proceed to checkout not logged in


    @Given("^the user is \"([^\"]*)\"$")
    public void theUserIsNotLoggedIn(String login) {
        switch (login) {
            case "not logged in":
                homepage.goTo();
                homepage.itemAddedToCart();
                basketpage.navigateToBasket();
                break;
            case "logged in":
                homepage.goTo();
                homepage.navigateToSignInPage();
                signInPage.login();
                homepage.goTo();
                homepage.addItemToCart();
                basketpage.clickModalProceedToCheckout();
            default:
                System.out.println("navigated to wrong page");

        }
    }

    @When("^the user proceeds to checkout$")
    public void theUserProceedsToCheckout() {
        basketpage.clickProceedToCheckout();
    }

    @Then("^the sign-in page is displayed$")
    public void theSignInDisplayed() {
        basketpage.isPersonalInformationPageDisplayed();
    }


//************************************************
//Scenario:Proceed to checkout and buy the item while logged in

    @And("^fills in form$")
    public void fillsInForm() {
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.shippingPageDisplayed();
        checkoutPage.enterShippingComment();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.paymentPageDisplayed();
        checkoutPage.clickPayByBankWire();
        checkoutPage.agreeToTerms();
    }

    @Then("^the order confirmation displayed$")
    public void theOrderConfirmationDisplayed() {
        checkoutPage.confirmOrder();
        checkoutPage.orderConfirmationDisplayed();

    }

//************************************************
//Scenario: Make invoice address different to delivery address

    @When("^the user changes their invoice address on checkout$")
    public void theUserChangesTheirInvoiceAddressOnCheckout() {
        //basketpage.clickModalProceedToCheckout();
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.differentInvoiceAddress();

    }

    @Then("^the shipping method should be displayed$")
    public void theShippingMethodShouldBeDisplayed() {
        checkoutPage.clickProceedToNextSection();
        checkoutPage.paymentPageDisplayed();

    }


    //************************************************
//Scenario: Add a comment to your order
    @When("^the user writes a comment in shipping method in checkout form$")
    public void userWritesACommentInShippingMethodInCheckoutForm() {
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.clickProceedToNextSection();
        checkoutPage.shippingPageDisplayed();
        //checkoutPage.enterShippingComment();
    }

    @Then("the comment is added")
    public void theCommentIsAdded() {
        checkoutPage.enterShippingComment();
    }


    //************************************************
//Scenario: Proceed to checkout and logout
    @When("the user signs out from checkout page")
    public void theUserSignsOutFromCheckoutPage() {
        signInPage.clickSignOut();
        signInPage.clickSignIn();
    }

    @Then("their cart is empty when user logs back on")
    public void theCartIsEmptyWhenUserLogsBackOn() {
        signInPage.login();
        basketpage.cartButton();
    }


//************************************************
//Scenario: Add new address

    @When("the user adds new address to checkout form")
    public void theUserAddsNewAddressToCheckoutForm() {
        basketpage.clickProceedToCheckout();
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.setAddNewAddress();
    }


    @Then("the new address is saved")
    public void theNewAddressIsSaved() {

    }


}
