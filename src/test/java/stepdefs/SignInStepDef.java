package stepdefs;

import config.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.CheckoutPage;
import pageObjects.HomePage;
import pageObjects.SignInPage;


public class SignInStepDef {
    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


//    @Given("^the user is on the \"([^\"]*)\" page$")
//    public void theUserIsOnThePage(String page) {
//        if (page.equals("sign in")) {
//            homepage.goTo();
//            homepage.navigateToSignInPage();
//        } else if (page.equals("forgotten password")) {
//            homepage.goTo();
//            homepage.navigateToSignInPage();
//            signInPage.forgottenPassword();
//        }
//    }

    @When("^the user enters \"([^\"]*)\" email$")
    public void userEntersEmail(String email) {
        if (email.equals("registered")) {
            signInPage.enterSignInEmailAddress("random@gmail.com");
        } else if (email.equals("unregistered")) {
            signInPage.enterSignInEmailAddress("231rc3rd@gmail.com");
        }
    }

    @And("^\"([^\"]*)\" password$")
    public void userEntersPassword(String password) {
        if (password.equals("valid")) {
            signInPage.enterPassword2("password");
            signInPage.clickLogIn();
        } else if (password.equals("invalid")) {
            signInPage.enterInvalidPassword("password123");
            signInPage.clickLogIn();
        }
    }

//    @Then("^the users account is displayed")
//    public void usersAccountIsDisplayed(){
//        signInPage.successfulSignIn();
//    }

//    @Then("an invalid \"([^\"]*)\" alert is displayed")
//    public void anInvalidAlertIsDisplayed(String alert) {
//        switch (alert){
//            case "email":
//                signInPage.unregisteredUserAlert();
//                break;
//            case "password":
//                signInPage.authenticationFailed();
//                break;
//            case "recovery email":
//                signInPage.successAlert();
//                break;
//        }
//    }

    @Given("the user is signed in")
    public void theUserIsSignedIn() {
        homepage.navigateToSignInPage();
        signInPage.login();
    }

    @When("the user clicks sign out")
    public void theUserClicksSignOut() {
        signInPage.clickSignOut();
    }

    @And("clicks retrieve password")
    public void clicksRetrievePassword() {
        signInPage.clickRetrievePassword();
    }

    @And("^on the \"([^\"]*)\" page$")
    public void onTheAddressesPage(String page) {
        switch(page){
            case "addresses":
            signInPage.clickAddressesLink();
            signInPage.clickAddNewAddress();
            break;
            case "information":
                signInPage.clickInformation();
        }


    }

    @When("the user adds a new address")
    public void theUserAddsANewAddress() {
        checkoutPage.enterNewAddressDetails("Mr Wren", "Ten10", "123 Street", "Derby", "12345");
    }

    @When("user updates password")
    public void userUpdatesPassword() {
        signInPage.enterPassword();
        signInPage.typeNewPassword();
        signInPage.clickSave();
    }
}


