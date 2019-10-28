"use strict"
var brd = brd || {}
brd = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, brd_vue_js, $id, $name
	let init = ()=>{
        _ = $.ctx()
        js = $.js()
        brd_vue_js = js+'/vue/brd_vue.js'
        $id = $.smid()
        $name = $.smname()
    }
	let onCreate =()=>{
		init()
		$.getScript(brd_vue_js,()=>{
			setContentView()
			navigation()
		})
	}
	let setContentView =()=>{
		let x = {css: $.css(), img: $.img()}
		$('head')
        .html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body')
        .addClass('text-center')
        .html(brd_vue.brd_body({css: $.css(), img: $.img()}))
        $('#recent_updates .media').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates').append('<h1>등록된 글이 없습니다.</h1>')
	}
	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write())
		$('#write_form input[name="writer"]').val($id)
		$('#suggestions').remove()
		$('<input>',{
			style:"float:right;width:100px;margin-right:10px",
				value:"취소"
		}).addClass("btn btn-danger")
		  .appendTo("#write_form")
		  .click(()=>{})
		$('<input>',{
		    style:"float:right;width:100px;margin-right:10px",
		    value:"작성"
		 	}).addClass("btn btn-primary")
		      .appendTo('#write_form')
		      .click(e=>{
		    	  e.preventDefault()
		    	  let json = {
		    			  mid : $('#write_form input[name="writer"]').val(),
		    			  title : $('#write_form input[name="title"]').val(),
		    			  content : $('#write_form textarea[name="content"]').val()
		    	  }
		    	  alert('test : '+json.mid +','+ json.title +','+ json.content)
		        $.ajax ({
		        	url : _+'/articles/',
		        	type : 'POST',
		        	data : JSON.stringify(json),
		        	dataType : 'json',
		        	contentType : 'application/json',
		        	success : d=>{
		        		$('#recent_updates').html('<h1>목록 불러오기</h1>')
		        	},
		        	error : ()=>{alert('에러')}
		        })
		      })
	}
	let navigation=()=>{
		$('<a>',{
			href : '#',
			click : e=>{
				e.preventDefault()
				write()
			},
			text : '글쓰기'
		})
		.addClass('nav-link')
		.appendTo('#ago_write')
	}
	return {onCreate}
})()