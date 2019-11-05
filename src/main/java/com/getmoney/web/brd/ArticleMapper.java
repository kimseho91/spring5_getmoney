package com.getmoney.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.getmoney.web.pxy.Proxy;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param); 
	public Article readArticle(Article param);
	public String countArticle();
	public List<Article> selectAll();
	public void updateArticle(Article param);
	public void deleteArticle(Article param);
	public List<Article> selectAll(Proxy param);
}
