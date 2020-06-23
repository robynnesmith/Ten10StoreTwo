package stepdefs;

import config.DriverFactory;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

public class BuyJourneyStepDef {

    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private Orders orders = new Orders();
    private ContactUsPage contactPage = new ContactUsPage();

    @Given("^user is on the \"([^\"])\" page$")
    public void theUserIsOnThePage(String page) {
        switch(page){
            case "homepage":
                homepage.goTo();
                break;
            case "product page":
                productPage.navigatetoProductPage();
                break;
            default:
                System.out.println("Unexpected page type");
        }
    }
//Select item from homepage
    @When("^the user selects item through hovering over it$")
    public void theUserSelectsItemThroughHoveringOverIt(){
        homepage.hoverOverItem();
        homepage.clickMoreButton();
    }
    @Then("^the Product Page is displayed$")
    public void theProductPageIsDisplayed (){
        productPage.productPageDisplayed();
    }

//Add product to cart from homepage
    @When("^the user adds item to cart by hovering over it$")
    public void theUserAddsItemToCartByHoveringOverIt() {
        homepage.hoverOverItem();
        homepage.addItemToCart();
    }
    @Then("^verify product has been added to cart$")
    public void verifyProductHasBeenAddedToCart(){
        homepage.addedToCart();
    }

//Add product to cart from product page
    @When("^the user selects details of item$")
    public void theUserSelectsDetailsOfItem(){
        productPage.selectQuantity();
        productPage.selectSize();
        productPage.selectColour();
    }
    @And("add item to card")
    public void addItemToCart(){
        basketpage.addToCart();
    }

//
}
