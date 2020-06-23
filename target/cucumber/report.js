$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/buyjourney.feature");
formatter.feature({
  "name": "Buy Journey",
  "description": "",
  "keyword": "Feature"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds item to cart by hovering over it",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserAddsItemToCartByHoveringOverIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"added to cart\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
<<<<<<< HEAD
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cimg src\u003d\"http://3.11.70.191/img/p/7/7-home_default.jpg\" alt\u003d\"Blouse\" data-full-size-image-url\u003d\"http://3.11.70.191/img/p/7/7-large_default.jpg\"\u003e is not clickable at point (812, 704). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0949\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\ZAKWAN~1.NOO\\AppData\\Local\\Temp\\scoped_dir27300_94458046}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60732}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue}]\nSession ID: b45e38553a6412a3ce0aacfc893a98d6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.ProductPage.navigatetoProductPage(ProductPage.java:33)\r\n\tat stepdefs.BuyJourneyStepDef.theUserIsOnThePage(BuyJourneyStepDef.java:27)\r\n\tat ✽.the user is on the \"product\" page(file:///C:/Users/zakwan.noor/IdeaProjects/Ten10StoreTwo2/src/test/resources/features/buyjourney.feature:15)\r\n",
=======
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cimg src\u003d\"http://3.11.70.191/img/p/7/7-home_default.jpg\" alt\u003d\"Blouse\" data-full-size-image-url\u003d\"http://3.11.70.191/img/p/7/7-large_default.jpg\"\u003e is not clickable at point (492, 440). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-1057\u0027, ip: \u0027172.29.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\DINAH~1.HUN\\AppData\\Local\\Temp\\scoped_dir10132_1053201245}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57992}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f2dd9b742be79d11f213fc163b4454eb\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.ProductPage.navigatetoProductPage(ProductPage.java:33)\r\n\tat stepdefs.BuyJourneyStepDef.theUserIsOnThePage(BuyJourneyStepDef.java:27)\r\n\tat ✽.the user is on the \"product\" page(file:///C:/Users/Dinah.hunde/Documents/Ten10%20Store/src/test/resources/features/buyjourney.feature:15)\r\n",
>>>>>>> b26c8274a40c791ca60a4f6f18f8bba9a3d83b9d
  "status": "failed"
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
  "location": "stepdefs.BuyJourneyStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
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
  "location": "stepdefs.BuyJourneyStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
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
formatter.scenario({
  "name": "Register user with already Registered Email Address.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create an account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the form with an already \"registered\" email address",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "an error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.errorMessageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "New user is able to register.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create an account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user completes the form with an \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.unregisteredEmailAddress()"
});
formatter.result({
<<<<<<< HEAD
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.name: firstname (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:41)\r\n\tat pageObjects.CreateNewAccountPage.enterPersonalDetails(CreateNewAccountPage.java:24)\r\n\tat stepdefs.RegistrationStepDef.unregisteredEmailAddress(RegistrationStepDef.java:41)\r\n\tat ✽.the user completes the form with an \"unregistered\" email address(file:///C:/Users/zakwan.noor/IdeaProjects/Ten10StoreTwo2/src/test/resources/features/registration.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.name: firstname\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-0949\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:41)\r\n\tat pageObjects.CreateNewAccountPage.enterPersonalDetails(CreateNewAccountPage.java:24)\r\n\tat stepdefs.RegistrationStepDef.unregisteredEmailAddress(RegistrationStepDef.java:41)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
=======
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.name: firstname (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:41)\r\n\tat pageObjects.CreateNewAccountPage.enterPersonalDetails(CreateNewAccountPage.java:24)\r\n\tat stepdefs.RegistrationStepDef.unregisteredEmailAddress(RegistrationStepDef.java:41)\r\n\tat ✽.the user completes the form with an \"unregistered\" email address(file:///C:/Users/Dinah.hunde/Documents/Ten10%20Store/src/test/resources/features/registration.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.name: firstname\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-ACA-1057\u0027, ip: \u0027172.29.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.findAndType(BasePage.java:41)\r\n\tat pageObjects.CreateNewAccountPage.enterPersonalDetails(CreateNewAccountPage.java:24)\r\n\tat stepdefs.RegistrationStepDef.unregisteredEmailAddress(RegistrationStepDef.java:41)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
>>>>>>> b26c8274a40c791ca60a4f6f18f8bba9a3d83b9d
  "status": "failed"
});
formatter.step({
  "name": "the \"my account\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.myAccountPageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Numeric values are entered into the name field.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create an account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters an \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user enters numeric values into the name field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.numericValuesEnteredIntoNameField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an invalid name error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.invalidNameAlert()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "An invalid Date of Birth is entered.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"create new account\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters an \"unregistered\" email address",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user enters an invalid date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.invalidDateOfBirth()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an invalid date of birth error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegistrationStepDef.invalidDateOfBirthAlert()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/shoppingcart.feature");
formatter.feature({
  "name": "Shopping Cart",
  "description": "",
  "keyword": "Feature"
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
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"the user is on the \"shopping cart\" page\" matches more than one step definition:\n  \"^the user is on the \"([^\"]*)\" page$\" in stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)\n  \"^the user is on the \"shopping cart\" page$\" in stepdefs.ShoppingCartStepDef.userOnShoppingCartPage()\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "the user has \"1 item\" in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userHasItemInBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the item is deleted",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemDeletedFromBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the item should be removed",
<<<<<<< HEAD
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "pricing \u0026 totals should be updated",
  "keyword": "Then "
=======
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.itemShouldBeRemoved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pricing \u0026 totals should be updated",
  "keyword": "And "
>>>>>>> b26c8274a40c791ca60a4f6f18f8bba9a3d83b9d
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"the user is on the \"shopping cart\" page\" matches more than one step definition:\n  \"^the user is on the \"([^\"]*)\" page$\" in stepdefs.BuyJourneyStepDef.theUserIsOnThePage(java.lang.String)\n  \"^the user is on the \"shopping cart\" page$\" in stepdefs.ShoppingCartStepDef.userOnShoppingCartPage()\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "the user has \"1 item\" in their basket",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userHasItemInBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user increases quantity of item",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "basket is updated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "product counter is updated",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "pricing \u0026 totals should be updated",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Proceed to checkout not logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"\"shopping cart\"\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is not logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"\"1 item\"\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user proceeds to checkout",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "sign-in displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Proceed to checkout and buy the item while logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"\"shopping cart\"\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"\"1 item\"\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user proceeds to checkout",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "fills in form",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "order confirmation displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Make invoice address different to delivery address",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"1 item\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user changes invoice address on checkout",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "shipping method should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Multiple items in shopping cart displayed correctly",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"2 items\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "all items are displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "product counter \u0026 prices are correct",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Add a comment to your order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"1 item\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user writes in shipping method in checkout form",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "comment is added",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Proceed to checkout and logout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"shopping cart\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"1 item\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user signs out from checkout page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "cart is empty if user logs back on",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Add new address",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the \"\"shopping cart\"\" page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has \"\"1 item\"\" in basket",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user has at least 1 saved address",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user adds new address to checkout form",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "new address is saved",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});