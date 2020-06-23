package Tests;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import pageObjects.CheckoutPage;
import pageObjects.HomePage;
import pageObjects.SignInPage;

import static Tests.TestSuite.driverFactory;

/**
 * Created by jack.forman on 30/10/2016.
 */
public class SignIn {

    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


    @Before
    public void individualSetUp() {
        homepage.clearCookies();
        homepage.goTo();
    }

    /**
     * Sign in as Registered User
     * Pre-Conditions - Must have signIn information for a registered user
     * Navigate to Sign In Page
     * Fill in Email Address
     * Fill in Password
     * Click Sign In
     * Verify My Account is Displayed
     */
    @Test
    public void signInAsRegisteredUser() {
        homepage.navigateToSignInPage();
        signInPage.login();
    }

    /**
     * Cannot sign in as unregistered customer
     * Pre-Conditions - Must have Email address and Password of unregistered customer
     * Navigate to Sign in Page
     * Fill in Email Address
     * Fill in Password
     * Click Sign in
     * Verify Error Message is Displayed
     */
    @Test
    public void signInAsUnRegisteredUser() {
        homepage.navigateToSignInPage();
        signInPage.invalidLogin();
        signInPage.unregisteredUserAlert();

    }

    /**
     * Forgotten Password
     * Pre-Conditions - Must have signIn information for a registered user
     * Navigate to Sign In Page
     * Click Forgotten Password
     * Enter E mail Address
     * Click retrieve password
     * Confirmation message displayed
     */
    @Test
    public void forgottenPassword() {
        homepage.navigateToSignInPage();
        signInPage.forgottenPasswordCheck();
    }

    /**
     * Able to sign out
     * Pre-Conditions - Must have signIn information for a registered user
     * Navigate to Sign In Page
     * Click sign out
     * Verify customer signed out
     */
    @Test
    public void signOut() {
        homepage.navigateToSignInPage();
        signInPage.login();
        signInPage.clickSignOut();
        signInPage.userSignedOut();

    }

    /**
     * *Navigate to sign in page
     * *Enter registered email address
     * *Enter invalid password
     * *Click sign in
     * *Verify error message is shown
     */
    @Test
    public void invalidPassword(){
        homepage.navigateToSignInPage();
        signInPage.enterSignInEmailAddress("random@gmail.com");
        signInPage.enterInvalidPassword("password123");
        signInPage.clickLogIn();
        signInPage.authenticationFailed();
    }

    /**
     * *navigate to account page and to addresses section
     * *add a new address and enter details into 'alias' and 'company' fields
     * *verify new address has been added
     */
    @Test
    public void addNewAddress(){
        homepage.navigateToSignInPage();
        signInPage.enterSignInEmailAddress("random@gmail.com");
        signInPage.enterPassword2("password");
        signInPage.clickLogIn();
        signInPage.clickAddressesLink();
        signInPage.clickAddNewAddress();
        checkoutPage.enterNewAddressDetails("Mr Wren", "Ten10", "123 Street", "Derby", "12345");
        signInPage.addressSuccessfullyAdded();
    }

    /**
     * *Go to sign in page
     * *Click forgot password
     * *Enter unregistered email
     * *Verify error message is displayed
     */
    @Test
    public void unregisteredEmailToRecoverPassword(){
        homepage.navigateToSignInPage();
        signInPage.forgottenPassword();
        signInPage.enterForgottenPasswordEmailAddress("123abc@abc123.com");
        signInPage.clickRetrievePassword();
        signInPage.successAlert();

    }

}
