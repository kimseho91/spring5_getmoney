"use strict"
var brd = brd || {}
brd = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, brd_vue_js
	let init = ()=>{
        _ = $.ctx()
        js = $.js()
        brd_vue_js = js+'/vue/brd_vue.js'
    }
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(brd_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		let x = {css: $.css(), img: $.img()}
		$('head')
        .html(brd_vue.brd_head())
        $('body')
        .addClass('text-center')
        .html(brd_vue.brd_body())
	}
	return {onCreate}
})()