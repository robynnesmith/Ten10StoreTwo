package Tests;

import org.junit.Before;
import org.junit.Ignore;
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
//        orders.chooseProductDropDown();
        orders.enterMessage("hi");
        orders.sendMessage();
        orders.successfullySendMessage();
        signInPage.clickSignOut();
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
        homepage.enterEmail(homepage.randomEmail() + "@abc.com");
        homepage.clickSubscribe();
        homepage.checkSuccessfullySubscribed();
    }

    /**
     * 1. Navigate to homepage.
     * 2. Select summer dresses from Menu.
     * 3. Choose third item.
     * 4. Select size and quantity from quick view.
     * 5. Click 'Add to cart'.
     * Verify product added to cart.
     */

    @Test
    public void addItemViaSummerDressesInMenu(){
        homepage.hoverOverWomen();
        homepage.selectSummerDress();
        productPage.selectThirdSummerDress();
        productPage.selectQuantity();
        productPage.selectSize();
        basketpage.addToCart();
        homepage.addedToCart();
    }

    /**
    *1. Navigate to homepage
     * 2. Type product name into 'search our catalogue' bar
     * 3. Click item
     * 4. Select size and quantity
     * 5. Click 'Add to cart'
     * 6. Check product added to cart
    */

    @Test
    public void addItemViaCatalogueSearch(){
        homepage.searchBarOnHomePage("dress");
        homepage.clickSearch();
        homepage.hoverOverDress();
        homepage.addItemToCart();
        homepage.addedToCart();

    }
    /**
     * 1. After added item to basket in quick view, continue shopping
     * 2. Add a different item to basket in quick view
     * 3. Head to Check out
     * 4. Verify Second Item is added
     */

    @Test
    public void continueShoppingAndAddSecondItemToBasket(){
        homepage.hoverOverItem();
        homepage.addItemToCart();
        homepage.continueShopping();
        homepage.hoverOverThirdItem();
        homepage.clickThirdItemQuickView();
        homepage.addSingleItemToCart();
        homepage.addedToCart();
    }

    /**
     *1. Navigate to Home page.
     * 2. Select any product on the home page
     * 3. Enter a high number in the quantity (Example 500)
     * Verify that the message "There are not enough products in Stock displayed"
     */
    @Test @Ignore
    public void notEnoughStock (){
        productPage.navigatetoProductPage();
        productPage.selectColour();
        productPage.emptyQuantity();
        productPage.enterQuantity("500");
        productPage.noStockMessage();

    }

    /**
     *1. Navigate to Home page.
     * 2. Select any product on the home page
     * 3. Enter a high number in the quantity (Example 500)
     * Verify that "Add to Cart" button is disabled.
     */
    @Test @Ignore
    public void noAddToCartButtonForOutOfStock (){

    }

    /**
     *1. Navigate to home page
     * 2. Select a product that is available with different option (FADED SHORT SLEEVES T-SHIRT)
     * Verify that the message "Product available with different options" is displayed.
     */
    @Test @Ignore
    public void productAvailableWithDifferentOption (){

    }

    /**
     * Precodition:
     * One or more orders are already made with the account in use.
     * 1. Navigate to Home page
     * 2. Click on <Account name>
     * 3. Click on "Order History And Details"
     * 4. Click on "Reorder"
     * 5. Complete the purchase.
     * Verify that the order made in Step 5 is succesful.
     * Verify that the order is displayed as a seperate order in "Order History and Details".
     */
    @Test @Ignore
    public void reorderPreviousPurchase (){

    }

}



