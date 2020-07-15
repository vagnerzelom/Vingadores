"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ['banana', 'maçã', 'abacate', 'abacxi'];
var squareArr = arr.map(function (item) {
  return item * item;
}); //console.log(squareArr);

var fruitPosition = cesta.map(function (item, indice) {
  return "o ".concat(item, " esta na posi\xE7\xE3o ").concat(indice, " do array ");
});
console.log(fruitPosition);

var teste = function teste() {
  return {
    nome: 'vagner'
  };
}; //console.log(teste());


var sun = arr.reduce(function (total, next) {
  return total + next;
}); //console.log(sun);

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); //console.log(filter);

var filter2 = cesta.filter(function (item) {
  return item === 'banana';
}); //console.log(filter2);

var find = arr.find(function (item) {
  return item === 4;
}); //console.log(find);

var frutas = cesta.find(function (item) {
  return item === 'abacate';
}); //console.log(frutas);
