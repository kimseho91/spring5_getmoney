package com.getmoney.web.brd;

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
import com.getmoney.web.cmm.IConsumer;
import com.getmoney.web.cmm.IFunction;
import com.getmoney.web.cmm.ISupplier;
import com.getmoney.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Printer printer;
	@Autowired Article art;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list; 
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		param.setBrdtype("게시판");
		IConsumer<Article> c = t -> articleMapper.insertArticle(param);
			c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		ISupplier<String> s = ()-> articleMapper.countArticle();
		map.put("count", s.get());
		return map;
	}
	@GetMapping("/")
	public List<Article> list(){
		list.clear();
		ISupplier<List<Article>> s = ()-> articleMapper.selectAll();
		printer.accept("리스트 들어옴 : \n"+s.get());
		return s.get();
	}
	
	@GetMapping("/count")
	public Map<?,?> count(){
		ISupplier<String> s = ()-> articleMapper.countArticle();
		map.clear();
		map.put("count", s.get());
		printer.accept("count 들어옴 : "+s.get());
		return map;
	}
	
	@GetMapping("/{artseq}")
	public Article readArticle(@PathVariable String artseq, @RequestBody Article param){
		return null;
	}
	
	@PutMapping("/{artseq}")
	public Article update(@PathVariable String artseq, @RequestBody Article param){
		param.setBrdtype("게시판");
		printer.accept("업데이트 들어옴 : "+artseq+","+param);
		IConsumer<Article> c = t ->articleMapper.updateArticle(param);
		c.accept(param);
		art = param;
		printer.accept("업데이트 나감 : "+ art);
		return art;
	}
	
	@DeleteMapping("/{artseq}")
	public Article removeArticle(@PathVariable String artseq, @RequestBody Article param){
		printer.accept("삭제 들어옴" + artseq);
		IConsumer<Article> c = t -> articleMapper.deleteArticle(param);
		c.accept(param);
		art = param;
		return art;
	}
	
}
