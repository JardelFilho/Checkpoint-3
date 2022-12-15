const filtro = require("./filtro");
const {listaAluno, Aluno} = require("./aluno");
let lista  = listaAluno;
const criar = Aluno;



let curso = {
    nomeDoCurso: "Programação Imperativa",
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listaDeEstudantes: function() {
        let nomes = [];
        lista.forEach((lista) => nomes.push(lista.nome)
        ) 
        return nomes
} ,
    addAluno: function(){
        const adc = lista.push(addaluno)
        return adc
    },
    aprovacao: function(nome){
        let dadoFiltrado = filtro(nome)
        let mediaNotas = () => {dadoFiltrado.forEach((dadoFiltrado)=> media = dadoFiltrado.media); return media}
        let faltasDoAluno = () => {dadoFiltrado.forEach((dadoFiltrado)=> falta = dadoFiltrado.totalDeFaltas); return falta}
        let notas = mediaNotas(dadoFiltrado);
        let faltas = faltasDoAluno(dadoFiltrado);
        const dezPorCento = this.notaDeAprovacao + (this.notaDeAprovacao * 0,1);
        if(this.notaDeAprovacao > notas || faltas > this.faltasMaximas){
            return `false`
        }else if (faltas = this.faltasMaximas && dezPorCento > notas) {
            return `false`
        }else {
            return `true`
        };

    },
    estudantes: function(array) {
        let listaStatus = [];
        for (let i = 0; i <= array.length; i++) {
            if(this.aprovacao(array[i]) === "true"){
                return listaStatus.push(true)
            }else{
                return listaStatus.push(false)
            }
        } return listaStatus
    }
}    
let addaluno = new Aluno("Carlos", 2, [6, 8, 10]);

curso.addAluno(addaluno);
curso.listaDeEstudantes(lista);
curso.aprovacao("Pedro"),
curso.aprovacao("Otávio"),
curso.aprovacao("Eduardo"),
curso.aprovacao("Samuel"),
curso.aprovacao("Carlos");
console.log(curso.estudantes(curso.listaDeEstudantes(lista)));


module.exports = curso;


