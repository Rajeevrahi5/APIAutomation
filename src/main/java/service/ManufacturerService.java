package service;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import utility.ManufacturerFileUtility;

import java.io.IOException;
import java.util.Properties;

import static io.restassured.RestAssured.given;

public class ManufacturerService {
    private final ManufacturerFileUtility fileUtility= new ManufacturerFileUtility();
    private final Properties props = new Properties();
    private static String ROOT_URL;
    private static String WAKEY;
    public ManufacturerService(){
        try {
            props.load(fileUtility.getFileFromResources("commons.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        WAKEY = props.getProperty("wa_key");
    }



    public Response getManufacturerCode(){

        Response response = given()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .log()
                .ifValidationFails()
                .param("wa_key",WAKEY)
                .get(ROOT_URL)
                .then()
                .extract()
                .response()
                ;

        return response;

    }
    public Response getManufacturerDetails(String manufacturerCode){

        Response response = given()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .log()
                .ifValidationFails()
                .param("manufacturer",manufacturerCode)
                .param("wa_key",WAKEY)
                .get(ROOT_URL)
                .then()
                .extract()
                .response()
                ;

        return response;

    }

    public Response getManufacturerDates(String manufacturerCode,String manufactureType){

        Response response = given()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .when()
                .log()
                .ifValidationFails()
                .param("manufacturer",manufacturerCode)
                .param("main-type",manufactureType)
                .param("wa_key",WAKEY)
                .get(ROOT_URL)
                .then()
                .extract()
                .response()
                ;

        return response;

    }
    public String getRootUrl(String serviceEndpoint) {
        ROOT_URL=props.getProperty("baseurl") + serviceEndpoint;
        return ROOT_URL;
    }
}
