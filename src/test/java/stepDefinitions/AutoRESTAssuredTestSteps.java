package stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.apache.log4j.Logger;
import service.ManufacturerService;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;

public class AutoRESTAssuredTestSteps {
    ManufacturerService manufacturerService = new ManufacturerService();
    Response response;
    Logger logger = Logger.getLogger(AutoRESTAssuredTestSteps.class);

    @When("^user hits the Root URL with \"(.*?)\"$")
    public void hitURLWithManufacturerDetails(String manufacturerEndpoint) {
        try{
            manufacturerService.getRootUrl(manufacturerEndpoint);
            logger.info("\nURL: "+manufacturerService.getRootUrl(manufacturerEndpoint)+ " with manufacturer endpoint is launched.\n\n");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^Manufacturer Code with Name is listed and Status code is verified$")
    public void getManufacturerCodeAndVerifyStatus() {
        try{
            response = manufacturerService.getManufacturerCode();
            logger.info("Manufacturer List:\n"+response.getBody().prettyPrint());

            response.then().log().ifError().assertThat().statusCode(200);
            logger.info("\nStatus Code: 200 is verified.\n\n");

            assertThat(response.asString(),matchesJsonSchemaInClasspath("schemas/GetManufacturerList.json"));
            logger.info("\nThe Schema of Response is verified.\n\n");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^\"(.*?)\" is passed as parameter$")
    public void inputManufacturerCode(String manufacturerCode) {
        logger.info("\nManufacturer Code "+manufacturerCode +" is  passed: \n\n");
        try {
            response = manufacturerService.getManufacturerDetails(manufacturerCode);
            logger.info("\nManufacturer Details\n" + response.getBody().prettyPrint());
        }catch(Exception ex){
            ex.printStackTrace();
        }
    }

    @Then("^All the modals of manufacturer is listed and Status code is verified$")
    public void verifyManufacturerDetailsAndStatusCode(){
        try {
            response.then().log().ifError().assertThat().statusCode(200);
            logger.info("\nStatus Code: 200 is verified.\n\n");

            assertThat(response.asString(), matchesJsonSchemaInClasspath("schemas/GetManufacturerDetails.json"));
            logger.info("\nThe Schema of Response is verified.\n\n");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Then("^\"(.*?)\" and \"(.*?)\" are passed as parameters$")
    public void inputManufacturerCodeAndMainType(String manufacturerCode, String mainType) {
        try {
            logger.info("\nManufacturer Code: "+ manufacturerCode + " and Main Type: "+ mainType +" are  passed. \n\n");
            response = manufacturerService.getManufacturerDates(manufacturerCode,mainType);
            logger.info("\nManufacturer Dates:\n"+response.getBody().prettyPrint());
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Then("^All the built-year of the modal of car manufacturer is listed and Status code is verified$")
    public void verifyBuiltYearAndStatusCode()  {
        try {
            response.then().log().ifError().assertThat().statusCode(200);
            logger.info("\nStatus Code: 200 is verified.\n\n");

            assertThat(response.asString(), matchesJsonSchemaInClasspath("schemas/GetManufacturerDates.json"));
            logger.info("\nThe Schema of Response is verified.\n\n");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
