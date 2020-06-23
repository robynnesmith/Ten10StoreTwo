package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertTrue;

public class Orders extends BasePage{

    private static final By CLICK_DETAILS = By.linkText("Details");
    private static final By CHOOSE_PRODUCT_DROP_DOWN = By.cssSelector("option[value='7']");
    private static final By ENTER_MESSAGE = By.cssSelector("textarea[rows='3']");
    private static final By SEND_MESSAGE= By.cssSelector("button[name='submitMessage']");
    private static final By SUCCESSFULLY_SEND_MESSAGE = By.cssSelector(".alert.alert-success");

    public void clickDetails() {
        waitAndClick(CLICK_DETAILS);
    }
    public void chooseProductDropDown() { waitAndClick(CHOOSE_PRODUCT_DROP_DOWN); }
    public void enterMessage(String enterMessage) {
        findAndType(ENTER_MESSAGE, enterMessage);
    }
    public void sendMessage() { waitAndClick(SEND_MESSAGE); }
    public void successfullySendMessage() {
        WebElement alertBox = driver.findElement(SUCCESSFULLY_SEND_MESSAGE);
        assertTrue("message has been sent",elementIsVisible(alertBox));
    }

}