package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;	

@RunWith(Cucumber.class)
@CucumberOptions(features="E:\\GmailTest\\src\\main\\java\\feature\\Inbox.feature"
,glue={"stepdefinition"},
dryRun=false,
monochrome=true,
format={"pretty", "html:test-output"}
)

public class Runner {

}
