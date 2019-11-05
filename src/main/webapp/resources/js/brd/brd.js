"use strict"
var brd = brd || {}
brd = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img, brd_vue_js, navi_js, navi_vue_js, cookie_js, page_vue_js, compo_vue_js
	let init = ()=>{
        _ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
        brd_vue_js = js+'/vue/brd_vue.js'
        navi_js = js+'/cmm/navi.js'
        navi_vue_js = js+'/vue/navi_vue.js'
        cookie_js = js+'/cmm/cookie.js'
        page_vue_js = js+'/vue/page_vue.js'
        compo_vue_js = js+'/vue/compo_vue.js'
    }
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(brd_vue_js),
			$.getScript(navi_vue_js),
			$.getScript(navi_js),
			$.getScript(cookie_js),
			$.getScript(page_vue_js),
			$.getScript(compo_vue_js)
		).done(()=>{
			setContentView()
			navi.onCreate()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView =()=>{
		$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(brd_vue.brd_body({ctx: '/web',css: $.css(), img: $.img()}))
        $(navi_vue.nav()).appendTo('#navi')
        recent_updates({page: '1', size: '5'})
	}
	let recent_updates =x=>{
		 $('#recent_updates .media').remove()
	     $('#recent_updates .d-block').remove()
	     $('#suggestions').remove()
	     $.getJSON(_+'/articles/page/'+x.page+'/size/'+x.size,d=>{
	 	     $.each(d.articles,(i,j)=>{
	 	    	 $( '<div class="media text-muted pt-3"><img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
	                		'          <p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
	                		'</p></div>').appendTo('#recent_updates')
	 	       	$('<strong class="d-block text-gray-dark">@<a>'+j.mid+'</a></strong>')
	 	       	.appendTo("#id_"+i)
	 	       	.click(()=>{
	 	       		alert('ID 클릭')
	 	       	})
	 	       	$('<a>'+j.title+'</a>')
	 	       	.appendTo("#id_"+i)
	 	       	.click(()=>{
	 	       		alert('제목 클릭')
	 	       		detail(j)
	 	       	})
	 	     })
	 	     $(page_vue.pagination())
	 	     .appendTo('#recent_updates')
	 	     $('#pagination').empty()
	 	     $('#recent_updates div.container h2').remove()
			 $('<form id="paging_form" class="form-inline my-2 my-lg-0">'+
					'  <select name="site" size="1" multiple>'+
					'  </select>'+
					'</form>').prependTo('#recent_updates div.container')
			$('#paging_form input[class="form-control mr-sm-2"]').css({width:'80%'})
			$.each([{sub:'5개씩 보기'},{sub:'10개씩 보기'},{sub:'15개씩 보기'},{sub:'20개씩 보기'}],(i,j)=>{
				$('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#paging_form select')
			})
			 $.each(d.pages,(i,j)=>{
				$('<li class="page-item"><a class="page-link" href="#">'+j+'</a></li>')
				.appendTo('#pagination')
			})
			$('#pagination').css({'place-content': 'center'})
			$('#paging_form').css({'text-align': 'right'})
	     })
	}
	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write())
		$('#write_form input[name="writer"]').val(getCookie("CUSID"))
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
		        $.ajax ({
		        	url : _+'/articles/',
					type : 'POST',
					data : JSON.stringify(json),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						$('#recent_updates div.container-fluid').remove()
						recent_updates()
		        	},
		        	error : ()=>{alert('글쓰기 ajax 에러')}
		        })
		      })
	}
	let detail = x =>{
		$('#recent_updates').html(brd_vue.brd_write())
		$('#recent_updates div.container-fluid h1').html('ARTICLE DETAIL')
		$('#write_form input[name="artseq"]').val(x.artseq)
		$('#write_form input[name="writer"]').val(x.mid)
		$('#write_form input[name="title"]').val(x.title)
		$('#write_form textarea[name="content"]').val(x.content)
		$('#suggestions').remove()
		$('<input>',{
			style:"float:right;width:100px;margin-right:10px",
				value:"삭제"
		}).addClass("btn btn-danger")
		  .appendTo("#write_form")
		  .click(()=>{
			  let json = {
		    		  mid : $('#write_form input[name="writer"]').val(),
		    		  artseq : $('#write_form input[name="artseq"]').val(),
		    		  title : $('#write_form input[name="title"]').val(),
		    		  content : $('#write_form textarea[name="content"]').val()
		    	  }
		    	  alert('json 삭제 :: '+json.artseq +','+ json.title +','+ json.content)
		    	  $.ajax({
					  url : _+'/articles/'+json.artseq,
					  type : 'DELETE',
					  data : JSON.stringify(json),
					  dataType : 'json',
					  contentType : 'application/json',
					  success : d=>{
						  alert('삭제 성공')
						  $('#recent_updates div.container-fluid').remove()
						  recent_updates()
					  }
				  })
		  })
		$('<input>',{
		    style:"float:right;width:100px;margin-right:10px",
		    value:"수정"
		 	}).addClass("btn btn-primary")
		      .appendTo('#write_form')
		      .click(()=>{
		    	  let json = {
		    		  mid : $('#write_form input[name="writer"]').val(),
		    		  artseq : $('#write_form input[name="artseq"]').val(),
		    		  title : $('#write_form input[name="title"]').val(),
		    		  content : $('#write_form textarea[name="content"]').val()
		    	  }
		    	  alert('json 수정:: '+json.artseq +','+ json.title +','+ json.content)
		    	  $.ajax({
					  url : _+'/articles/'+json.artseq,
					  type : 'PUT',
					  data : JSON.stringify(json),
					  dataType : 'json',
					  contentType : 'application/json',
					  success : d=>{
						  alert('수정 성공')
						  $('#recent_updates div.container-fluid').remove()
						  recent_updates()
					  }
				  })
		      })
	}
	return {onCreate, write}
})()