package test;

public class LeapYear {

	
	public static void main(String[] args) {
	};

	public boolean isLeapYear(int y) {
		if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
			System.out.print("true");
			return true;
		} else {
			System.out.print("false");
			return false;
		}
	}
}
