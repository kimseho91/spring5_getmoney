package com.getmoney.web.lambda;

import com.getmoney.web.cus.Customer;

public class GenericTest {
	static class Box<T>{
		T item;
		void setItem(T item) {this.item = item;}
		T getItem() {return item;}
	}
	public static void main(String[] args) {
		GenericTest s = new GenericTest();
		GenericTest.Box<String> s2 = new GenericTest.Box<>();
		GenericTest.Box<Integer> s3 = new GenericTest.Box<>();
		GenericTest.Box<Customer> cbox = new GenericTest.Box<>();
	}
}

