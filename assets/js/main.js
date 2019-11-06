/* Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini(scelti a caso all’inizio) se cliccati diventano rossi,
  gli altri diventano verdi(tutti i rimanennti)
Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti */

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