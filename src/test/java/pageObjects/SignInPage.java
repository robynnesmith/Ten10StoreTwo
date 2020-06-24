package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class SignInPage extends BasePage {

    private PersonalDetails pd = getPersonalDetails();
    private WebDriverWait wait = new WebDriverWait(driver, 10);

    private static final By EMAIL_ADDRESS_INPUT_BOX = By.cssSelector("input#email_create");
    private static final By CREATE_NEW_ACCOUNT_BUTTON = By.cssSelector(".no-account>a");
    private static final By ALREADY_REGISTERED_ALERT = By.cssSelector(".alert.alert-danger");
    private static final By EMAIL_INPUT = By.name("email");
    private static final By PASSWORD_INPUT = By.name("password");
    private static final By SIGN_IN_BUTTON = By.cssSelector("#login-form button[type='submit']");
    private static final By SIGN_OUT_BUTTON = By.cssSelector(".logout.hidden-sm-down");
    private static final By UNREGISTERED_USER_ALERT = By.cssSelector(".alert.alert-danger");
    private static final By FORGOTTEN_PASSWORD_LINK = By.cssSelector(".forgot-password");
    private static final By SEND_RESET_LINK_BUTTON = By.cssSelector(".forgotten-password button:first-of-type");
    private static final By NOTIFICATION_MESSAGE = By.cssSelector(".ps-alert-error");
    private static final By ADDRESSES = By.cssSelector("#addresses-link");
    private static final By ADD_NEW_ADDRESS = By.cssSelector("[data-link-action='add-address']");
    private static final By CLICK_SIGN_IN = By.cssSelector("span[class='hidden-sm-down']");
    private static final By SUCCESS_ALERT = By.cssSelector(".ps-alert-success");
    private static final By INFORMATION = By.cssSelector("[href='http://3.11.70.191/index.php?controller=identity']");
    private static final By NEW_PASSWORD = By.name("new_password");
    private static final By UPDATED_PASSWORD_SUCCESS = By.xpath("//*[text()='Information successfully updated.']");

    public void enterCreateNewAccountEmailAddress(String emailAddress) {
        findAndType(EMAIL_ADDRESS_INPUT_BOX, emailAddress);
    }

    public void clickCreateAnAccount() {
        waitAndClick(CREATE_NEW_ACCOUNT_BUTTON);
    }

    public void alreadyRegisteredAlertPresent() {
        WebElement alertBox = driver.findElement(ALREADY_REGISTERED_ALERT);
        assertTrue(elementIsVisible(alertBox));
    }

    public void enterPassword() {
        findAndType(PASSWORD_INPUT, pd.getPassword());
    }

    public void enterPassword2(String password){
        findAndType(PASSWORD_INPUT, password);

    }

    public void enterInvalidPassword(String invalidPassword){
        findAndType(PASSWORD_INPUT, invalidPassword);
    }

    public void successfulSignIn() {
        waitUntilVisible(SIGN_OUT_BUTTON);
        assertTrue(elementIsVisible(driver.findElement(SIGN_OUT_BUTTON)));
    }

    public void enterSignInEmailAddress(String emailAddress) {
        findAndType(EMAIL_INPUT, emailAddress);
    }

    public void clickLogIn() {
        waitAndClick(SIGN_IN_BUTTON);
    }

    public void unregisteredUserAlert() {
        WebElement alertBox = driver.findElement(UNREGISTERED_USER_ALERT);
        assertTrue(elementIsVisible(alertBox));
    }

    public void forgottenPassword() {
        waitAndClick(FORGOTTEN_PASSWORD_LINK);
    }

    public void enterForgottenPasswordEmailAddress(String email) {
        findAndType(EMAIL_INPUT, email);
    }

    public void clickRetrievePassword() {
        waitAndClick(SEND_RESET_LINK_BUTTON);
    }

    public void confirmationMessage() {
        WebElement alertBox = driver.findElement(NOTIFICATION_MESSAGE);
        assertTrue(elementIsVisible(alertBox));
    }

    public void clickSignOut() {
        waitAndClick(SIGN_OUT_BUTTON);
    }

    public void userSignedOut() {
        waitUntilInvisible(SIGN_OUT_BUTTON);
        driver.navigate().refresh();
        WebElement signInButton = driver.findElement(SIGN_IN_BUTTON);
        assertTrue(elementIsVisible(signInButton));
    }

    public void login() {
        enterSignInEmailAddress(pd.getEmail());
        enterPassword();
        clickLogIn();
        successfulSignIn();
    }

    public void invalidLogin() {
        enterSignInEmailAddress(pd.getInvalidEmail());
        enterPassword();
        clickLogIn();
        unregisteredUserAlert();
    }

    public void forgottenPasswordCheck() {
        forgottenPassword();
        enterForgottenPasswordEmailAddress(pd.getEmail());
        clickRetrievePassword();
        confirmationMessage();
    }

    public void authenticationFailed(){
        WebElement autheticationAlert = driver.findElement(By.xpath("//*[text()='Authentication failed.']"));
        Assert.assertTrue(elementIsVisible(autheticationAlert));
    }

    public void clickAddressesLink(){
        waitAndClick(ADDRESSES);
    }

    public void clickAddNewAddress(){
        waitAndClick(ADD_NEW_ADDRESS);
    }

    public void addressSuccessfullyAdded(){
        WebElement successMessage = driver.findElement(By.xpath("//*[text()='Address successfully added!']"));
        Assert.assertTrue(elementIsVisible(successMessage));
    }
    public void clickSignIn() {
        waitAndClick(CLICK_SIGN_IN);
    }

    public void recoveryEmailSuccess(){
        WebElement successAlert = driver.findElement(SUCCESS_ALERT);
        Assert.assertTrue(elementIsVisible(successAlert));
    }

    public void clickInformation(){
       waitAndClick(INFORMATION);
    }

    public void typeNewPassword(String newPassword){
        findAndType(NEW_PASSWORD, newPassword);
    }

    public void passwordUpdatedSuccessfully(){
        WebElement successAlert = driver.findElement(UPDATED_PASSWORD_SUCCESS);
        Assert.assertTrue(elementIsVisible(successAlert));
    }


}
