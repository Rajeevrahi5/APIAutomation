@APIRegression
Feature: API Automation With REST Assured

  Scenario Outline: API Test - Get Manufacturer List
    When user hits the Root URL with "<Manufacturer Endpoint>"
    Then Manufacturer Code with Name is listed and Status code is verified

    Examples:
    | Manufacturer Endpoint |
    | Enter First Endpoint here |


  Scenario Outline: API Test - Get main-types list for a manufacturer
    When user hits the Root URL with "<Main-types Endpoint>"
    Then "<Manufacturer Code>" is passed as parameter
    And All the modals of manufacturer is listed and Status code is verified

    Examples:
    | Main-types Endpoint |Manufacturer Code|
    | Enter 2nd Endpoint here | Enter Manufacturer code you get from first endpoint|


  Scenario Outline: API Test - Get built-dates list of cars
    When user hits the Root URL with "<Built-dates Endpoint>"
    Then "<Manufacturer Code>" and "<Main Type>" are passed as parameters
    And All the built-year of the modal of car manufacturer is listed and Status code is verified

    Examples:
    | Built-dates Endpoint | Manufacturer Code | Main Type|
    | Enter 3rd Endpoint here |Enter any Manufacturer code you get from first endpoint | Enter Model Name you get from 2nd endpoint |

