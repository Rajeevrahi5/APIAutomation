@APIRegression
Feature: API Automation With REST Assured

  Scenario Outline: API Test - Get Manufacturer List
    When user hits the Root URL with "<Manufacturer Endpoint>"
    Then Manufacturer Code with Name is listed and Status code is verified

    Examples:
    | Manufacturer Endpoint |
    | v1/car-types/manufacturer |


  Scenario Outline: API Test - Get main-types list for a manufacturer
    When user hits the Root URL with "<Main-types Endpoint>"
    Then "<Manufacturer Code>" is passed as parameter
    And All the modals of manufacturer is listed and Status code is verified

    Examples:
    | Main-types Endpoint |Manufacturer Code|
    | v1/car-types/main-types | 210|


  Scenario Outline: API Test - Get built-dates list of cars
    When user hits the Root URL with "<Built-dates Endpoint>"
    Then "<Manufacturer Code>" and "<Main Type>" are passed as parameters
    And All the built-year of the modal of car manufacturer is listed and Status code is verified

    Examples:
    | Built-dates Endpoint | Manufacturer Code | Main Type|
    | v1/car-types/built-dates |210 | Feroza |

