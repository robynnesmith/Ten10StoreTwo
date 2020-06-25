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

    //Select item from homepage
    @When("^the user selects item through hovering over it$")
    public void theUserSelectsItemThroughHoveringOverIt() {
        homepage.hoverOverItem();
        homepage.clickMoreButton();
    }

    @Then("^the Product Page is displayed$")
    public void theProductPageIsDisplayed() {
        productPage.productPageDisplayed();
    }

    //Add product to cart from homepage
    @When("^the user adds \"([^\"]*)\" to cart by hovering over it$")
    public void theUserAddsToCartByHoveringOverIt(String item) {
        switch(item){
            case "first item":
                homepage.hoverOverItem();
                homepage.addItemToCart();
                break;
            case "second item":
                homepage.continueShopping();
                homepage.hoverOverThirdItem();
                homepage.clickThirdItemQuickView();
                homepage.addSingleItemToCart();
        }

    }

    @When("^the user selects \"([^\"]*)\"$")
    public void theUserSelects(String selects) {
        switch(selects) {
            //Add product to cart from product page
            case "details of item":
                productPage.selectQuantity();
                productPage.selectSize();
                productPage.selectColour();
                break;
            //add message
            case "submits message":
                orders.enterMessage("hi");
                orders.sendMessage();
                break;
            //Test product filters on dresses page
            //clear filters
            case "different filters":
                productPage.filterDresses();
                productPage.filterMedium();
                productPage.filterYellow();
                productPage.filterPrice();
                break;
            case "clears filters":
                productPage.clearFilter();
            default:
                System.out.println("not able to select");
        }
    }
//Add product to cart from product page
    @And("^the user adds item to cart$")
    public void theUserAddsItemToCart() {
        basketpage.addToCart();
    }

//Test product filters on dresses page
    @Then("^The correct product is displayed$")
    public void theCorrectProductIsDisplayed() {
        productPage.correctItemDisplayed();
    }

//clear filters
    @Then("^all 7 products are displayed$")
    public void all7ProductsAreDisplayed() {
        productPage.sevenProducts("There are 7 products.");
    }

//Subscribe to news and special sales
    @When("^the user completes the newsletter form with a \"([^\"]*)\" email address$")
    public void theUserCompletesTheNewsletterFormWithAEmailAddress(String validEmail) {
        switch(validEmail){
            case "valid":
                homepage.enterEmail(homepage.randomEmail() + "@hello.com");
                homepage.clickSubscribe();
                break;
        }
    }

//Proceed to Contact Us page and send a message
    @When("the user completes the contact us form")
    public void theUserCompletesTheContactUsForm() {
        contactPage.enterEmailAddress();
        contactPage.enterMessage();
        contactPage.clickSend();
    }

    @When("the user types product name into search our catalogue bar")
    public void theUserTypesProductNameIntoSearchOurCatalogueBar() {
        homepage.searchBarOnHomePage("dress");
        homepage.clickSearch();
        homepage.hoverOverDress();
        homepage.addItemToCart();
    }

//Not enough stock
    @When("^the user enters a high value in the quantity field$")
    public void enterHighQuantity(){
        productPage.selectColour();
        productPage.emptyQuantity();
        productPage.enterQuantity("499");
        productPage.selectQuantity();
    }

}
