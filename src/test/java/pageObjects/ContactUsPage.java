package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;


public class ContactUsPage extends BasePage {

    WebDriverWait wait = new WebDriverWait(driver, 5);
    private static final By CONTACT_US_PAGE = By.cssSelector("a[href='http://3.11.70.191/index.php?controller=contact']");
    private static final By EMAIL = By.cssSelector("div[class='col-md-6'] >input.form-control");
    private static final By MESSAGE = By.cssSelector("div[class='col-md-9'] >textarea");
    private static final By SEND = By.cssSelector("input[class='btn btn-primary']");
    private static final By SENT_MESSAGE = By.cssSelector("div[class='col-xs-12 alert alert-success']");


    public void goToContactUsPage() {
        WebElement contactUsPage = driver.findElement(CONTACT_US_PAGE);
        contactUsPage.click();
    }

    public void enterEmailAddress() {
        WebElement email = driver.findElement(EMAIL);
        email.sendKeys("zaknoor@fakemail.com");
    }

    public void enterMessage() {
        WebElement message = driver.findElement(MESSAGE);
        message.sendKeys("skdfjlfkdjs");
    }

    public void clickSend() {
        WebElement send = driver.findElement(SEND);
        send.click();
    }

    public void verifySentMessage() {
        WebElement sentMessage = driver.findElement(SENT_MESSAGE);
        wait.until(ExpectedConditions.visibilityOf(sentMessage));
        System.out.println(sentMessage.getText());
        Assert.assertTrue(sentMessage.isDisplayed());
    }
}
