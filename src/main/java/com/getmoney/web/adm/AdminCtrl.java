package com.getmoney.web.adm;

import java.util.List;
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

import com.getmoney.web.brd.ArticleCtrl;
import com.getmoney.web.cmm.IConsumer;
import com.getmoney.web.cmm.IFunction;
import com.getmoney.web.cmm.ISupplier;
import com.getmoney.web.utl.Printer;

@RestController
@RequestMapping("/admins")
public class AdminCtrl {
	private static final Logger logger = LoggerFactory.getLogger(AdminCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired Printer printer;
	@Autowired Admin admin;
	@Autowired AdminMapper adminMapper;
	
	
	
	@PostMapping("/")
	public Map<?,?> register(@RequestBody Admin param){
		IConsumer<Admin> c = t -> adminMapper.registerAdmin(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@GetMapping("/{anum}")
	public Admin serachAdmin(@PathVariable Admin param) {
		IFunction<Admin, Admin> f = t -> adminMapper.selectAdminAnum(param);
		return f.apply(param);
	}
	
	@PostMapping("/{anum}/acees")
	public  Map<?,?> accesAnum(@PathVariable String anum, @RequestBody Admin param) {
		IFunction<Admin, Admin> f = t -> adminMapper.accessAnum(param);
		map.clear();
		map.put("msg", (f.apply(param)!= null) ? "SUCCESS" : "FAIL");
		return map;
	}
	
	@PutMapping("/{anum}")
	public Map<?,?> updateAdmin(@PathVariable String anum, @RequestBody Admin param){
		return map;
	}
	
	@DeleteMapping("/{anum}")
	public Map<?,?> removeAdmin(@PathVariable String anum, @RequestBody Admin param){
		return map;
	}
}
