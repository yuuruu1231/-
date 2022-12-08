
public class Lesson {
    public static void main (String[] args) {
        
        Student a = new Student();
        a.name = "sato";
        double[] data = {70, 65, 50, 90, 30};
        
        double avg = a.calculateAvg(data);
        String result = a.judge(avg);
        double sum = a.sum(data);
        double max = a.max(data);
        double min = a.min(data);


        System.out.println(a.name + " " + result);
        System.out.println( "合計" + sum);
        System.out.println( "平均値" + avg);
        System.out.println( " 最大値 " + max);
        System.out.println( " 最小値 " + min);

    }
}