package ScannerExamples;

import java.util.Scanner;

public class Example4 {
    public static void main(String[] args) {
        System.out.println("Enter pls your full name: ");

        Scanner sc = new Scanner(System.in);
        String fullName = sc.nextLine();

        sc.close();

        System.out.print("hello " + fullName);
    }
}
