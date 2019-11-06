//genera un numero casuale fra 0 e max
function rndGen(max) {
  var intNUm = Math.floor(Math.random() * max);
  // console.log(intNUm);
  return intNUm;
}

//ritorna un array di numeri non ripetuti, di length arrSize, utilizzando una function d'ingresso che usa maxNum come parametro
//viene utilizzata sia per creare l'array di numeri random da indovinare che per l'array numeri input utente
function getNonRepArr(arrSize, maxNum, fn) {
  var arrOut = [];
  var numIn;
  while (arrOut.length < arrSize) {
    numIn = fn(maxNum);
    if (!arrOut.includes(numIn)) {
      arrOut.push(numIn);
      // console.log('numero inserito correttamente');  //debug
    }
  }
  return arrOut;
}

function getBinaryArr(arrSize, numVal1, fn) {
  var arrOut = [];

}

const redNum = 15;
const squareNum = 64;

var redPositionArr = getNonRepArr(redNum, squareNum, rndGen);
console.log(redPositionArr);

for (var i = 0; i < redPositionArr.length; i++) {
  console.log(redPositionArr[i]);
  // document.querySelectorAll(".square")[redPositionArr[i]].classList.add("red");
  // $(".square").eq(redPositionArr[i]).addClass("red");
  $(".square").eq(redPositionArr[i]).attr("red", "true");
}

// document.querySelectorAll(".square")[4].classList.add("red");


$(document).ready(function () {


  var redScore = 0;
  var greenScore = 0;

  $(".square").click(function() {
    if($(this).attr("red")) {
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