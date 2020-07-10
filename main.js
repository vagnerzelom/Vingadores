class Pessoa {
    constructor(nome, altura, peso){
        this.nome= nome;
        this.altura = altura;
        this.peso = peso;
    }
}


class Vingador extends Pessoa {
    constructor(nome,altura,peso, poderes, temArmadura, isMembroFundador){
        super(nome,altura,peso);
        this.poderes = poderes;
        this.temArmadura = temArmadura;
        this.isMembroFundador = isMembroFundador;
    }
    lutar (){
        alert (`${this.nome} esta lutando usando ${this.poderes[0]}`)
    }
    vingador (){
        alert(`O ${this.nome} é o homem de ferro tem a altura de ${this.altura} e pesa ${this.peso} e tem como poder ${this.poderes}`);
    }
}

const thor = new Vingador('thor','1.85' ,'100kg',['Super força','raio'],true,true);

document.getElementById('lutar').onclick = function(){
    thor.lutar();
}

const homemDeFerro = new Vingador('Toni', '1,75', '80 kg', 'Armadura de Super tecnologica', true,true);



document.getElementById("homem-de-ferro").onclick = function (){
    homemDeFerro.vingador();
}

class OperacoesMatematicas {
 static soma(a,b){
     return a+b;
 }
}

const sun = OperacoesMatematicas.soma (1,3);

alert (sun);