"use strict"
var admin = admin || {}
admin = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img, navi_vue_js
	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		navi_vue_js = js+'/vue/navi_vue.js'
	}
	let onCreate = ()=>{
		alert('환영합니다')
		init()
		$.when(
			$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView = ()=>{
		$('body').empty()
		$(navi_vue.nav())
		.appendTo('body')
		$('<table id="tab"><tr></tr></table>')
        .css({border: '1px solid black', width: '80%', height:'90%', margin: '0 auto'})
        .appendTo('body')
		$.each([{name : "left", width : '20%'},{name : "right", width : '80%'}],
			(i,j)=>{
			$('<td id="'+j.name+'"></td>')
	        .css({border: '1px solid black', width: j.width, 'vertical-align': 'top'})
	        .appendTo('#tab tr')
		})
		$.each([
			{txt :'웹크롤링', name : 'web_crawl'},
			{txt :'고객관리', name : 'cust_mgmt'},
			{txt :'상품등록', name : 'item_reg'},
			{txt :'상품조회', name : 'item_srch'},
			{txt :'상품수정', name : 'item_mod'},
			{txt :'상품삭제', name : 'item_del'}],
			(i,j)=>{
			$('<div name="'+j.name+'">'+j.txt+'</div>')
			.css({border: '1px solid black', margin: 'auto 0', 'line-height': '50px'})
			.appendTo('#left')
			.click(function(){
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				switch ($(this).attr('name')) {
				case 'cust_mgmt':
					custManager()
					break;
				case 'item_reg':
					break;
				case 'item_srch':
					break;
				case 'item_mod':
					break;
				case 'item_del':
					break;
				case 'web_crawl':
					webCrawl()
					break;
				default:
					break;
				}
			})
		})
	}
	let custManager=()=>{
		alert('고객관리')
		$('<h4>고객 관리 페이지</h4>').appendTo('#right')
	}
	let webCrawl=()=>{
		$('#right').empty()
		$('</br></br></br></br></br><h2>Web Crawling</h2></br></br></br></br></br></br></br>'+
				'<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
				'  <select name="site" size="1" multiple>'+
				'  </select>'+
		          '<input class="form-control mr-sm-2" type="text" placeholder="insert URL for crawling" aria-label="Search">'+
				'</form>')
		.appendTo('#right')
		$('#crawl_form input[class="form-control mr-sm-2"]')
		.css({width:'80%'})
		$.each([{sub:'naver.com'},{sub:'daum.net'},{sub:'google.co.kr'},{sub:'youtube.com'}],(i,j)=>{
			$('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
		})
		$('<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')
		.appendTo('#crawl_form')
		.click(e=>{
			e.preventDefault()
			let arr = [$('form#crawl_form select[name="site"]').val(),
				$('form#crawl_form input[type="text"]').val()]
			if(!$.fn.nullChecker(arr)){
				$.getJSON(_+'/tx/crawling/'+arr[0]+'/'+arr[1],d=>{
				alert(d.msg)
			})
			}
		})
		
	}
	return {onCreate}
})()