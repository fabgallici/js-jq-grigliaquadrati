//genera un numero casuale fra 0 e max
function rndGen(max) {
  var intNUm = Math.floor(Math.random() * (max + 1));
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

function createGrid(row, item) {
  //genero le row
  for(var j = 1; j <= row; j++) {
    document.getElementById('square-grid').innerHTML += '<div class="row"></div>';
  }
  //genero gli elementi interni ad ogni riga
  for (var i = 0; i < row; i++) {
    for (var k = 1; k <= item; k++) {
      document.querySelectorAll('.row')[i].innerHTML += '<div class="square"></div>';
    }     
  }   
}

function createjGrid(row, item) {
  //genero le row
  var rowInner = '<div class="row"></div>';
  var itemInner = '<div class="square"></div>';
  for (var j = 1; j <= row; j++) {
    $('#square-grid').append(rowInner);
  }
  //genero gli elementi interni ad ogni riga
  for (var i = 0; i < row; i++) {
    for (var k = 1; k <= item; k++) {
      $('.row').eq(i).append(itemInner);
    }
  }
}

var itemNum = 8; //valori per createGrid
var rowNum = 8;

const redNum = 15;  // quanti rossi ci sono
const squareNum = 63;  // 64 quadrati totali, da 0 a 63 posizioni 

var redScore = 0; //rossi e verdi trovati
var greenScore = 0;




$(document).ready(function () {
  //genero la griglia 8 x 8
  createjGrid(rowNum, itemNum);

  //creo un array di 15 elementi con valori da 0 a 63 non ripetuti da utilizzare come posizioni per .square
  var redPosArr = getNonRepArr(redNum, squareNum, rndGen);
  console.log('array posizioni red', redPosArr);

  //ciclo arr redPosition e al valore dell'elem i-esimo faccio corrispondere una posizione .square class
  //alla quale aggiungo l'attributo red="true" per identificarla
  for (var i = 0; i < redPosArr.length; i++) {
    // document.querySelectorAll(".square")[redPosArr[i]].classList.add("red");
    $(".square").eq(redPosArr[i]).attr("red", "true");  //o si poteva aggiungere classe fittizia red
  }

  //click events on square
  $(".square").click(function() {
    if($(this).attr("red")) {
      $(this).addClass("bg-red cursor-default");
      redScore++;
      $(".red-counter > span").text(redScore);
      $(this).off();  //remove event click from this .square , oppure posso rimuovere attributo red
    } else {
      $(this).addClass("bg-green cursor-default");
      greenScore++;
      $(".green-counter > span").text(greenScore);
      $(this).off();
    }
  });

});