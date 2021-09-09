Feature: Validation of type of triangle returned when sides are input

  Scenario Outline: Verify triangle type is returned
    Given triangle <sides> length are input
    And triangle is valid
    Then triangle <type> is returned
    Examples:
      | sides | type                 |
      | 4,4,4 | Equilateral Triangle |
      | 5,5,2 | Isosceles Triangle   |
      | 8,3,9 | Scalene Triangle     |
      | 9,6,4 | Scalene Triangle     |
      | 9,9,4 | Isosceles Triangle   |

  Scenario Outline: Validate error type is returned on non zero inputs
    Given triangle <sides> length are input
    Then triangle <type> is returned
    Examples:
      | sides | type  |
      | 4,4,0 | Error |
      | 5,0,0 | Error |











