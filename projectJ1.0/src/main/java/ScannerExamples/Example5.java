package ScannerExamples;

import java.util.Scanner;

public class Example5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("age: ");
        int age = sc.nextInt();

        sc.nextLine();

        System.out.print("country: ");
        String country = sc.nextLine();

        System.out.print("Name: ");
        String name = sc.next();


        sc.close();


        System.out.println("Person name is " + name + ", country is " + country + ", age = " + age);
    }
}
