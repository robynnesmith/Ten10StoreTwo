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

//************************************************
//User signs in using a registered email
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

//************************
//User can sign out
    @Given("the user is signed in")
    public void theUserIsSignedIn() {
        homepage.navigateToSignInPage();
        signInPage.login();
    }

    @When("the user clicks sign out")
    public void theUserClicksSignOut() {
        signInPage.clickSignOut();
    }

//************************
// User enters registered email to recover password
    @And("clicks retrieve password")
    public void clicksRetrievePassword() {
        signInPage.clickRetrievePassword();
    }

//************************
// User enters new address on the accounts page
    @When("the user adds a new address")
    public void theUserAddsANewAddress() {
        checkoutPage.enterNewAddressDetails("Mr Wren", "Ten10", "123 Street", "Derby", "12345");
    }

//************************
//User logs in and updates password
    @When("user updates password")
    public void userUpdatesPassword() {
        signInPage.enterPassword();
        signInPage.typeNewPassword();
        signInPage.clickSave();
    }
}


