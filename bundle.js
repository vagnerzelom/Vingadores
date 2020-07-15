"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ['banana', 'maçã', 'abacate', 'abacxi'];
var squareArr = arr.map(function (item) {
  return item * item;
});
console.log(squareArr);

var teste = function teste() {
  return {
    nome: 'vagner'
  };
};

console.log(teste());
