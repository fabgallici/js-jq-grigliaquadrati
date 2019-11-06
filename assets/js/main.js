$(document).ready(function () {

  var redScore = 0;
  var greenScore = 0;

  $(".square").click(function() {
    if($(this).hasClass("red")) {
      $(this).css("background", "red");
      redScore++;
      $(".red-counter > span").text(redScore);
      $(this).off();
    } else {
      $(this).css("background", "green");
      greenScore++;
      $(".green-counter > span").text(greenScore);
      $(this).off();
    }
  });

});