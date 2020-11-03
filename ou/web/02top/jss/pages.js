// JavaScript Document
$(document).ready(function() {
	
	
  //--主頁籤
  //$('.jqContentTabBox label').click(function() {
	//$(this).addClass('tabCheck').siblings().removeClass('tabCheck');
  //});
  
  //--浮動選單
  $('.goTopBtn').click(function(){
	$('html,body').animate({scrollTop:$('#goTop').offset().top}, 800);
  });
  
  //--出版趨勢報告-下拉頁籤切換
  //點擊選項切換下方內容
  for( let n=1; n<=4; n++){
    $('.trendSele li.trendSele0'+n).click(function() {
	    $(this).parent().parent().find('.tInfo0'+n).show().siblings('.trendInfo').hide();
    });
  }

  //點擊下拉選項的動作效果
  $('.trendSele li').click(function() {
	$(this).siblings('li').slideToggle();
	//$(this).insertBefore('.trendSele li:eq(0)');//把被點選的li，移到第一個的上面
  });
	
  
  
});//$(document).ready(function() { 結尾