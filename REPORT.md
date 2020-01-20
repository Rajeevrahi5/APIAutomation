#Report Findings
**1. wa_key should not be passed in parameter.**

* As wa_key is sensitive information so it can be CASHED as it will reflect in the URL*

* Further it can be Bookmarkable and searchable hence will lead to security issues.*  

**2. Endpoint-2: /v1/car-types/main-types**
* If user passes the wrong manufacturer id, it returns empty object, instead it should throw some relevant message that Manufacturer Id is not available in the list or so...*
* Here we pass *wa_key* and manufacturer id in parameter, It is again not secure and prone to risk.*
* we should instead pass these sensitive information to POST method.*

**3. Endpoint-3: /v1/car-types/built-dates**
* If user passes one of the wrong input, it returns empty object, instead it should throw some relevant message that check your input or something like that...*
* Here we pass *wa_key* and manufacturer id and main-type in parameter, It is again not secure and prone to risk.*
* we should instead pass these sensitive information to POST method.*

****