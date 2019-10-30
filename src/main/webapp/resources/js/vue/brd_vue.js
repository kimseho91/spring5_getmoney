/* https://getbootstrap.com/docs/4.0/examples/offcanvas/ */
var brd_vue = brd_vue || {}
brd_vue = {
	brd_head:x=>{
		return '<head>'+
		'    <meta charset="utf-8">'+
	    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
	'    <meta name="description" content="">'+
	'    <meta name="author" content="">'+
	    '<link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">'+
	'    <title>Offcanvas template for Bootstrap</title>'+
	'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
	'    <!-- Bootstrap core CSS -->'+
	    '<link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">'+
	'    <!-- Custom styles for this template -->'+
	'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
	' <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
	'  </head>'
	},
	brd_body: x=>{
		return '<body class="bg-light"><div id="navi"></div>'+
        '<div class="nav-scroller bg-white shadow-sm">'+
        '  <nav class="nav nav-underline">'+
        '    <a class="nav-link active" href="#" >Dashboard</a>'+
        '    <a class="nav-link" href="#">'+
        '      Friends'+
        '      <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
        '    </a>'+
        '    <a class="nav-link" href="#">Explore</a>'+
        '    <a class="nav-link" href="#">Suggestions</a>'+
        '    <a class="nav-link" href="#">Link</a>'+
        '    <a class="nav-link" href="#">Link</a>'+
        '    <a class="nav-link" href="#">Link</a>'+
        '    <a class="nav-link" href="#">Link</a>'+
        '    <a class="nav-link" href="#">Link</a>'+
        '  </nav>'+
        '</div>'+
        '<main role="main" class="container">'+
          '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">'+
            '<img class="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
        '    <div class="lh-100">'+
        '      <h6 class="mb-0 text-white lh-100">게시판</h6>'+
        '      <small>2019-10-25</small>'+
        '    </div>'+
        '  </div>'+
        '  <div id="recent_updates" class="my-3 p-3 bg-white rounded shadow-sm">'+
        '    <h6 class="border-bottom border-gray pb-2 mb-0"></h6>'+
        '    <div class="media text-muted pt-3">'+
        '      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
        '        <strong class="d-block text-gray-dark"></strong>'+
        '      </p>'+
            '    <small class="d-block text-right mt-3">'+
        '      <a href="#">All updates</a>'+
        '    </small>'+
        '  </div> '+
        '  <div id="suggestions" class="my-3 p-3 bg-white rounded shadow-sm">'+
        '    <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
        '    <div class="media text-muted pt-3">'+
              '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
        '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
        '        <div class="d-flex justify-content-between align-items-center w-100">'+
        '          <strong class="text-gray-dark">Full Name</strong>'+
        '          <a href="#">Follow</a>'+
        '        </div>'+
        '        <span class="d-block">@username</span>'+
        '      </div>'+
        '    </div>'+
        '    <div class="media text-muted pt-3">'+
              '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
        '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
        '        <div class="d-flex justify-content-between align-items-center w-100">'+
        '          <strong class="text-gray-dark">Full Name</strong>'+
        '          <a href="#">Follow</a>'+
        '        </div>'+
        '        <span class="d-block">@username</span>'+
        '      </div>'+
        '    </div>'+
        '    <div class="media text-muted pt-3">'+
              '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
        '      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
        '        <div class="d-flex justify-content-between align-items-center w-100">'+
        '          <strong class="text-gray-dark">Full Name</strong>'+
        '          <a href="#">Follow</a>'+
        '        </div>'+
        '        <span class="d-block">@username</span>'+
        '      </div>'+
        '    </div>'+
        '    <small class="d-block text-right mt-3">'+
        '      <a href="#">All suggestions</a>'+
        '    </small>'+
        '  </div>'+
        '</main>'+
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
              '<script src="https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
        '        <script src="https://getbootstrap.com/docs/4.3/examples/offcanvas/offcanvas.js"></script>'+
        '</body>'
	},
	brd_write: x=>{
		return '<div class="container-fluid" style="width:80%">'
		  +'<h1>ARTICLE WRITING</h1>'
		  +'<form id="write_form">'
		  +'<input type="text" name="artseq" style="margin-top:20px" class="form-control">'
		  +'<input type="text" name="writer" style="margin-top:20px" class="form-control" placeholder="작성자 ID"/>'
		  +'<input type="text" name="title" style="margin-top:20px" class="form-control" placeholder="제목" /><br />'
		  +'<div class="row">'
		  +'<div style="width:97%; margin:10px auto" >'
		  +'<textarea name="content" class="form-control" rows="10"></textarea>'
		  +' </div>'
		  +' </div>'
		  /*+' <input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
		  +'<input name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'*/
		  +'</form>'
		  +'</div>'
	}
};