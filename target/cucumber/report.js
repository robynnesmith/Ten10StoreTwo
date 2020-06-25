$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/signin.feature");
formatter.feature({
  "name": "Sign In",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
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
  "status": "passed"
});
});