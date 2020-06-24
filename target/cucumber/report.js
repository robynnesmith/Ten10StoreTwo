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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.cssSelector: .btn.btn-primary.add-to-cart (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:27)\r\n\tat pageObjects.HomePage.addItemToCart(HomePage.java:80)\r\n\tat stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(BuyJourneyStepDef.java:72)\r\n\tat ✽.the user adds \"first item\" to cart by hovering over it(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/buyjourney.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: .btn.btn-primary.add-to-cart\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:27)\r\n\tat pageObjects.HomePage.addItemToCart(HomePage.java:80)\r\n\tat stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(BuyJourneyStepDef.java:72)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div.products \u003e article:nth-child(3) img\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\n*** Element info: {Using\u003dcss selector, value\u003ddiv.products \u003e article:nth-child(3) img}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:450)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat pageObjects.HomePage.hoverOverThirdItem(HomePage.java:148)\r\n\tat stepdefs.BuyJourneyStepDef.theUserAddsToCartByHoveringOverIt(BuyJourneyStepDef.java:75)\r\n\tat ✽.the user adds \"second item\" to cart by hovering over it(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/buyjourney.feature:55)\r\n",
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: .no-items (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:46)\r\n\tat pageObjects.ShoppingCartPage.checkItemRemovedFromBasket(ShoppingCartPage.java:49)\r\n\tat stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated(ShoppingCartStepDef.java:42)\r\n\tat ✽.pricing \u0026 totals should be updated(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: .no-items\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.waitUntilVisible(BasePage.java:46)\r\n\tat pageObjects.ShoppingCartPage.checkItemRemovedFromBasket(ShoppingCartPage.java:49)\r\n\tat stepdefs.ShoppingCartStepDef.pricingAndTotalsUpdated(ShoppingCartStepDef.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
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
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.cssSelector: .btn.btn-primary.add-to-cart (tried for 20 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:27)\r\n\tat pageObjects.HomePage.addItemToCart(HomePage.java:80)\r\n\tat pageObjects.HomePage.itemAddedToCart(HomePage.java:92)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:71)\r\n\tat ✽.the user is \"not logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:22)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: .btn.btn-primary.add-to-cart\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:27)\r\n\tat pageObjects.HomePage.addItemToCart(HomePage.java:80)\r\n\tat pageObjects.HomePage.itemAddedToCart(HomePage.java:92)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:71)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
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
  "name": "the user proceeds to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserProceedsToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the sign-in displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theSignInDisplayed()"
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
  "name": "Proceed to checkout and buy item while logged in",
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
  "name": "the user is \"logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://3.11.70.191/index.php?controller\u003dmy-account\" title\u003d\"Log in to your customer account\" rel\u003d\"nofollow\"\u003e...\u003c/a\u003e is not clickable at point (1023, 11). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.navigateToSignInPage(HomePage.java:53)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:75)\r\n\tat ✽.the user is \"logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:29)\r\n",
  "status": "failed"
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
  "name": "the user proceeds to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserProceedsToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fills in form",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.fillsInForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the order confirmation displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theOrderConfirmationDisplayed()"
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
  "name": "Make invoice address different to delivery address",
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
  "name": "the user is \"logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://3.11.70.191/index.php?controller\u003dmy-account\" title\u003d\"Log in to your customer account\" rel\u003d\"nofollow\"\u003e...\u003c/a\u003e is not clickable at point (1023, 11). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.navigateToSignInPage(HomePage.java:53)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:75)\r\n\tat ✽.the user is \"logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:46)\r\n",
  "status": "failed"
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
  "name": "the user changes their invoice address on checkout",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserChangesTheirInvoiceAddressOnCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the shipping method should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theShippingMethodShouldBeDisplayed()"
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
  "name": "Add a comment to your order",
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
  "name": "the user is \"logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://3.11.70.191/index.php?controller\u003dmy-account\" title\u003d\"Log in to your customer account\" rel\u003d\"nofollow\"\u003e...\u003c/a\u003e is not clickable at point (1023, 11). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.navigateToSignInPage(HomePage.java:53)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:75)\r\n\tat ✽.the user is \"logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:59)\r\n",
  "status": "failed"
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
  "name": "the user writes a comment in shipping method in checkout form",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.userWritesACommentInShippingMethodInCheckoutForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the comment is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theCommentIsAdded()"
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
  "name": "Proceed to checkout and logout",
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
  "name": "the user is \"logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://3.11.70.191/index.php?controller\u003dmy-account\" title\u003d\"Log in to your customer account\" rel\u003d\"nofollow\"\u003e...\u003c/a\u003e is not clickable at point (1023, 11). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.navigateToSignInPage(HomePage.java:53)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:75)\r\n\tat ✽.the user is \"logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:66)\r\n",
  "status": "failed"
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
  "name": "the user signs out from checkout page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserSignsOutFromCheckoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the cart is empty if user logs back on",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theCartIsEmptyIfUserLogsBackOn()"
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
  "name": "Add new address",
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
  "name": "the user is \"logged in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://3.11.70.191/index.php?controller\u003dmy-account\" title\u003d\"Log in to your customer account\" rel\u003d\"nofollow\"\u003e...\u003c/a\u003e is not clickable at point (1023, 11). Other element would receive the click: \u003cdiv id\u003d\"blockcart-modal\" class\u003d\"modal fade in\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.BasePage.waitAndClick(BasePage.java:28)\r\n\tat pageObjects.HomePage.navigateToSignInPage(HomePage.java:53)\r\n\tat stepdefs.ShoppingCartStepDef.theUserIsNotLoggedIn(ShoppingCartStepDef.java:75)\r\n\tat ✽.the user is \"logged in\"(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/shoppingcart.feature:73)\r\n",
  "status": "failed"
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
  "name": "the user has at least 1 saved address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserHasAtLeastSavedAddress(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user adds new address to checkout form",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theUserAddsNewAddressToCheckoutForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the new address is saved",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ShoppingCartStepDef.theNewAddressIsSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/signin.feature");
formatter.feature({
  "name": "Sign In",
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
  "name": "User signs in using a registered email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"registered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersPassword(java.lang.String)"
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
  "name": "User signs in using an unregistered email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"unregistered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid email\" alert is displayed",
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
  "name": "User enters registered email to recover password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"forgotten password\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"registered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks retrieve password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.clicksRetrievePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid recovery email\" alert is displayed",
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
  "name": "User can sign out",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is signed in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.theUserIsSignedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign out",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.theUserClicksSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"signed out\" is displayed",
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
  "name": "User enters an invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"sign in\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"registered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid password\" alert is displayed",
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
  "name": "User enters new address on the accounts page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is signed in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.theUserIsSignedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on the \"addresses\" page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.onTheAddressesPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds a new address",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.theUserAddsANewAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"new address\" is displayed",
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
  "name": "User enters an unregistered email to recover password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is on the \"forgotten password\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"unregistered\" email",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userEntersEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks retrieve password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.clicksRetrievePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"recovery email\" is displayed",
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
  "name": "User logs in and updates password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is signed in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.theUserIsSignedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on the \"information\" page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.onTheAddressesPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SignInStepDef.userUpdatesPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the successfully submitted message for \"new password\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Information successfully updated.\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027T10-LT-1524\u0027, ip: \u002710.0.0.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\ADAM~1.WRE\\AppData\\Local\\Temp\\scoped_dir13344_215007982}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57735}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7ab407e007e1c7e4d5f3c84daf7e29cc\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Information successfully updated.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:458)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat pageObjects.SignInPage.passwordUpdatedSuccessfully(SignInPage.java:169)\r\n\tat stepdefs.CommonStepDef.theSuccessfullySubmittedMessageIsDisplayed(CommonStepDef.java:97)\r\n\tat ✽.the successfully submitted message for \"new password\" is displayed(file:///C:/Users/adam.wren/Desktop/Ten10StoreTwo/src/test/resources/features/signin.feature:51)\r\n",
  "status": "failed"
});
});