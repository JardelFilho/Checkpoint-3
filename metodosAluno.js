function mediaNotas(notas) {
    const soma = notas.reduce((total, atual) => {
        return total + atual
    },0)
    return (soma/notas.length);
};

function adicionarFalta(faltas){
    const total = faltas + 1;
    return total
};


module.exports={
    mediaNotas,
    adicionarFalta
}