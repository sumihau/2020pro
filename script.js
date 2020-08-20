$(document).ready(function() {
  $(".warp").click(function(){
    $('.warpview').fadeOut();  
  $('#W'+$(this).attr('target')).fadeIn();
  });

  $(".art").click(function(){
    $('.artview').fadeOut();  
  $('#A'+$(this).attr('target')).fadeIn();
  });  

  $(".webD").click(function(){
    $('.webDview').fadeOut();  
  $('#D'+$(this).attr('target')).fadeIn();
  });  

});  

$(".warpview").click(function(){
  $(this).fadeOut(500);  
  }); 
$(".artview").click(function(){
  $(this).fadeOut(500);  
  }); 
$(".webDview").click(function(){
  $(this).fadeOut(500);  
  }); 
$(".videoview").click(function(){
  $(this).fadeOut(500);  
  });


const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
      $menu = $('.menu');

var numOfPages = $menu.length - 1, //取得.menu的數量
    curPage = 0, //初始頁
    scrollLock = false;

function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else
      navigateDown();
  });
  //鍵盤上下鍵
  $(document).on("keydown", function(e) {
    if (scrollLock) return;
    if (e.which === 38)
      navigateUp();
    else if (e.which === 40)
      navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $menu.eq(curPage).offset().top
  }, 1000, 'swing', function(){
    scrollLock = false;
  });
};

function navigateUp () {
  if (curPage === 0) return;
  curPage--;
  pagination();
};

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
};


$(function() {
  scrollPage();
});