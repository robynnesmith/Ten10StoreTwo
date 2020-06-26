$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/signin.feature");
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
  "name": "the user is on the \"address\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
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
  "name": "the user is on the \"information\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDef.theUserIsOnPage(java.lang.String)"
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