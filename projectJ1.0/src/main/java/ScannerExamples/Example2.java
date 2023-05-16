package ScannerExamples;

import java.util.Scanner;

public class Example2 {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);

        System.out.print("Enter pls a radius: ");
        float radius = sc.nextFloat();



        sc.close();

        double result = Math.PI * Math.pow(radius, 2);
        System.out.println("Square is " + result);
    }
}
