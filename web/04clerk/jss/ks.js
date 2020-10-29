// JavaScript Document


$(function(){
// 錨點捲軸滑動效果
$('.linkBtn01').click(function(){
	$('html,body').animate({scrollTop:$('#link01').offset().top}, 800);
	});
	
$('.linkBtn02').click(function(){
	$('html,body').animate({scrollTop:$('#link02').offset().top}, 1400);
	});
	
});



$(function(){
var setArea = $('.new01, .new02, .new03, .new04'),
    showHeight = 50; //滾到.new01~04高150px的地方,觸發animation
    setArea.css({display:'block', opacity:'0'});

$(window).on('load scroll resize', function(){
	setArea.each(function(){
		
	var setThis = $(this),
	areaTop = setThis.offset().top;
	if ($(window).scrollTop() >
	(areaTop + showHeight) - $(window).height()){
	setThis.stop().animate({opacity:'1'}, 200);

	} else {
	setThis.stop().animate({opacity:'0'}, 200);
	}

	});
});
});

$(function(){
var setArea = $('.step02, .step03, .step04, .step05, .step06'),
    showHeight = 100; //滾到.step02~06高250px的地方,觸發animation
    setArea.css({display:'block', opacity:'0'});

$(window).on('load scroll resize', function(){
	setArea.each(function(){
		
	var setThis = $(this),
	areaTop = setThis.offset().top;
	if ($(window).scrollTop() >
	(areaTop + showHeight) - $(window).height()){
	setThis.stop().animate({opacity:'1'}, 200);

	} else {
	setThis.stop().animate({opacity:'0'}, 200);
	}

	});
});
});

	

