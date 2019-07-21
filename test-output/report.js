$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/GmailTest/src/main/java/feature/Inbox.feature");
formatter.feature({
  "line": 1,
  "name": "Inbox",
  "description": "",
  "id": "inbox",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Inbox Check",
  "description": "",
  "id": "inbox;inbox-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in gmail home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I check my inbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should see 5 messages",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});