$(document).ready(function() {
  $('.circle').click(function(){
    $('.page').fadeOut("slow");
    $('#P'+$(this).attr('target')).fadeIn("slow");
        });
});