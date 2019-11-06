
$(document).ready(function () {
  
  $(".square").click(function() {
    if($(this).hasClass("red")) {
      $(this).css("background", "red");
    } else {
      $(this).css("background", "green");
    }
  });

});