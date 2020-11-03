//先把外連的a都寫掉
$('a').click(function(event) {
	event.preventDefault();
});

//暢銷書TOP10頁籤
$('.topBookTab li').click(function() {
  $(this).addClass('tbTabClick').siblings().removeClass('tbTabClick');
});

//暢銷書TOP10頁籤內容切換
for( let n=1; n<=4; n++){
  $('.jqTBtab'+n).click(function() {
    $('.jqTopBookInfo'+n).show().siblings().hide();
  });
}
$('.lightboxClose').click(function() {
   $('.lightboxOverlay').hide();
});

//暢銷作家燈箱
for( let n=1; n<=20; n++){
  $('.bestAuthor'+n).click(function() {
    $('.bestAuthorIntro'+n).show();
  });
}
$('.lightboxClose').click(function() {
   $('.lightboxOverlay').hide();
});

  
//暢銷出版社輪播
$(function(){

var s_group;
var firstWidth = parseInt($(window).width());
$(document).ready(function(){

	//大於768一次輪播4個,小於則一次輪播3個
	if(firstWidth > 768){
		s_group = 4
		chgSw(s_group);
	}else{
		s_group = 3
		chgSw(s_group);
	}
	$(window).resize(function(){
		var w=parseInt($(window).width());
		if(w > 768){
			s_group = 4
			chgSw(s_group);
		}else{
			s_group = 3
			chgSw(s_group);
		}
	});
});

function chgSw(objN){
	var swiper = new Swiper('.swiper-container', {
	  slidesPerView: objN,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loopFillGroupWithBlank: true,
	  spaceBetween: 10,
	});
}
});

//暢銷出版社內容切換
for( let n=1; n<=20; n++){
  $('.jqTPlogo'+n).click(function() {
    $('.jqTPpic'+n).show().siblings().hide();
  });
}

//浮動選單
$('.goTopBtn').click(function(){
   $('html,body').animate({scrollTop:$('#goTop').offset().top}, 800);
});
