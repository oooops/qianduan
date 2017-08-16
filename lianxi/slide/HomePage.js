$(document).ready(function(){
  var left=null;
  var right=null;
  var zIndex=null;
  $("#one .right").css("width","250");
  // $("#one").css("width","400");

  $(".out").click(function(){
    // $(this).siblings().css("width","auto");
    // $(this).find(".right").animate({width:"250px"});
    $(this).find(".right").animate({width:"250px"}).parent().siblings().find(".right").animate({width:"0px"});
    // $(".out").siblings().find(".right").animate({width:"0px"});
    // $(this).animate({width:"400px"});
  });
});