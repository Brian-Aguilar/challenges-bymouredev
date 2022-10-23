public class index {
    public static void main(String[] args) {
        for (int i = 0; i <= 100; i++) {
            FizzBuzz(i);
        }
    }

    private static void FizzBuzz(Integer numero) {
        String temp = "";
        if (numero % 3 == 0) temp += "fizz";
        if (numero % 5 == 0) temp += "buzz";

        System.out.println(temp == "" ? numero : temp);
    }
}