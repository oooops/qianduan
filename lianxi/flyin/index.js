$(document).ready(function () {
  var windowX = $(window).width() - 100;
  var windowY = $(window).height() - 100;
  randomPlace();
  // 开始运动
  $("#start").click(function(){
    startMove();
  });

  // 初始随机生成位置
  function randomPlace() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var newCeil = $("#ceil-" + i + "-" + j);
        newCeil.css({
          left: function () {return (Math.floor(Math.random() * windowX)) - 600;},
          top: function () {return (Math.floor(Math.random() * windowY)) - 100;}
        });
        // $("#start").css({
        //   left: function () {return (Math.floor(Math.random() * windowX));},
        //   top: function () {return (Math.floor(Math.random() * windowY));}
        // })
      }
    }
  }


  // 方块运动函数
  function startMove() {
    // $("#start").animate({left: 700,top: 450}, 2000);
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        var newCeil = $("#ceil-" + x + "-" + y);
        newCeil.animate({left: y * 100,top: x * 100}, 2000);
      }
    }
  }

});