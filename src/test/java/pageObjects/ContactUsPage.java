package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;


public class ContactUsPage extends BasePage {

    public ContactUsPage(WebDriver driver) {
        super(driver);
    }

    WebDriverWait wait = new WebDriverWait(driver, 5);


    public void goToContactUsPage() {
        WebElement contactUsPage = driver.findElement(By.cssSelector("a[href='http://3.11.70.191/index.php?controller=contact']"));
        contactUsPage.click();
    }

    public void enterEmailAddress() {
        WebElement email = driver.findElement(By.cssSelector("div[class='col-md-6'] >input.form-control"));
        email.sendKeys("zaknoor@fakemail.com");
    }

    public void enterMessage() {
        WebElement message = driver.findElement(By.cssSelector("div[class='col-md-9'] >textarea"));
        message.sendKeys("skdfjlfkdjs");
    }

    public void clickSend() {
        WebElement send = driver.findElement(By.cssSelector("input[class='btn btn-primary']"));
        send.click();
    }


    public void verifySentMessage() {
        WebElement sentMessage = driver.findElement(By.cssSelector("div[class='col-xs-12 alert alert-success']"));
        wait.until(ExpectedConditions.visibilityOf(sentMessage));
        System.out.println(sentMessage.getText());
        Assert.assertTrue(sentMessage.isDisplayed());
    }
}
