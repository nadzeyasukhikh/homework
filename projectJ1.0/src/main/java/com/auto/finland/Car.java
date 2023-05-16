package com.auto.finland;

public class Car {
// power -число(double/float)
// year - число (int)
 // fabric -текст (String)

    //переменные экземпляра класса

  public double power;
  public int year = 2021;
   public String fabric = "audi";

    // Статическая переменная
public static int histYear = 1993;

public void printParameters() {




    //Пример локальной переменной

    String result = "Our auto is " + fabric + ", year = " + year;
    System.out.println(result);

}




}
