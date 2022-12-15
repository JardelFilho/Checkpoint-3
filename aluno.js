let aluno = {
    nome: "",
    totalDeFaltas: 0,
    notas: [10,8,9],
}

const {mediaNotas, adicionarFalta} = require("./metodosAluno");

function Aluno(nome, faltas, notas){
    const resultadoMediaNotas =  mediaNotas(notas);
    const resultadoAdicionarFalta = adicionarFalta(faltas);
    this.nome = nome,
    this.totalDeFaltas = faltas,
    this.notas = notas,
    this.media = resultadoMediaNotas,
    this.falta = resultadoAdicionarFalta
}

const aluno1 = new Aluno("Pedro", 3 ,[5,6,7]);
const aluno2 = new Aluno("Otávio", 2,[7,8,9]);
const aluno3 = new Aluno("Eduardo", 0 ,[10,10,10]);
const aluno4 = new Aluno("Samuel", 1,[8,6,7]);

let listaAluno = [aluno1, aluno2, aluno3, aluno4];



module.exports = {
    listaAluno,
    Aluno
};