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
    private HomePage homePage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void userOnShoppingCartPage(String page) {
        if(page.equals("shopping cart")) {
            homePage.goTo();
            homePage.itemAddedToCart();
        }
    }
//************************************************
//Scenario:Remove item from shopping basket
    @And("^the user has \"1 item\" in their basket$")
    public void userHasItemInBasket() {
        basketpage.navigateToBasket();
    }

    @When("^the item is deleted$")
    public void itemDeletedFromBasket() {
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


    @And("^the user is \"([^\"]*)\"$")
    public void theUserIsNotLoggedIn(String login) {
    if (login.equals("not logged in")){
        homePage.itemAddedToCart();
        basketpage.navigateToBasket();

    } else if (login.equals("logged in")){
        homePage.navigateToSignInPage();
        signInPage.login();
        }
    }

    @When("^the user proceeds to checkout$")
    public void theUserProceedsToCheckout() {
        basketpage.clickProceedToCheckout();
    }

    @Then("^the sign-in displayed$")
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
        basketpage.clickModalProceedToCheckout();
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
        checkoutPage.enterShippingComment();
    }


    @Then("the comment is added")
    public void theCommentIsAdded() {

    }

   

//************************************************
//Scenario: Proceed to checkout and logout
    @When("the user signs out from checkout page")
    public void theUserSignsOutFromCheckoutPage() {
        signInPage.clickSignOut();
        signInPage.clickSignIn();

    }


    @Then("the cart is empty if user logs back on")
    public void theCartIsEmptyIfUserLogsBackOn() {
        signInPage.login();
        basketpage.cartButton();
    }


//************************************************
//Scenario: Add new address

    @And("the user has at least {int} saved address")
    public void theUserHasAtLeastSavedAddress(int arg0) {
    }


    @When("the user adds new address to checkout form")
    public void theUserAddsNewAddressToCheckoutForm() {
        checkoutPage.deliveryAddressSectionDisplayed();
        checkoutPage.setAddNewAddress();
    }


    @Then("the new address is saved")
    public void theNewAddressIsSaved() {
    }


}
