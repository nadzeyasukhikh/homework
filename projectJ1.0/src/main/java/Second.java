import com.auto.finland.Car;

public class Second {
    public static void main(String[] args) {

      System.out.println(Car.histYear);
      System.out.println();


      Car finlandCar = new Car();
        System.out.println(finlandCar.year);
        System.out.println(finlandCar.power);
        System.out.println(finlandCar.fabric);
      System.out.println(Car.histYear);
       finlandCar.printParameters();

      Car.histYear = 2003;



        System.out.println();


       //экземпляр номер 2
        Car finlandCar2 = new Car();
        finlandCar2.printParameters();

        finlandCar2.year = 2022;
        finlandCar2.power =190;
        finlandCar2.fabric = "bmw";

        System.out.println(finlandCar2.year);
        System.out.println(finlandCar2.power);
        System.out.println(finlandCar2.fabric);

      System.out.println(Car.histYear);
      finlandCar2.printParameters();


    }
}
