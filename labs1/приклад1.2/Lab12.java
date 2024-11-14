class Num {
    int n;
    Num(int n) {
        this.n = n;
    }
}

public class Lab12 {
    public static void inc(Num num) {
        num.n++;
    }

    public static void main(String[] args) {
         Num obj = new Num(5);
         inc(obj);

         System.out.println("{ n : " + obj.n + " }");
    }

}