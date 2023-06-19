$(document).ready(function($){
  $out();
  setInterval(function(){
    $out();
  },6000)

  $('.js-hover').on("mouseenter", function(){
    $(this).addClass('animate-bounce').next().addClass('on');
  });
  $('.js-hover').on("mouseleave", function(){
    $(this).removeClass('animate-bounce').next().removeClass('on');
  });

  $('.js-fancybox').fancybox({
//    maxWidth	: 1024,
//    maxHeight	: 728,
    padding : 0,
    margin :0,
    fitToView	: false,
    width		: 1024,
    height		:630,
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
  });
//  $("canvas.snow").let_it_snow({
//      windPower: 2,
//      speed:-1,
//      //    color: "#ea0618",
//      size:.5,
//      count: 40,
//      image: "images/petal.png",
//      opacity: 0
//    });

  function $out() {
    $('h1.tit div').removeClass('out').each(function(index){
      $(this).delay(index*100).animate({
        'background':'transparent'
      },0,function(){
        $(this).addClass('out')
      })
    })
  }
});
