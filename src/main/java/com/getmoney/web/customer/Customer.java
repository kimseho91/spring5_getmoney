package com.getmoney.web.customer;

import org.springframework.stereotype.Component;
import lombok.Data;

@Data 
@Component
public class Customer {
	private String mid,mpw,mname,email,phonenum,birth,tooja,register_date,tier;
}
