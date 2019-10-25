"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x +'/resources/js');
	sessionStorage.setItem('css',x +'/resources/css');
	sessionStorage.setItem('img',x +'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		css : ()=>{return sessionStorage.getItem('css');},
		img : ()=>{return sessionStorage.getItem('img');}
	}
}
function CusData(x){
	sessionStorage.setItem('smid', x.mid)
	sessionStorage.setItem('smpw', x.mpw)
	sessionStorage.setItem('smname', x.mname)
	return{
		smid : ()=>{return sessionStorage.getItem('smid')},
		smpw : ()=>{return sessionStorage.getItem('smpw')},
		smname : ()=>{return sessionStorage.getItem('smname')}
	}
}