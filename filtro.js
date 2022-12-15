const {listaAluno, Aluno} = require("./aluno");
let lista  = listaAluno;
const criarAluno = Aluno;

const filtro= (nome) => lista.filter((lista)=> lista.nome === nome) 


module.exports = filtro;