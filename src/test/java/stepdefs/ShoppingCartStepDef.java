package stepdefs;

import config.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;


public class ShoppingCartStepDef {
    private HomePage homePage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private CheckoutPage checkoutPage = new CheckoutPage();


    @Given("^the user is on the \"shopping cart\" page$")
    public void userOnShoppingCartPage() {

    }

    @And("^the user has \"1 item\" in their basket$")
    public void userHasItemInBasket() {

    }

    @When("^the item is deleted$")
    public void itemDeletedFromBasket() {

    }

    @Then("^the item should be removed$")
    public void itemShouldBeRemoved() {

    }

    @And("^pricing & totals should be updated$")
    public void pricingAndTotalsUpdated() {

    }


}
