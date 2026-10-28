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

let nomeDoVinho, tipo, valorSafra, pais, qntd, avisoEstoque, classificacao;
let continuar = "s";

while (continuar === "s" || continuar === "S") {
    nomeDoVinho = validarEntrada("Digite o nome do vinho que deseja cadastrar:");
    tipo = validarEntrada("Qual é o tipo de vinho? (Tinto, Branco, Rosé)");
    safra = prompt("Qual é a safra dele?");
    valorSafra = parseInt(safra);
    pais = validarEntrada("Qual é o seu país de origem?");
    qntd = parseInt(prompt("Qual é a quantidade atual em estoque?"));
    avisoEstoque = verificarEstoqueBaixo(qntd);
    
    continuar = prompt("Deseja cadastrar outro vinho? Digite 's' para Sim ou qualquer outra tecla para Sair:");
}

function ClassificaoDeVinhos(){
    if ((2026 - valorSafra) <= 3) {
        classificacao = 'Jovem'
    } else if ((2026 - valorSafra) <= 7 && (2026 - valorSafra) > 3) {
        classificacao = 'Amadurecido'
    } else {
        classificacao = 'Antigo'    
    }
}

function LogarEAvisar(){
    console.log("Vinho: " + nomeDoVinho + " - Tipo: " + tipo + " | Safra: " + safra + " | País: " + pais + " | Estoque: " + qntd + " (" + avisoEstoque + ")" + " Classificação: " + classificacao);
    alert("Dados cadastrados! Cheque-os no console (Dica: Aperte F12)")
}

ClassificaoDeVinhos();
LogarEAvisar();