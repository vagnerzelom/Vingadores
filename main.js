const arr =[1,2,3,4,5,6];
const cesta = ['banana','maçã','abacate','abacaxi'];

const squareArr = arr.map(function(item,indice,array){
 return item * item;
});

//console.log(squareArr);

const fruitPosition = cesta.map(function (item,indice) {
    return `O ${item} esta na posição ${indice} do array`
    
})

//console.log(fruitPosition);

const sun = arr.reduce( function (total,next) {

    return total + next;
}) // reduce transforma todo a array em unico soma todos os itens do array o total acumula o resultado da soma anterior para ser somado depois na proxima volta do array com proximo numero que o next

//console.log(sun);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
})

const filter2 =cesta.filter(function (item) {
    return item ==='banana'
})


//console.log(filter);
//console.log(filter2);

const find = arr.find(function (item) {
    return item === 4;
})

const frutas = cesta.find(function(item){
    return item ==='abacate';
}) 

console.log(find);
console.log(frutas);