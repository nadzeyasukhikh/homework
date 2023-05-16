package NumericalSystems;

public class OctalExamples {
    public static void main(String[] args) {
        int q =  542;
        //более долгий путь
        System.out.println(q / 8); // 67
        System.out.println(q % 8);         // 6

        System.out.println(67 / 8); // 8
        System.out.println(67 % 8);        //3

        System.out.println(8 / 8); //1
        System.out.println(8 % 8);        // 0

        System.out.println(1 / 8); // 0
        System.out.println(1 % 8);       // 1

        //более короткий путь

        System.out.println(Integer.toOctalString(542));
//самый простой способ конвертации в 10ю систему
        int q8 = 01036;
        System.out.println(q8);

        // более длинный способ
        double result1 = 1 * Math.pow(8,3) + 0 * Math.pow(8,2) + 3 * Math.pow(8,1) + 6 * Math.pow(8,0);
        System.out.println(result1);

    }
}
