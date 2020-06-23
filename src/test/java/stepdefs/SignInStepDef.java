package stepdefs;

import config.DriverFactory;
import org.openqa.selenium.WebDriver;
import pageObjects.CheckoutPage;
import pageObjects.HomePage;
import pageObjects.SignInPage;


public class SignInStepDef {
    private HomePage homepage = new HomePage();
    private SignInPage signInPage = new SignInPage();
    private CheckoutPage checkoutPage = new CheckoutPage();
}
