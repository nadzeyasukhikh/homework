public class SimpleMathOperations {
    public static void main(String[] args) {
        //примитивные значения (примитивы)
        //логическая переменная
        boolean freeTime = true;
       // System.out.println(freeTime);

        //целочисленные переменные
        byte q = 10;
        short w = 23000;// или 23_000;
        int e = -1000000;// 1_000_000;
        long r = -10000000000L;
       // System.out.println(e);


        //чиса с плавающей запятой (дробные значения)
        float t = 3.14F;
        double y = 2.71;
       // System.out.println(t);
        //символы

        char u = 'q';

       // System.out.println(u);

       // базовые математические операции

        System.out.println(q + w);
        System.out.println(q -w);
        System.out.println(q * w);
        System.out.println(q / w);
        System.out.println(w / q);

        System.out.println(q % 2);

        //диапазоны

        System.out.println(Byte.MIN_VALUE + " " + Byte.MAX_VALUE);
        System.out.println(Short.MIN_VALUE + " " + Short.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE + " " + Integer.MAX_VALUE);
        System.out.println(Integer.MAX_VALUE + 1);
    }
}
