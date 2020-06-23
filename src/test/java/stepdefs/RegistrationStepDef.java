package stepdefs;

import config.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class RegistrationStepDef {
    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();

    @Given("^clear cookies$")
    public void clearCookies() {
        homepage.clearCookies();
    }

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIsOnThePage(String page){
        if(page.equals("create a new account")) {
            homepage.goTo();
            homepage.navigateToSignInPage();
            signInPage.clickCreateAnAccount();
        }
    }

    @When("^the user completes the form with a \"([^\"]*)\" email address$")
    public void theUserCompletesTheFormWithAEmailAddress(String email) {
        if (email.equals("registered")) {
            createNewAccountPage.enterPersonalDetails();
            createNewAccountPage.clickSave();
        }
        else if (email.equals("unregistered")){
            createNewAccountPage.enterDetailsMinusEmail();
            createNewAccountPage.enterUnregisteredEmail();
            createNewAccountPage.clickSave();
        }
    }

    @Then("^the \"my account\" page is displayed$")
    public void myAccountPageDisplayed(){
        signInPage.successfulSignIn();
    }

    @When("^the user enters a \"([^\"]*)\" email address$")
    public void theUserEntersAEmailAddress(String email) {
        if (email.equals("registered")) {
            createNewAccountPage.enterRegisteredEmail();
        }
        else if (email.equals("unregistered")){
            createNewAccountPage.enterUnregisteredEmail();
        }
    }

    @And("^the user enters an invalid \"([^\"]*)\"$")
    public void theUserEntersInvalidData(String input) {
        if (input.equals("name")) {
            createNewAccountPage.enterDetailsWithNumericName();
            createNewAccountPage.clickSave();
        } else if (input.equals("date of birth")) {
            createNewAccountPage.enterDetailsMinusEmail();
            createNewAccountPage.enterBirthday("Thursday");
            createNewAccountPage.clickSave();
        }
    }

    @Then("^\"([^\"]*)\" alert is displayed$")
    public void invalidErrorDisplayed(String alert) {
        if(alert.equals("user already registered")){
            signInPage.alreadyRegisteredAlertPresent();
        } else if (alert.equals("invalid name")) {
            createNewAccountPage.invalidNameAlertPresent();
        } else if (alert.equals("invalid date of birth")) {
            createNewAccountPage.invalidFormat();
        }
    }

}

