"use strict"
var auth = auth || {}
auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js, auth_vue_js
    let init = ()=>{
        _ = $.ctx()
        js = $.js()
        auth_vue_js = js+'/vue/auth_vue.js'
    }
    let onCreate =()=>{
        init()
        $.getScript(auth_vue_js).done(()=>{
        	setContentView()
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
         		join()
    		})
        }).fail(()=>{alert(WHEN_ERR)})
    }
    let setContentView =()=>{
    	 login()
    }
    let join =()=>{
    	$.getScript(auth_vue_js)
        $('head')
        .html(auth_vue.join_head())
        $('body')
        .html(auth_vue.join_body())
            $('<button>',{
                text : '회원가입',
                href : '#',
                click : e=>{
                	e.preventDefault();
                	let data = {
                			mid : $('#mid').val(), 
                			mpw : $('#mpw').val(), 
                			mname : $('#mname').val(),
                			email : $('#email').val(),
                			phonenum : $('#phonenum').val(),
                			birth : $('#birth').val(),
                			tooja : $('#tooja').val(),
                			register_date : $('#register_date').val(),
                			tier : $('#tier').val()}
                	alert('전송되는 데이터 : '+data.mid)
                    $.ajax({
				    	url : _+'/cus/',
				    	type : 'POST',
				    	dataType : 'json',
				    	data : JSON.stringify(data),
				    	contentType : 'application/json',
				    	success : d => {
				    		alert('AJAX 성공 아이디: '+d.msg)
				    		if(d.msg === 'SUCCESS')
				    			login()
				    		else
				    			alert('회원가입 실패')
				    	},
				    	error : e => {
				    		alert('AJAX 실패');
				    	}
                	})
                }
            })
            .addClass('btn btn-primary btn-lg btn-block')
            .appendTo('#btn_join')
    }
    let login =()=>{
    	let x = {css: $.css(), img: $.img()}
		$('head')
        .html(auth_vue.login_head())
        $('body')
        .addClass('text-center')
        .html(auth_vue.login_body())
        $('<button>',{
        	type : "submit",
        	text : "Sign in",
        	click : e => {
        		e.preventDefault()
        		let data = {mid : $('#loginid').val(), mpw : $('#loginpw').val()}
        $.ajax({
        	
          url : _+'/cus/login',
          type : 'POST',
          data : JSON.stringify(data),
          dataType : 'json',
          contentType : 'application/json',
          success : d =>{
            alert(d.mname+' 님 환영합니다')
            mypage(d)
          },
          error : e => {
	    	alert('Loign AJAX 실패');
          }
        })	
        	}
        })
        .addClass("btn btn-lg btn-primary btn-block")
        .appendTo('#btn_login')
    }
    let mypage =(d)=>{
    	let x = {
    			mid : d.mid,
    			mpw : d.mpw,
    			mname : d.mname,
    			email : d.email,
    			phonenum : d.phonenum,
    			birth : d.birth,
    			tooja : d.tooja,
    			register_date : d.register_date,
    			tier : d.tier
    	}
    	$('head').html(auth_vue.mypage_head(x))
        $('body').html(auth_vue.mypage_body(x))
    }
    return {onCreate, join, login, mypage}
})();