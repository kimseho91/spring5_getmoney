package com.getmoney.web.adm;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
	private String aid, apw, aname, anum, arank, email, phonenum;
	
}
