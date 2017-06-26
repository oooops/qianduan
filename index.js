$(document).ready(function () {
  var i = 0;
  var timer;
  var total = $("#slide img").length;
  //初始显示第一张
  $(".img").eq(0).fadeIn(400).siblings().hide();
  startShow();

  //动态生成tab,建议图片超过6张时删除
  for(var j=0;j<total-1;j++){
    $(".tabs ul").append("<li class='tab'></li>");
  }
  $(".tabs").css({width:function(){
    return 27*total;
  }});

  //tab效果
  $(".tab").hover(function () {
    clearInterval(timer);
    i = $(this).index();
    show();
  }, function () {
    startShow();
  });

  //上一张下一张点击效果
  $("#next-btn").click(function () {
    clearInterval(timer);
    i++;
    if (i == total) {
      i = 0;
    }
    show();
    startShow();
  });
  $("#prev-btn").click(function () {
    clearInterval(timer);
    i--;
    if (i == -1) {
      i = total-1;
    }
    show();
    startShow();
  });

  //显示函数
  function show() {
    $(".img").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("tab-active").siblings().removeClass("tab-active");
  };

  //开始播放函数
  function startShow() {
    timer = setInterval(function () {
      i++;
      if (i == total) {
        i = 0;
      }
      show();
    }, 3000);
  };

});