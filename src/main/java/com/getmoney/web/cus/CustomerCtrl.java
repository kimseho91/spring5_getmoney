package com.getmoney.web.cus;

import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.getmoney.web.utl.Printer;
import com.getmoney.web.cmm.IConsumer;
import com.getmoney.web.cmm.IFunction;
import com.getmoney.web.cus.Customer;
import com.getmoney.web.cus.CustomerCtrl;

import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/cus")
@Log4j
public class CustomerCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CustomerCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Customer customer;
	@Autowired Printer printer;
	@Autowired CustomerMapper customerMapper;
	
	@PostMapping("/")
	public String join(@RequestBody Customer param) {
		IConsumer<Customer> c = t -> customerMapper.insertCustomer(param);
		c.accept(param);
		return "SUCCESS";
	}

	@PostMapping("/{mid}")
	public Customer login(@PathVariable String mid, @RequestBody Customer param) {
		IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
		return f.apply(param);
	}

	@GetMapping("/{mid}")
	public Customer searchCustomerById(@PathVariable String mid, @RequestBody Customer param) {
		IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
		return f.apply(param);
	}

	@PutMapping("/{mid}")
	public String UpdateCustomer(@PathVariable String mid, @RequestBody Customer param) {
		IConsumer<Customer> c = t -> customerMapper.insertCustomer(param);
		return "SUCCESS";
	}

	@DeleteMapping("/{mid}")
	public String removeCustomer(@PathVariable String mid, @RequestBody Customer param) {
		IConsumer<Customer> c = t -> customerMapper.insertCustomer(param);
		return "SUCCESS";
	}
}
