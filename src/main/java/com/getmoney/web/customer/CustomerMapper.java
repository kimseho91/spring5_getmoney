package com.getmoney.web.customer;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer customer);
	public Customer selectByIdPw(Customer customer);
}
