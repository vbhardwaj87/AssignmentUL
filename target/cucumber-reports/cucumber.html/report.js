$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/triangletests.feature");
formatter.feature({
  "name": "Validation of type of triangle returned when sides are input",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle \u003csides\u003e length are input",
  "keyword": "Given "
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.step({
  "name": "triangle \u003ctype\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sides",
        "type"
      ]
    },
    {
      "cells": [
        "4,4,4",
        "Equilateral Triangle"
      ]
    },
    {
      "cells": [
        "5,5,2",
        "Isosceles Triangle"
      ]
    },
    {
      "cells": [
        "8,3,9",
        "Scalene Triangle"
      ]
    },
    {
      "cells": [
        "9,6,4",
        "Scalene Triangle"
      ]
    },
    {
      "cells": [
        "9,9,4",
        "Isosceles Triangle"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 4,4,4 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleIsValid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Equilateral Triangle is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 5,5,2 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleIsValid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Isosceles Triangle is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 8,3,9 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleIsValid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Scalene Triangle is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 9,6,4 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleIsValid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Scalene Triangle is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify triangle type is returned",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 9,9,4 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle is valid",
  "keyword": "And "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleIsValid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Isosceles Triangle is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate error type is returned on non zero inputs",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle \u003csides\u003e length are input",
  "keyword": "Given "
});
formatter.step({
  "name": "triangle \u003ctype\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sides",
        "type"
      ]
    },
    {
      "cells": [
        "4,4,0",
        "Error"
      ]
    },
    {
      "cells": [
        "5,0,0",
        "Error"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate error type is returned on non zero inputs",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 4,4,0 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Error is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error type is returned on non zero inputs",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "triangle 5,0,0 length are input",
  "keyword": "Given "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleSidesLengthAreInput(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "triangle Error is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "TriangleTestsStepDef.triangleTypeIsReturned(String)"
});
formatter.result({
  "status": "passed"
});
});