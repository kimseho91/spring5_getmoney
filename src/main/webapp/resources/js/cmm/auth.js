"use strict"
var auth = auth || {}
auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js, css, img, auth_vue_js, brd_vue_js, brd_js, router_js, cookie_js
    let init = ()=>{
    	_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
        auth_vue_js = js+'/vue/auth_vue.js'
        brd_vue_js = js+'/vue/brd_vue.js'
        brd_js = js+'/brd/brd.js'
        router_js = js+'/cmm/router.js'
        cookie_js = js+'/cmm/cookie.js'
    }
    let onCreate =()=>{
        init()
        $.when(
			$.getScript(auth_vue_js),
			$.getScript(router_js),
			$.getScript(brd_js),
			$.getScript(cookie_js)
		)		
        .done(()=>{
        	setContentView()
    		$('#a_go_join').click(e=>{
         		e.preventDefault()
	    	$.getScript(auth_vue_js)
	        $('head')
	        .html(auth_vue.join_head())
	        $('body')
	        .html(auth_vue.join_body())
	        $('#mid').keyup(()=>{
	        	if($('#mid').val().length > 2){
	        		$.ajax({
	        			url : _+'/cus/'+$('#mid').val()+'/exist',
	        			contentType : 'application/json',
	        			success : d => {
	        				if(d.msg === 'SUCCESS'){
	        					$('#dupl_check')
	        					.val('사용 가능합 ID입니다.')
	        					.css('color','green')
	        				}else{
	        					$('#dupl_check')
	        					.val('이미 사용중인 ID입니다.')
	        					.css('color','red')
	        				}
	        		}
	        		})
	        	}	
	        })
	        $('<button>',{
	        	
	            text : '회원가입',
	            href : '#',
	            click : e=>{
	            e.preventDefault();
	            join()
	            }
	        })
	            .addClass('btn btn-primary btn-lg btn-block')
	            .appendTo('#btn_join')
    		})
        }).fail(()=>{alert(WHEN_ERR)})
    }
    let setContentView =()=>{
		$('head')
        .html(auth_vue.login_head())
        $('body')
        .addClass('text-center')
        .html(auth_vue.login_body())
    	 login()
    	 access()
    }
    let join =()=>{
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
    let login =()=>{
		$('head')
        .html(auth_vue.login_head())
        $('body')
        .addClass('text-center')
        .html(auth_vue.login_body())
        $('#loginid').val('hong')
        $('#loginpw').val('hong1234')
        $('<button>',{
        	text : "로그인",
        	click : e => {
        		e.preventDefault()
        $.ajax({
        	
          url : _+'/cus/'+$('#mid').val()+'/login',
          type : 'POST',
          data : JSON.stringify({
        	  mid : $('#loginid').val(), 
      		  mpw : $('#loginpw').val()
          }),
          dataType : 'json',
          contentType : 'application/json',
          success : d =>{
        	  setCookie("CUSID",d.mid)
        	  alert('저장된 쿠키: '+getCookie("CUSID"))
        	  brd.onCreate()
          },
			error: e =>{
				alert('AJAX ERROR ')
			}
        })	
        	}
        })
        .addClass("btn btn-lg btn-primary btn-block")
        .appendTo('#btn_login')
    }
    let existId = x=>{
    	$.ajax({
    		url : _+'/cus/'+x+'/exist',
	    	type : 'GET',
	    	contentType : 'application/json',
	    	success : d => {
	    			if(d.msg === 'SUCCESS'){
	    				alert('가입 가능 아이디 입니다.')
	    				join()
	    			}else{
	    				alert('이미 존재하는 아이디 입니다.')
    				}
	    	}
    	})
    }
    let access =()=>{
    	$('#a_go_admin').click(()=>{
    		let ok = confirm('사원입니까?')
        	if(ok){
        		let anum = prompt('사원번호를 입력하시오')
        		$.ajax({
        			url : _+'/admins/'+anum+'/acees',
        			type : 'POST',
        			data : JSON.stringify({anum : anum, apw : prompt('비밀번호를 입력하시오')}),
        			dataType : 'json',
        			contentType : 'application/json',
        			success : d=>{
        				alert('관리자 ajax 다녀옴')
        				if(d.msg === 'SUCCESS'){
        					alert('환영합니다')
//        					admin.onCreate()
        				}else{
        					alert('접근권한이 없습니다.')
//        					app.run()
        				}
        			},
        			error : e=>{
        				
        			}
        		})
        	}
    	})
    	
    }
    return {onCreate, join, login}
})();