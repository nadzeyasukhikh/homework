package NumericalSystems;

public class HexExamples {
    public static void main(String[] args) {
        // bolee dolgii pyt

        int q = 542;
        System.out.println(q / 16);
        System.out.println(q % 16);

        System.out.println(33 / 16);
        System.out.println(33 % 16);

        System.out.println(2 / 16);
        System.out.println(2 % 16);
        int q16 = 0x21e;
        //          210

        // bolee korotkiy

        System.out.println(Integer.toHexString(q));


        // bolee dolg pyt 16 ->10
        double result = 2 * Math.pow(16,2) + 1 * Math.pow(16,1) + 14 * Math.pow(16,0);
        System.out.println(result);
        //korotkiy pyt

        System.out.println(q16);

    }
}
