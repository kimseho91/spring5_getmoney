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
		$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(brd_vue.brd_body({css: $.css(), img: $.img()}))
        recent_updates()
       
	}
	let recent_updates =()=>{
		 $('#recent_updates .media').remove()
	     $('#recent_updates .d-block').remove()
	     $('#suggestions').remove()
	     $.getJSON(_+'/articles/',d=>{
	    	 let i = 0
	 	     let res = ''
	 	     $.each(d,(i,j)=>{
	 	    	 $( '<div class="media text-muted pt-3">'+
	 	    			'<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
	 	       				'<p id="id_'+i+'"class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
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
	 	     
	     })
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
		        		$('#recent_updates div.container-fluid').remove()
						recent_updates()
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
	return {onCreate}
})()