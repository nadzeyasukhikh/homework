package JavaHomeWork.Scanner;

import java.util.Scanner;

public class HomeWork1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Введите число: ");
        int number = sc.nextInt();

        sc.close();
        System.out.println("Десятичное: " + number);
        System.out.println("Восьмеричное: " + Integer.toOctalString(number));
        System.out.println("Двоичное: " + Integer.toBinaryString(number));
        System.out.println("Шестнадцатеричное: " + Integer.toHexString(number));
    }
}
