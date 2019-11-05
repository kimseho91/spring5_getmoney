package com.getmoney.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.getmoney.web.brd.ArticleMapper;
import com.getmoney.web.cmm.ISupplier;
import com.getmoney.web.utl.Printer;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, startRow;
	private String search;
	private final int BLOCK_SIZE = 5;
	@Autowired Printer p;
	@Autowired ArticleMapper articleMapper;
	
	public void paging() {
		ISupplier<String> s = () -> articleMapper.countArticle();
		int totalCount = Integer.parseInt(s.get());
		int pageCount = 0;
		pageCount = (totalCount%5 ==0)?(totalCount/5) : (totalCount/5)+1;
		p.accept("페이지 카운터 테스트" +pageCount);
		
	}
	
	public List<?> crawl(Map<?,?> paramMap){
		String url = "http://"+paramMap.get("site")+"/";
		p.accept("넘어온 URL \n"+url);
		List<String> proxyList = new ArrayList<>();
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
			                                    .method(Connection.Method.GET)
			                                    .execute();
			Document document = response.parse();
			//String text = document.html();
			String text = document.text();
			p.accept("크롤링한 텍스트 \n"+text);
			proxyList.add(text);
			
		} catch (Exception e2) {
			e2.printStackTrace();
		}
		return proxyList;
	}
}
