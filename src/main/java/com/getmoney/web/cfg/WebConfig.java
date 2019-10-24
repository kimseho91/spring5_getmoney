package com.getmoney.web.cfg;

import org.springframework.web.servlet.support.
AbstractAnnotationConfigDispatcherServletInitializer;

import com.getmoney.web.cfg.RootConfig;
import com.getmoney.web.cfg.ServletConfig;

public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer{

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] {RootConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class[] {ServletConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}
}
