package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pageObjects.*;

public class CommonStepDef {
    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private Orders orders = new Orders();
    private ContactUsPage contactPage = new ContactUsPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();

    @Given("^clear cookies$")
    public void clearCookies() {
        homepage.clearCookies();
    }

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIsOnPage(String page) {
        homepage.goTo();
        switch (page) {
            //Buy Journey
            case "home":
                break;
            case "product":
                productPage.navigatetoProductPage();
                break;
            case "account details":
                homepage.navigateToSignInPage();
                signInPage.login();
                homepage.clickOrder();
                orders.clickDetails();
                break;
            case "women":
                homepage.clickWomen();
                break;
            case "contact us":
                contactPage.goToContactUsPage();
                break;
            //Registration
            case "create a new account":
                homepage.goTo();
                homepage.navigateToSignInPage();
                signInPage.clickCreateAnAccount();
                break;
            //Shopping Cart
            case "shopping cart":
                homepage.goTo();
                homepage.itemAddedToCart();
                break;
            //Sign In
            case "sign in":
                homepage.goTo();
                homepage.navigateToSignInPage();
                break;
            case "forgotten password":
                homepage.goTo();
                homepage.navigateToSignInPage();
                signInPage.forgottenPassword();
                break;
            default:
                System.out.println("Unexpected page type");
        }
    }
    @Then("^the successfully submitted message for \"([^\"]*)\" is displayed$")
    public void theSuccessfullySubmittedMessageIsDisplayed(String successful) {
        switch(successful){
            case "added to cart":
                homepage.addedToCart();
                break;
            case "add message":
                orders.successfullySendMessage();
                signInPage.clickSignOut();
                break;
            case "subscription":
                homepage.checkSuccessfullySubscribed();
                break;
            case "contact us":
                contactPage.verifySentMessage();
                break;
            case "user logged in":
                signInPage.successfulSignIn();
                break;
        }

    }
    @Then("^\"([^\"]*)\" alert is displayed$")
    public void invalidErrorDisplayed(String alert) {
        switch(alert) {
            case "user already registered":
                signInPage.alreadyRegisteredAlertPresent();
                break;
            case "invalid name":
                createNewAccountPage.invalidNameAlertPresent();
                break;
            case "invalid date of birth":
                createNewAccountPage.invalidFormat();
                break;
            case "invalid email":
                signInPage.unregisteredUserAlert();
                break;
            case "invalid password":
                signInPage.authenticationFailed();
                break;
            case "recovery email":
                signInPage.successAlert();
                break;
        }
    }

}
