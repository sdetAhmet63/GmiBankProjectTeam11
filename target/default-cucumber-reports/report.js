$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/creaeNewAccount.feature");
formatter.feature({
  "name": "User Create A New Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createNewAccount"
    }
  ]
});
formatter.background({
  "name": "User Goes Create New Account Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User goes login with Employee",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click  My Operations button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User select Manage Accounts button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click Create a new Account button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "User should create a description for the new account and it cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createNewAccount"
    },
    {
      "name": "@InDescription"
    }
  ]
});
formatter.step({
  "name": "User  dont send anything to Description box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User takes warning message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});