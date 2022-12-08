package test;


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;



class LeapYearTest {
	private static LeapYear leapYear;
	
	@BeforeAll
	static void beforesAll() {
		leapYear = new LeapYear();
	}

	@Test
	void test1() {
		boolean actual = leapYear.isLeapYear(2000);
		boolean expected = true;
		assertEquals(expected, actual);
	}
	
	@Test
	void test2() {
		boolean actual = leapYear.isLeapYear(1900);
		boolean expected = false;
		assertEquals(expected, actual);
	}
	
	@Test
	void test3() {
		boolean actual = leapYear.isLeapYear(1904);
		boolean expected = true;
		assertEquals(expected, actual);
	}

	@Test
	void test4() {
		boolean actual = leapYear.isLeapYear(2010);
		boolean expected = false;
		assertEquals(expected, actual);
	}
	
	@Test
	void test5() {
		boolean actual = leapYear.isLeapYear(2022);
		boolean expected = true;
		assertEquals(expected, actual);
	}
}
