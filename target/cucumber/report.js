$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/buyjourney.feature");
formatter.feature({
  "name": "Buy Journey",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select item from homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects item through hovering over it",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelectsItemThroughHoveringOverIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Product Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theProductPageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to cart from homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds \"first item\" to cart by hovering over it",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"added to cart\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to cart from product page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"product\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"details of item\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelects(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserAddsItemToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"added to cart\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a message",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"account details\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"submits message\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelects(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"add message\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test product filters on dresses page.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"women\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"different filters\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelects(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The correct product is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theCorrectProductIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clear filters",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"women\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"different filters\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelects(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects \"clears filters\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelects(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all 7 products are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.all7ProductsAreDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subscribe to news and special sales",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the newsletter form with a \"valid\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserCompletesTheNewsletterFormWithAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"subscription\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Proceed to Contact Us page and send a message",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"contact us\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the contact us form",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserCompletesTheContactUsForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"contact us\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add item via Catalogue search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user types product name into search our catalogue bar",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserTypesProductNameIntoSearchOurCatalogueBar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"added to cart\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Continue Shopping and add second item to basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds \"first item\" to cart by hovering over it",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds \"second item\" to cart by hovering over it",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"quick-view\" href\u003d\"#\" data-link-action\u003d\"quickview\"\u003e...\u003c/a\u003e is not clickable at point (768, 555). Other element would receive the click: \u003ca href\u003d\"http://3.11.70.191/index.php?id_product\u003d3\u0026amp;id_product_attribute\u003d13\u0026amp;rewrite\u003dprinted-dress\u0026amp;controller\u003dproduct#/1-size-s/13-color-orange\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-1057\u0027, ip: \u0027172.27.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\DINAH~1.HUN\\AppData\\Local\\Temp\\scoped_dir13664_1718879529}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52201}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: effa41263a400ff5d5c1eef166c00780\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.clickThirdItemQuickView(HomePage.java:153)\r\n\tat stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(BuyJourneyStepDef.java:77)\r\n\tat ✽.the user adds \"second item\" to cart by hovering over it(file:///C:/Users/Dinah.hunde/Documents/Ten10%20Store/src/test/resources/features/buyjourney.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the successfully submitted message for \"added to cart\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Not enough stock insufficient stock alert",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"product\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters a high value in the quantity field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.enterHighQuantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"insufficient stock\" alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.invalidErrorDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "product available with different option",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"home\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects item through hovering over it",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserSelectsItemThroughHoveringOverIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"insufficient stock\" alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.invalidErrorDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register user with already Registered Email Address.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create a new account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the form with a \"registered\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserCompletesTheFormWithAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"user already registered\" alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.invalidErrorDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New user is able to register.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create a new account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the form with a \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserCompletesTheFormWithAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"user logged in\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Numeric values are entered into the name field.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create a new account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters a \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserEntersAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters an invalid \"name\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserEntersInvalidData(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid name\" alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.invalidErrorDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "An invalid Date of Birth is entered.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create a new account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters a \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserEntersAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters an invalid \"date of birth\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.theUserEntersInvalidData(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid date of birth\" alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.invalidErrorDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/shoppingcart.feature");
formatter.feature({
  "name": "Shopping Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove item from shopping basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has \"1 item\" in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userHasItemInBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the item is deleted",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemDeletedFromBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pricing \u0026 totals should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Increase quantity of product in basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has \"1 item\" in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userHasItemInBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user increases quantity of item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userIncreasesQuantityOfItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "their basket is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.basketIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product counter is updated",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.productCounterIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pricing \u0026 totals should be updated",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: .no-items (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:46)\r\n\tat pageObjects.ShoppingCartPage.checkItemRemovedFromBasket(ShoppingCartPage.java:49)\r\n\tat stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated(ShoppingCartStepDef.java:42)\r\n\tat ✽.pricing \u0026 totals should be updated(file:///C:/Users/Dinah.hunde/Documents/Ten10%20Store/src/test/resources/features/shoppingcart.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: .no-items\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-1057\u0027, ip: \u0027172.27.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:46)\r\n\tat pageObjects.ShoppingCartPage.checkItemRemovedFromBasket(ShoppingCartPage.java:49)\r\n\tat stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated(ShoppingCartStepDef.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Clear cookies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "clear cookies",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.clearCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Proceed to checkout not logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is \"not logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
