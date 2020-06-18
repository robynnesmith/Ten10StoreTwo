package Tests;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import pageObjects.*;

import static Tests.TestSuite.driverFactory;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class BuyJourney {

    public static WebDriver driver = driverFactory.getDriver();
    private HomePage homepage = new HomePage(driver);
    private ShoppingCartPage basketpage = new ShoppingCartPage(driver);
    private SignInPage signInPage = new SignInPage(driver);
    private ProductPage productPage = new ProductPage(driver);
    private Orders orders = new Orders(driver);
    private ContactUsPage contactPage = new ContactUsPage(driver);

    @Before
    public void individualSetUp() {
        driver.manage().deleteAllCookies();
        homepage.goTo();
        homepage.maximiseBrowserWindow();
    }

    /**
     * Select Item from homepage, takes to product page
     * On homepage
     * Hover over a product's image
     * Click More Button
     * Verify product page is displayed
     */
    @Test
    public void selectItemFromHomepage() {
        homepage.hoverOverItem();
        homepage.clickMoreButton();
        productPage.productPageDisplayed();
    }


    /**
     * Add product to Cart from homepage
     * Hover over product from homepage
     * Click add to cart
     * Verify added to cart
     */
    @Test
    public void addProductToCartFromHomepage() {
        homepage.hoverOverItem();
        homepage.addItemToCart();
        homepage.addedToCart();

    }

    /**
     * Add product to cart from Product page
     * On product page
     * Select Quantity
     * Select Size
     * Select Colour (if available)
     * Click add to cart
     * Verify Added to Cart
     */
    @Test
    public void addProductToCartFromProductPage() {

        productPage.navigatetoProductPage();
        productPage.selectQuantity();
        productPage.selectSize();
        productPage.selectColour();
        basketpage.addToCart();
        homepage.addedToCart();
    }

    /**
     * Navigate to 'Women' page
     * Select dresses
     * Select size
     * Select colour
     * Select price range
     * Verify that correct product is displayed
     */

    @Test
    public void searchUsingFilters() {
        homepage.clickWomen();
        productPage.filterDresses();
        productPage.filterMedium();
        productPage.filterYellow();
        productPage.filterPrice();
        productPage.correctItemDisplayed();
    }

    /**
     * must be signed in with previous orders placed
     * * Navigate to Sign In Page
     * * Click Orders (bottom of page)
     * * Click Details
     * * Choose Product
     * *Add Comment
     * *Verify that message was successfuly sent
     */
    @Test
    public void addMessage() {
        homepage.navigateToSignInPage();
        signInPage.login();
        homepage.clickOrder();
        orders.clickDetails();
        orders.chooseProductDropDown();
        orders.enterMessage("hi");
        orders.sendMessage();
        orders.successfullySendMessage();
    }

    /**
     * From the homepage click on - Contact Us
     * (On the top left of the page)
     * Enter email address
     * Enter a message
     * Click on - Send
     * Verify message has been sent
     **/
    @Test
    public void proceedToContactUsPage() {
        contactPage.goToContactUsPage();
        contactPage.enterEmailAddress();
        contactPage.enterMessage();
        contactPage.clickSend();
        contactPage.verifySentMessage();
    }

    /**
     * *click on Women
     * *select fiters for category, size, colour
     * *then select "clear all" filter
     * *verify that all 7 items available again
     */
    @Test
    public void clearFilter() {
        homepage.clickWomen();
        productPage.filterDresses();
        productPage.filterMedium();
        productPage.filterYellow();
        productPage.clearFilter();
        productPage.sevenProducts("There are 7 products.");
    }

    /**
     * Navigate to news subscription at the bottom
     of the homepage
     * Enter a valid email address
     * Click subscribe
     * Verify that success message is displayed
     */


    @Test
    public void subscribeToNews(){
        homepage.enterEmail("randomemail1@gmail.com");
        homepage.clickSubscribe();
        homepage.checkSuccessfullySubscribed();
    }

}



