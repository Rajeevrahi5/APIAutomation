$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APITestAuto.feature");
formatter.feature({
  "line": 2,
  "name": "API Automation With REST Assured",
  "description": "",
  "id": "api-automation-with-rest-assured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@APIRegression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "API Test - Get Manufacturer List",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-manufacturer-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user hits the Root URL with \"\u003cManufacturer Endpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Manufacturer Code with Name is listed and Status code is verified",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-manufacturer-list;",
  "rows": [
    {
      "cells": [
        "Manufacturer Endpoint"
      ],
      "line": 9,
      "id": "api-automation-with-rest-assured;api-test---get-manufacturer-list;;1"
    },
    {
      "cells": [
        "v1/car-types/manufacturer"
      ],
      "line": 10,
      "id": "api-automation-with-rest-assured;api-test---get-manufacturer-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 52559497,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "API Test - Get Manufacturer List",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-manufacturer-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APIRegression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user hits the Root URL with \"v1/car-types/manufacturer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Manufacturer Code with Name is listed and Status code is verified",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/car-types/manufacturer",
      "offset": 29
    }
  ],
  "location": "AutoRESTAssuredTestSteps.hitURLWithManufacturerDetails(String)"
});
formatter.result({
  "duration": 95076935,
  "status": "passed"
});
formatter.match({
  "location": "AutoRESTAssuredTestSteps.getManufacturerCodeAndVerifyStatus()"
});
formatter.result({
  "duration": 1607108399,
  "status": "passed"
});
formatter.after({
  "duration": 375414,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "API Test - Get main-types list for a manufacturer",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-main-types-list-for-a-manufacturer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user hits the Root URL with \"\u003cMain-types Endpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "\"\u003cManufacturer Code\u003e\" is passed as parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "All the modals of manufacturer is listed and Status code is verified",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-main-types-list-for-a-manufacturer;",
  "rows": [
    {
      "cells": [
        "Main-types Endpoint",
        "Manufacturer Code"
      ],
      "line": 19,
      "id": "api-automation-with-rest-assured;api-test---get-main-types-list-for-a-manufacturer;;1"
    },
    {
      "cells": [
        "v1/car-types/main-types",
        "210"
      ],
      "line": 20,
      "id": "api-automation-with-rest-assured;api-test---get-main-types-list-for-a-manufacturer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 523778,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "API Test - Get main-types list for a manufacturer",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-main-types-list-for-a-manufacturer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APIRegression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user hits the Root URL with \"v1/car-types/main-types\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "\"210\" is passed as parameter",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "All the modals of manufacturer is listed and Status code is verified",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/car-types/main-types",
      "offset": 29
    }
  ],
  "location": "AutoRESTAssuredTestSteps.hitURLWithManufacturerDetails(String)"
});
formatter.result({
  "duration": 454319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "210",
      "offset": 1
    }
  ],
  "location": "AutoRESTAssuredTestSteps.inputManufacturerCode(String)"
});
formatter.result({
  "duration": 115723300,
  "status": "passed"
});
formatter.match({
  "location": "AutoRESTAssuredTestSteps.verifyManufacturerDetailsAndStatusCode()"
});
formatter.result({
  "duration": 5527096,
  "status": "passed"
});
formatter.after({
  "duration": 323430,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "API Test - Get built-dates list of cars",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-built-dates-list-of-cars",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user hits the Root URL with \"\u003cBuilt-dates Endpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "\"\u003cManufacturer Code\u003e\" and \"\u003cMain Type\u003e\" are passed as parameters",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "All the built-year of the modal of car manufacturer is listed and Status code is verified",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-built-dates-list-of-cars;",
  "rows": [
    {
      "cells": [
        "Built-dates Endpoint",
        "Manufacturer Code",
        "Main Type"
      ],
      "line": 29,
      "id": "api-automation-with-rest-assured;api-test---get-built-dates-list-of-cars;;1"
    },
    {
      "cells": [
        "v1/car-types/built-dates",
        "210",
        "Feroza"
      ],
      "line": 30,
      "id": "api-automation-with-rest-assured;api-test---get-built-dates-list-of-cars;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 438554,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "API Test - Get built-dates list of cars",
  "description": "",
  "id": "api-automation-with-rest-assured;api-test---get-built-dates-list-of-cars;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APIRegression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hits the Root URL with \"v1/car-types/built-dates\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "\"210\" and \"Feroza\" are passed as parameters",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "All the built-year of the modal of car manufacturer is listed and Status code is verified",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/car-types/built-dates",
      "offset": 29
    }
  ],
  "location": "AutoRESTAssuredTestSteps.hitURLWithManufacturerDetails(String)"
});
formatter.result({
  "duration": 640004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "210",
      "offset": 1
    },
    {
      "val": "Feroza",
      "offset": 11
    }
  ],
  "location": "AutoRESTAssuredTestSteps.inputManufacturerCodeAndMainType(String,String)"
});
formatter.result({
  "duration": 113064220,
  "status": "passed"
});
formatter.match({
  "location": "AutoRESTAssuredTestSteps.verifyBuiltYearAndStatusCode()"
});
formatter.result({
  "duration": 6102933,
  "status": "passed"
});
formatter.after({
  "duration": 351075,
  "status": "passed"
});
});