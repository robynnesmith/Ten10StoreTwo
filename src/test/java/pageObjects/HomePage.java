package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by jack.forman on 22/10/2016.
 */
public class HomePage extends BasePage {

    public HomePage(WebDriver driver) {
        super(driver);
    }

    private static String URL = "http://3.11.70.191/index.php";
    private Actions actions = new Actions(driver);

    private static final By SIGN_IN_BUTTON = By.cssSelector("#_desktop_user_info a");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUICK_VIEW_LINK = By.cssSelector(".quick-view");
    private static final By SECOND_PRODUCT_IMAGE = By.cssSelector("div.products > article:nth-child(2) img");
    private static final By SECOND_PRODUCT_QUICKVIEW = By.cssSelector("div.products > article:nth-child(2) .quick-view");
    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By MODAL_WINDOW = By.cssSelector("#myModalLabel");
    private static final By CLICK_ORDERS = By.cssSelector("a[title='Orders']");



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
        WebElement firstProductImage = driver.findElement(SECOND_PRODUCT_IMAGE);
        WebElement firstProductQuickView = driver.findElement(SECOND_PRODUCT_QUICKVIEW);
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
}
