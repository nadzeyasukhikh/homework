package NumericalSystems;

public class BinaryExample2 {
    public static void main(String[] args) {
        // byte лежит [ -128;127],либо [0;255]
        System.out.println(Byte.MIN_VALUE + " " + Byte.MAX_VALUE);

        int test1 = 0b00000000;
        int test2 = 0b11111111;
        System.out.println(test1);
        System.out.println(test2);
    }
}
