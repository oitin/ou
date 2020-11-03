// JavaScript Document

$(function(){

//輪播Bn控制顯示數量 cartSwiper1
var s_group;
var firstWidth = parseInt($(window).width());
$(document).ready(function(){
	
	//大於768一次輪播5個,小於則一次輪播2個
	if(firstWidth > 768){
		s_group = 5
		chgSw(s_group);
	}else{
		s_group = 2
		chgSw(s_group);
	}
	$(window).resize(function(){
		var w=parseInt($(window).width());
		if(w > 768){
			s_group = 5
			chgSw(s_group);
		}else{
			s_group = 2
			chgSw(s_group);
		}
	});
});

function chgSw(objN){
	var swiper = new Swiper('.cartSwiper1', {
	nextButton: '.swiper-button-next.swBTN01-next',
	prevButton: '.swiper-button-prev.swBTN01-prev',
	slidesPerView: 'auto',
	slidesPerGroup : objN,
	});
}

});


//cartSwiper2
var swiper = new Swiper('.cartSwiper2', {
	nextButton: '.swiper-button-next.swBTN02-next',
	prevButton: '.swiper-button-prev.swBTN02-prev',
	pagination : '.swiper-pagination',
	autoplay: 3000,
});


