const arr =[1,2,3,4,5,6];
const cesta = ['banana','maçã','abacate', 'abacxi'];

const squareArr = arr.map( item =>  item * item)

//console.log(squareArr);

const fruitPosition = cesta.map((item, indice) => `o ${item} esta na posição ${indice} do array `)

console.log(fruitPosition);

const teste = ()=>({nome:'vagner'});

//console.log(teste());

const sun = arr.reduce((total,next)=> total +next);
//console.log(sun);

const filter = arr.filter(item=>item%2 ===0);
//console.log(filter);
const filter2 =cesta.filter(item=>item==='banana');
//console.log(filter2);
const find= arr.find(item=>item===4);
//console.log(find);
const frutas = cesta.find(item=> item==='abacate');
//console.log(frutas);