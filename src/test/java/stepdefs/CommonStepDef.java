package stepdefs;

import io.cucumber.java.en.Given;
import pageObjects.*;

public class CommonStepDef {
    private HomePage homepage = new HomePage();
    private ShoppingCartPage basketpage = new ShoppingCartPage();
    private SignInPage signInPage = new SignInPage();
    private ProductPage productPage = new ProductPage();
    private Orders orders = new Orders();
    private ContactUsPage contactPage = new ContactUsPage();

    @Given("^clear cookies$")
    public void clearCookies() {
        homepage.clearCookies();
    }

    @Given("^the user is on the \"([^\"]*)\" page$")
    public void theUserIsOnPage(String page) {
        homepage.goTo();
        switch (page) {
            case "home":
                break;
            case "product":
                productPage.navigatetoProductPage();
                break;
            case "account details":
                homepage.navigateToSignInPage();
                signInPage.login();
                homepage.clickOrder();
                orders.clickDetails();
                break;
            case "women":
                homepage.clickWomen();
                break;
            default:
                System.out.println("Unexpected page type");
            case "contact us":
                contactPage.goToContactUsPage();
                break;
            //Registration
            case "create a new account":
                homepage.goTo();
                homepage.navigateToSignInPage();
                signInPage.clickCreateAnAccount();
                break;
            //Shopping Cart
            case "shopping cart":
                homepage.goTo();
                homepage.itemAddedToCart();

        }
    }

}
