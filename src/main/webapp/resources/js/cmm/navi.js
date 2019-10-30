"use strict"
var navi = navi || {}
navi = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img, brd_js, auth_js, app_js
	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
        auth_js = js+'/cmm/auth.js';
        brd_js = js+'/brd/brd.js'
        app_js = js+'app.js'
	}
	let onCreate = ()=>{
		init()
		setContentView()
		$.when(
			$.getScript(auth_js),
			$.getScript(brd_js)
		).done(()=>{
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView = ()=>{
			$('<a>',{
	        	href : '#',
		        text : '글쓰기'
	        })
	        .addClass('nav-link')
	        .appendTo('#menu_write')
	        .click( e=>{
	        	e.preventDefault()
	        	brd.write()
	        })
			$('<a>',{
        	href : '#',
	        text : '로그아웃'
			})
			.addClass('nav-link')
			.appendTo('#menu_logout')
			.click(e=>{
				e.preventDefault()
					alert('로그아웃 클릭')
					deleteCookie()
					app.run(_)
					
			})
	}
	return {onCreate}
})()