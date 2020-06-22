package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import jdk.jfr.MemoryAddress;
import org.openqa.selenium.WebDriver;
import pageObjects.CreateNewAccountPage;
import pageObjects.HomePage;
import pageObjects.ShoppingCartPage;
import pageObjects.SignInPage;



public class RegistrationStepDef {
    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage(driver);

    @Given("^the user is on the \"([^\"])\" page$")
    public void theUserIsOnThePage(){
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
    }

    //Scenario: Register user with already Registered Email Address.
    @When("^the user completes the form with an already registered email address$")
    public void alreadyRegisteredEmailAddress(){
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }
    @Then("^an error message is displayed$")
    public void errorMessageDisplayed(){
        signInPage.alreadyRegisteredAlertPresent();
    }

    //Scenario: New user is able to register.
    @When("^the user completes the form with an \"unregistered\" email address$")
    public void unregisteredEmailAddress(){
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }
    @Then("^the \"my account\" page is displayed$")
    public void myAccountPageDisplayed(){
        signInPage.successfulSignIn();
    }

    //Scenario: Numeric values are entered into the name field.
    @When("^the user enters numeric values into the name field$")
    public void numericValuesEnteredIntoNameField(){
        createNewAccountPage.personalDetails("123", "Wren", "randomemail@gmail.com", "password");
        createNewAccountPage.clickSave();
    }
    @Then("^an invalid name error is displayed$")
    public void invalidNameAlert(){
        createNewAccountPage.invalidNameAlertPresent();
    }

    //Scenario: An invalid Date of Birth is entered.
    @When("^the user enters an invalid date of birth$")
    public void invalidDateOfBirth(){
        createNewAccountPage.personalDetails("Adam", "Wren", "randomemail@gmail.com", "password");
        createNewAccountPage.enterBirthday("Thursday");
        createNewAccountPage.clickSave();
    }
    @Then("^an invalid date of birth error is displayed$")
    public void invalidDateOfBirthAlert(){
        createNewAccountPage.invalidFormat();
    }

}
