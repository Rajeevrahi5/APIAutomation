package stepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.log4j.Logger;

/**
 * Created by Rajeev on 1/12/2020.
 * Email : rajeev.rahi32@gmail.com
 */
public class Hook {
    final static Logger logger = Logger.getLogger(Hook.class);


    @Before
    public void beforeScenario(Scenario scenario) {

        //Check if test type is selenium or Rest assured
        if(scenario.getName().contains("API Test")){
            logger.info("\n***************************************************************************************************\n\n" +
                    "         "+"Executing REST Scenario: "+scenario.getName() +"                                             \n+" +
                    "***************************************************************************************************\n\n");
        }

    }

    @After
    /**
     *
     * @param scenario to verify if scenarios has passed or failed
     */
    public void afterScenario(Scenario scenario) {

        if(scenario.getName().contains("API Test")){
            logger.info("\n***************************************************************************************************\n\n" +
                    "        "+"Exiting REST Scenario: "+scenario.getName()+"                                                    \n" +
                    "***************************************************************************************************\n\n");
        }

            // Here will compare if test is failing then only it will enter into if condition

            else if (scenario.isFailed()) {
                try {
                    logger.info("Scenario failed please check the step definition file of scenario: "+scenario.getName());
                } catch (Exception e) {
                    e.printStackTrace();
                }
        }
    }
}
