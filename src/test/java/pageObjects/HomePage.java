package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.Random;

/**
 * Created by jack.forman on 22/10/2016.
 */
public class HomePage extends BasePage {
    Random random = new Random();

    private static String URL = "http://3.11.70.191/index.php";
    private Actions actions = new Actions(driver);

    private static final By SIGN_IN_BUTTON = By.cssSelector("#_desktop_user_info a");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUICK_VIEW_LINK = By.cssSelector(".quick-view");
    private static final By FOURTH_PRODUCT_IMAGE = By.cssSelector("div.products > article:nth-child(4) img");
    private static final By FOURTH_PRODUCT_QUICKVIEW = By.cssSelector("div.products > article:nth-child(4) .quick-view");
    private static final By THIRD_PRODUCT_IMAGE = By.cssSelector("div.products > article:nth-child(3) img");
    private static final By THIRD_PRODUCT_QUICKVIEW = By.cssSelector("div.products > article:nth-child(3) .quick-view");
    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By MODAL_WINDOW = By.cssSelector("#myModalLabel");
    private static final By WOMEN = By.cssSelector("#category-3");
    private static final By CLICK_ORDERS = By.cssSelector("a[title='Orders']");
    private static final By EMAIL = By.cssSelector("[name='email']");
    private static final By SUBSCRIBE_BUTTON = By.cssSelector("[name='submitNewsletter']");
    private static final By SUBSCRIBED_ALERT = By.cssSelector(".alert.alert-success");
    private static final By HOOVER_OVER_WOMEN = By.cssSelector("#category-3");
    private static final By SElECT_SUMMER_DRESS_HOMEPAGE  = By.cssSelector("[href='http://3.11.70.191/index.php?id_category=11&controller=category']");
    private static final By SEARCH_BAR = By.cssSelector("input[name='s']");
    private static final By PRESS_SEARCH = By.cssSelector("button[type='submit']");
    private static final By HOOVER_OVER_DRESS = By.cssSelector("img[alt='Blouse']");
//    private static final By CONTINUE_SHOPPING = By.cssSelector("button[data-dismiss='modal']:last-of-type");
    private static final By CONTINUE_SHOPPING = By.xpath("//*[text()='Continue shopping']");






    public void goTo() {
        driver.get(URL);
    }

    public void navigateToSignInPage() {
        waitAndClick(SIGN_IN_BUTTON);
    }

    public void hoverOverItem() {

        actions.moveToElement(driver.findElement(BLOUSE_IMAGE)).build().perform();

        WebElement hoverView = driver.findElement(QUICK_VIEW_LINK);
        Assert.assertTrue(elementIsVisible(hoverView));
    }

    public void clickMoreButton() {
        waitAndClick(BLOUSE_IMAGE);
    }


    public void maximiseBrowserWindow() {
        driver.manage().window().maximize();
    }

    public void addItemToCart() {
        WebElement firstProductImage = driver.findElement(FOURTH_PRODUCT_IMAGE);
        WebElement firstProductQuickView = driver.findElement(FOURTH_PRODUCT_QUICKVIEW);
        actions
                .moveToElement(firstProductImage)
                .click(firstProductQuickView)
                .perform();
        waitAndClick(ADD_TO_CART_BUTTON);
    }

    public void addedToCart() {
        waitUntilVisible(MODAL_WINDOW);
        WebElement addedToCart = driver.findElement(MODAL_WINDOW);
        Assert.assertTrue(elementIsVisible(addedToCart));
    }


    public void itemAddedToCart() {
        maximiseBrowserWindow();
        addItemToCart();
        addedToCart();
    }

    public void clickOrder() {
        waitAndClick(CLICK_ORDERS);
    }

    public void clickWomen(){
        waitAndClick(WOMEN);
    }

    public void enterEmail(String email){
        findAndType(EMAIL, email);
    }

    public void clickSubscribe(){
        waitAndClick(SUBSCRIBE_BUTTON);
    }

    public void checkSuccessfullySubscribed(){
        WebElement successAlert = driver.findElement(SUBSCRIBED_ALERT);
        Assert.assertTrue(elementIsVisible(successAlert));
    }

    public void hoverOverWomen() {

        actions.moveToElement(driver.findElement(HOOVER_OVER_WOMEN)).build().perform();

        WebElement hoverView = driver.findElement(SElECT_SUMMER_DRESS_HOMEPAGE);
        Assert.assertTrue(elementIsVisible(hoverView));
    }
    public void selectSummerDress(){
        waitAndClick(SElECT_SUMMER_DRESS_HOMEPAGE);
    }

    public void searchBarOnHomePage(String searchBar){
        findAndType(SEARCH_BAR, searchBar);
    }
    public void clickSearch(){ waitAndClick(PRESS_SEARCH);}

    public void hoverOverDress() {

        actions.moveToElement(driver.findElement(HOOVER_OVER_DRESS)).build().perform();

        WebElement hoverView = driver.findElement(QUICK_VIEW_LINK);
        Assert.assertTrue(elementIsVisible(hoverView));
    }

    public int randomEmail() {
        int randomEmail = random.nextInt(900) + 100;
        return randomEmail;
    }
    public void continueShopping(){ waitAndClick(CONTINUE_SHOPPING);}

    public void hoverOverThirdItem() {
        actions.moveToElement(driver.findElement(THIRD_PRODUCT_IMAGE)).build().perform();

        WebElement hoverView = driver.findElement(THIRD_PRODUCT_QUICKVIEW);
        Assert.assertTrue(elementIsVisible(hoverView));
    }
    public void clickThirdItemQuickView(){waitAndClick(THIRD_PRODUCT_QUICKVIEW);}

    public void addSingleItemToCart(){waitAndClick(ADD_TO_CART_BUTTON);}


}

