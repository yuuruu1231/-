public class Student {
    String name;
    double sum = 0;
    /*最小値 */
    public double min(double[] data){
        double min = data[0];
        for(int i = 1; i < data.length; i++ ){
            if( data[i] < min ){
                min = data[i];
            }
        }
        return min;
    }

    public double max(double[] data){
        double max = data[0];
        for(int i = 1; i < data.length; i++ ){
            if( data[i] > max ){
                max = data[i];
            }
        }
        return max;
    }
    
    public double sum(double[] data) {
        
        for(int i = 0; i < data.length; i++){
            sum += data[i];    
        }
        return sum;
    }

    public double calculateAvg(double[] data) {
        return sum(data)/data.length;
    }

    public String judge(double avg) {
        String result;
        if(avg >= 60) {
            result = "passed";
        }else {
            result = "failed";
        }
        return result;
    }

   
}
