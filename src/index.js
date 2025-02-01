let nomeHeroi = "Zeus";
let vitoriaHeroi = 65;
let derrotaHeroi = 35;
let resultado = subtracao(vitoriaHeroi, derrotaHeroi);

function subtracao(vitoriaHeroi, derrotaHeroi){
    let resultado = vitoriaHeroi - derrotaHeroi;
    return resultado;
}

if (resultado <= 10){    
    nivelHeroi = "Ferro";
}else if (resultado >=11 && resultado <= 20){
    nivelHeroi = "Bronze";
}else if (resultado >=21 && resultado <= 50){
    nivelHeroi = "Prata";
}else if (resultado >= 51 && resultado <= 80){
    nivelHeroi = "Ouro";
}else if (resultado >= 81 && resultado <= 90){
    nivelHeroi = "Diamante";
}else if (resultado >= 91 && resultado <= 100){
    nivelHeroi ="Lendário";
}else if (resultado >= 101){
    nivelHeroi = "Imortal";
}
console.log("O Herói de nome " + nomeHeroi + " tem o saldo de " + resultado + " vitórias e está no nível de " + nivelHeroi);