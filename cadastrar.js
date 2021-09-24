let readlineSync = require('readline-sync');
var nomeEven, nomePart1, nomePart2,nomepartint, nomePales, idade, capacidade = 0;

if (capacidade < 100){
// esse if na verdade seria um while
nomeEven = readlineSync.question("digite o nome do evento: ");

if (nomeEven.length < 4){
    
    console.log("Nome do evento invalido! Evento não cadastrado");

}else{
    nomePart1 = readlineSync.question("digite o primeiro nome do participante: ");
        nomePart2 = readlineSync.question("digite o sobrenome do participante: ");
            nomepartint = nomePart1 + nomePart2;
               
if (nomePart1.length <= 0 , nomePart2.length <= 0 ){
   
    console.log("Nome informado invalido! Participante não cadastrado");

}else{
    idade = readlineSync.question("Digite a idade do participante: ");
        if(idade <= 18){
            console.log("idade insuficiente para participar do evento. Participante não cadastrado");
        }else{
            console.log("cadastro efetuado com sucesso");
            console.log("Evento cadastrado: " + nomeEven);
            console.log("Nome do participante: " + nomepartint);
            console.log("Idade do participante cadastrado: " + idade);
            capacidade ++
            console.log(capacidade);
        }
    }
}
    }else{
        console.log("limite de cadastro atingido")
    }
