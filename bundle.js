"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ['banana', 'maçã', 'abacate', 'abacaxi'];
var squareArr = arr.map(function (item, indice, array) {
  return item * item;
}); //console.log(squareArr);

var fruitPosition = cesta.map(function (item, indice) {
  return "O ".concat(item, " esta na posi\xE7\xE3o ").concat(indice, " do array");
}); //console.log(fruitPosition);

var sun = arr.reduce(function (total, next) {
  return total + next;
}); // reduce transforma todo a array em unico soma todos os itens do array o total acumula o resultado da soma anterior para ser somado depois na proxima volta do array com proximo numero que o next
//console.log(sun);

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var filter2 = cesta.filter(function (item) {
  return item === 'banana';
}); //console.log(filter);
//console.log(filter2);

var find = arr.find(function (item) {
  return item === 4;
});
var frutas = cesta.find(function (item) {
  return item === 'abacate';
});
console.log(find);
console.log(frutas);
