package com.getmoney.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article param); 
	public Article readArticle(Article param);
	public String countArticle();
	public List<Article> selectAll();
	public void updateArticle(Article param);
	public void deleteArticle(Article param);
}
