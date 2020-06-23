package Tests;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import pageObjects.CreateNewAccountPage;
import pageObjects.HomePage;
import pageObjects.ShoppingCartPage;
import pageObjects.SignInPage;

import static Tests.TestSuite.driverFactory;


/**
 * Created by jack.forman on 09/10/2016.
 */


public class Registration {

    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private CreateNewAccountPage createNewAccountPage = new CreateNewAccountPage();

    /**
     * This should make sure we are on the correct page, i.e. set up each test case so we can be sure that they run
     */
    @Before
    public void individualSetUp() {
        homepage.clearCookies();
        homepage.goTo();
    }


    /**
     * Cannot register if user Already Registered
     * Pre-Conditions - Must have Email address of user already registered
     * Navigate to Sign In Screen
     * Enter E mail Address
     * Click Create Account
     * Verify error message displayed
     */
    @Test
    public void registerAlreadyRegistered() {
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
        signInPage.alreadyRegisteredAlertPresent();
    }


    /**
     * New user is able to register (New = not registered before)
     * Navigate to signIn Page
     * Enter E-Mail Address
     * Click Create New Account
     * Fill in All Details on registration form
     * Click Register
     * Check My Account Page is Displayed
     */
    @Test
    public void registerAsNewUser() {
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.enterPersonalDetails();
        createNewAccountPage.clickSave();
    }

    /**
     * enter numeric values into name field
     * valid details in other fields
     * verify error message is displayed
     */
    @Test
    public void numericValuesInNameField(){
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.personalDetails("123", "Wren", "randomemail@gmail.com", "password");
        createNewAccountPage.clickSave();
        createNewAccountPage.invalidNameAlertPresent();
    }

    /**
     * Go to sign in page
     * Navigate to registration page
     * Fill out details on registration form
     * Insert invalid date for birthday field
     * Click Save
     * Verify Error message
     */
    @Test
    public void enterInvalidBirthday(){
        homepage.navigateToSignInPage();
        signInPage.clickCreateAnAccount();
        createNewAccountPage.personalDetails("Adam", "Wren", "randomemail@gmail.com", "password");
        createNewAccountPage.enterBirthday("Thursday");
        createNewAccountPage.clickSave();
        createNewAccountPage.invalidFormat();
    }

    @After
    public void individualTearDown() {

    }

    @AfterClass
    public static void mainTearDown() {
        // Uncomment this when just running individual tests in this file.
        //driver.quit();
    }


}
