$(document).ready(function () {
  // var sum = $(".show");
  // var top = sum.offset().top - $(window).scrollTop();
  $(".show").css("padding", "50px 0 50px 0");

  $(window).on("scroll", call);

  function call() {
    var sum = $(".show");
    var top = sum.offset().top - $(window).scrollTop();
    console.log(sum.offset().top - $(window).scrollTop());

    if (top < 30) {
      sum.animate({
        padding: "0",
      }, 80);
      sum.css({"position":"fixed","top":"30px","background-color":"orange"});
    }

    if ($(window).scrollTop() < 30) {
      sum.animate({
        paddingTop: "50",
        paddingBottom: "50"
      }, 80);
      sum.css({"position":"absolute","top":"100px","background-color":"gray"});
    }
  }


  //  js的事件监听方法
  // window.addEventListener("scroll", function () {
  //   var sum = $(".show");
  //   var top = sum.offset().top - $(window).scrollTop();
  //   console.log(top);
  //   if (top <= 50) {
  //     sum.addClass("show-fixed")
  //   }
  //   if($(window).scrollTop()<100){
  //     sum.removeClass("show-fixed");
  //   }
  // })
});