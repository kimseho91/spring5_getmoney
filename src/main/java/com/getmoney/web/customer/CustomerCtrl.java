package com.getmoney.web.customer;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.getmoney.web.customer.CustomerCtrl;
import com.getmoney.web.utl.Printer;
import com.getmoney.web.customer.Customer;
import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/customer")
@Log4j
public class CustomerCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CustomerCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Customer customer;
	@Autowired Printer printer;
	
	/**REST 방식*/
	
	@PostMapping("/")
	public Map<?,?> join(@RequestBody Customer param) {
/**		logger.info("AJAX가 보낸 아이디와 비번{}",param.getMid() +", "
					+param.getMpw()+", "+param.getMname()); */
		printer.accept("람다 프린터가 출력한 값"+param.getMid() +", "
					+param.getMpw()+", "+param.getMname());
		customer.setMid(param.getMid());
		customer.setMpw(param.getMpw());
		customer.setMname(param.getMname());
		customer.setEmail(param.getEmail());
		HashMap<String, Object> map2 = new HashMap<>();
		map2.put("mid", param.getMid());
		map2.put("mpw", param.getMpw());
		map2.put("mname", param.getMname());
		map2.put("email", param.getEmail());
		map2.put("phonenum", param.getPhonenum());
		map2.put("birth", param.getBirth());
		map2.put("tooja", param.getTooja());
		map2.put("registerDate", param.getRegister_date());
		map2.put("tier", param.getTier());
/**		logger.info("map2에 담긴 사용자 정보 {}",param.toString());*/
		return map2;
	}
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param){
		logger.info("로그인 AJAX가 보낸 아이디와 비번{}",param.getMid() +", "+param.getMpw());
		customer.setMid(param.getMid());
		customer.setMpw(param.getMpw());
		logger.info("바티스 가기전 cus에 담긴 사용자 정보 : {}",customer.getMid()+", "+customer.getMpw());
		logger.info("바티스 후 cus에 담긴 사용자 정보 : {}",customer.toString());
		return customer;
	}
}
