package Steps;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.sl.In;
import org.junit.Assert;

public class TriangleTestsStepDef {
    protected int A;
    protected int B;
    protected int C;

    @Given("triangle (.*) length are input")
    public void triangleSidesLengthAreInput(String data) {
        String[] input = data.split(",");
        try {
            A = Integer.parseInt(input[0]);
            B = Integer.parseInt(input[1]);
            C = Integer.parseInt(input[2]);
        } catch (Exception e) {
            System.out.print("An Error occured while parsing the input");
            e.printStackTrace();
        }finally {
            System.out.println("Calculated values from the String");
        }

    }

    @And("triangle is valid")
    public void triangleIsValid() {

        Assert.assertFalse(A >= (B + C) || C >= (B + A) || B >= (A + C));
        System.out.println("Triangle is valid");

    }

    @Then("triangle (.*) is returned")
    public void triangleTypeIsReturned(String triangleType) {

        Assert.assertEquals(triangleType,getTriangleName(returnTriangleType(A,B,C)));
    }

    public static Integer returnTriangleType(int a, int b, int c) {
        int triangleType;
        if (a <= 0 || b <= 0 || c <= 0) {
            System.out.println("Error");
            return 4;
        } else if (a == b && b == c) {
            System.out.println("Equilateral Triangle");
            return 3;
        } else if (a != b && b != c && c != a) {
            System.out.println("Scalene Triangle");
            return 1;
        } else if (a == b || c == a || c == b)
            System.out.println("Isosceles Triangle");
        return 2;

    }

    public static String getTriangleName(int value) {
        String type;

        switch (value) {
            case 1:
                type = "Scalene Triangle";
            break;
            case 2:
                type = "Isosceles Triangle";
            break;
            case 3:
                type = "Equilateral Triangle";
            break;
            case 4:
                type = "Error";
            break;

            default:
                throw new IllegalStateException("Unexpected value: " + value);
        }
        return type;

    }
}
