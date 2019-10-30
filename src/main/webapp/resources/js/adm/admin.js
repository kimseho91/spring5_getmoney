"use strict"
var admin = admin || {}
admin = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img
	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
	}
	let onCreate = ()=>{
		init()
		setContentView()
	}
	let setContentView = ()=>{
		
	}
	return {onCreate}
})()