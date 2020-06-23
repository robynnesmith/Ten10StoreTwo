package pageObjects;

import net.bytebuddy.implementation.bytecode.assign.TypeCasting;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by jack.forman on 23/10/2016.
 */
public class CreateNewAccountPage extends BasePage {

    private static final By FIRST_NAME_INPUT = By.name("firstname");
    private static final By LAST_NAME_INPUT= By.name("lastname");
    private static final By EMAIL_INPUT = By.name("email");
    private static final By PASSWORD_INPUT = By.name("password");
    private static final By SAVE_BUTTON = By.cssSelector(".form-control-submit");
    private static final By DATE_OF_BIRTH = By.name("birthday");


    public void enterPersonalDetails() {
        PersonalDetails pd = getPersonalDetails();
        findAndType(FIRST_NAME_INPUT, pd.getFirstName());
        findAndType(LAST_NAME_INPUT, pd.getLastName());
        findAndType(EMAIL_INPUT, pd.getEmail());
        findAndType(PASSWORD_INPUT, pd.getPassword());
    }

    public void clickSave() {
        waitAndClick(SAVE_BUTTON);
    }

    public void personalDetails(String firstName, String lastName, String email, String password){
        findAndType(FIRST_NAME_INPUT,firstName);
        findAndType(LAST_NAME_INPUT, lastName);
        findAndType(EMAIL_INPUT, email);
        findAndType(PASSWORD_INPUT, password);
    }

    public void invalidNameAlertPresent(){
        WebElement invalidName = driver.findElement(By.xpath("//*[text()='Invalid name']"));
        Assert.assertTrue(elementIsVisible(invalidName));
    }

    public void enterBirthday(String birthday){
        findAndType(DATE_OF_BIRTH, birthday);
    }

    public void invalidFormat(){
        WebElement birthdayAlert = driver.findElement(By.xpath("//*[text()='Format should be 05/31/1970.']"));
        Assert.assertTrue(elementIsVisible(birthdayAlert));
    }


}
