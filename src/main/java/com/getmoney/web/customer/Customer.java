package com.getmoney.web.customer;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	private String mid,mpw,mname,email,phonenum,birth,tooja,register_date,tier;
}
