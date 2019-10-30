package com.getmoney.web.adm;

import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {
	public void registerAdmin(Admin param);
	public Admin accessAnum(Admin param);
	public Admin selectAdminAnum(Admin param);
}
