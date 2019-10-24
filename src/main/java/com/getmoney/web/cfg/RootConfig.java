package com.getmoney.web.cfg;

import javax.sql.DataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages= {"com.getmoney.web"})
@ComponentScan(basePackages= {"com.getmoney.web"})
public class RootConfig {
	
	@Bean
	public DataSource dataSource() {
		HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/getmoney?serverTimezone=UTC");
		hikariConfig.setUsername("getmoney");
		hikariConfig.setPassword("getmoney");
		
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);

/**		  DriverManagerDataSource dataSource = new DriverManagerDataSource();
		    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		    dataSource.setUrl("jdbc:mysql://localhost:3306/getmoney?serverTimezone=UTC");
		    dataSource.setUsername("getmoney");
		    dataSource.setPassword("getmoney");
*/
		
		return dataSource;
	}	
	
}
