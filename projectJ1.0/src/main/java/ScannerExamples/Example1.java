package ScannerExamples;

import java.util.Scanner;

public class Example1 {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

        System.out.println("Enter pls 3 number (day, month, year");

        System.out.print("Day: ");
        int day = sc.nextInt();


        System.out.print("Month: ");
        int month = sc.nextInt();


        System.out.print("Year: ");
        int year = sc.nextInt();



       sc.close();

        System.out.println("Yore date is " + day + "." + month + "." + year);
    }
}
