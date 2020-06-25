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
});