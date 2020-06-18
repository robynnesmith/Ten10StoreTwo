package pageObjects;

import org.apache.http.impl.conn.DefaultRoutePlanner;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

public class ProductPage extends BasePage {

    public ProductPage (WebDriver driver) {
        super(driver);
    }

    private static final By ADD_TO_CART_BUTTON = By.cssSelector(".btn.btn-primary.add-to-cart");
    private static final By BLOUSE_IMAGE = By.cssSelector("img[alt = 'Blouse'");
    private static final By QUANTITY_UP_BUTTON = By.cssSelector(".material-icons.touchspin-up");
    private static final By SIZE_DROPDWON = By.cssSelector("#group_1");
    private static final By WHITE_COLOUR_OPTION = By.cssSelector("input[value = '8']");
    private static final By DRESSES_CHECKBOX = By.cssSelector("[href='http://3.11.70.191/index.php?controller=category&id_category=3&q=Categories-Dresses']");
    private static final By MEDIUM_CHECKBOX = By.cssSelector("[href='http://3.11.70.191/index.php?controller=category&id_category=3&q=Categories-Dresses/Size-M']");
    private static final By YELLOW_CHECKBOX = By.cssSelector("[href='http://3.11.70.191/index.php?controller=category&id_category=3&q=Categories-Dresses/Size-M/Color-Yellow']");
    private static final By PRICE_RANGE = By.cssSelector("[href='http://3.11.70.191/index.php?controller=category&id_category=3&q=Categories-Dresses/Size-M/Color-Yellow/Price-%24-16-17']");
    private static final By CLEAR_FILTERS = By.cssSelector(".btn.btn-tertiary.js-search-filters-clear-all:last-of-type");
//    private static final By SEVEN_PRODUCTS = By.xpath("//*[text()='Showing 1-7 of 7 item(s)']");

    public void productPageDisplayed() {
        WebElement productPage = driver.findElement(ADD_TO_CART_BUTTON);
        Assert.assertTrue(elementIsVisible(productPage));
    }

    public void navigatetoProductPage() {
        waitAndClick(BLOUSE_IMAGE);
    }

    public void selectQuantity() {
        waitAndClick(QUANTITY_UP_BUTTON);
    }

    public void selectSize() {
        Select size = new Select(driver.findElement(SIZE_DROPDWON));
        size.selectByVisibleText("M");
    }

    public void selectColour() {
        WebElement chooseColour = driver.findElement(WHITE_COLOUR_OPTION);
        chooseColour.click();
    }

    public void filterDresses(){
        waitAndClick(DRESSES_CHECKBOX);
    }

    public void filterMedium(){
        waitAndClick(MEDIUM_CHECKBOX);
    }

    public void filterYellow(){
        waitAndClick(YELLOW_CHECKBOX);
    }

    public void filterPrice(){
        waitAndClick(PRICE_RANGE);
    }

    public void correctItemDisplayed(){
        WebElement printedChiffonDress = driver.findElement(By.xpath("//*[text()='Printed Chiffon Dress']"));
        Assert.assertTrue(elementIsVisible(printedChiffonDress));
    }

    public void clearFilter(){ waitAndClick(CLEAR_FILTERS); }

//    public void sevenProducts() {
//        WebElement sevenProducts = driver.findElement(By.xpath("//*[text()='There are 7 products.']"));
//        Assert.assertTrue(elementIsVisible(sevenProducts));
//    }
    public void sevenProducts(String input){
        driver.getPageSource().contains(input);
    }


}
