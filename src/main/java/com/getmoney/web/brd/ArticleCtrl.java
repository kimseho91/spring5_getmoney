package com.getmoney.web.brd;

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

import com.getmoney.web.cmm.IConsumer;
import com.getmoney.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Printer printer;
	@Autowired Article art;
	@Autowired ArticleMapper articleMapper;
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		param.setBrdtype("게시판");
		IConsumer<Article> c = t -> articleMapper.insertArticle(param);
			c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@GetMapping("/{artseq}")
	public Article readArticle(@PathVariable String artseq, @RequestBody Article param){
		return null;
	}
	
	@PutMapping("/{artseq}")
	public Article update(@PathVariable String artseq, @RequestBody Article param){
		return null;
	}
	
	@DeleteMapping("/{artseq}")
	public Map<?,?> removeArticle(@PathVariable String artseq, @RequestBody Article param){
		return map;
	}
	
}
