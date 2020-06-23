package stepdefs;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;


public class ShoppingCartStepDef {
    private static DriverFactory driverFactory;
    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homePage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private CheckoutPage checkoutPage = new CheckoutPage(driver);


    @Given("^the user is on the \"shopping cart\" page$")
    public void userOnShoppingCartPage() {
        homePage.itemAddedToCart();
    }

    @And("^the user has \"1 item\" in their basket$")
    public void userHasItemInBasket() {
        basketpage.navigateToBasket();
    }

    @When("^the item is deleted$")
    public void itemDeletedFromBasket() {
        basketpage.deleteItemFromBasket();
    }

    @Then("^the item should be removed$")
    public void itemShouldBeRemoved() {

    }

    @And("^pricing & totals should be updated$")
    public void pricingAndTotalsUpdated() {
        basketpage.checkItemRemovedFromBasket();

    }




}
