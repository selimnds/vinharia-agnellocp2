function validarEntrada(mensagem) {
    let valor = prompt(mensagem);
    while (valor === "") {
        alert("O campo não pode ficar vazio. Tente novamente!");
        valor = prompt(mensagem);
    }
    return valor;
}


function verificarEstoqueBaixo(quantidade) {
    if (quantidade < 5) {
        return "Estoque baixo!";
    } else {
        return "Estoque OK";
    }
}


let continuar = "s";


while (continuar === "s" || continuar === "S") {
    let nomeDoVinho = validarEntrada("Digite o nome e tipo do vinho que deseja cadastrar:");
    let tipo = validarEntrada("Qual é o tipo de vinho? (Tinto, Branco, Rosé)");
    let safra = prompt("Qual é a safra dele?");
    let valorSafra = parseInt(safra);
    let pais = validarEntrada("Qual é o seu país de origem?");
    let qntd = parseInt(prompt("Qual é a quantidade atual em estoque?"));
    let avisoEstoque = verificarEstoqueBaixo(qntd);

    
    continuar = prompt("Deseja cadastrar outro vinho? Digite 's' para Sim ou qualquer outra tecla para Sair:");
}