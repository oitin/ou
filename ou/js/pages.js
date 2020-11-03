$(document).ready(function () {
  //gotop
  var goTopBtn = document.querySelector(".goTopBtn");
  window.addEventListener("scroll",scrollHandler);

  function scrollHandler(e){
    var nowposition = window.pageYOffset;
    if( nowposition > 200 ){
      goTopBtn.classList.add("goTopStyle");
      return false;     
    }else{
      goTopBtn.classList.remove("goTopStyle");
    }
  }
    
  $('.goTopBtn').click(function(){
      $('html,body').animate({scrollTop:$('html').offset().top}, 800);
  });
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init(); 