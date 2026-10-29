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
let vinhoMaisAntigo, safraMaisAntiga;
let continuar = "s";
let contador = 0, numeroEstoqueBaixo = 0;

function LogarEAvisar(){
    console.log("Vinho: " + nomeDoVinho + " - Tipo: " + tipo + " | Safra: " + safra + " | País: " + pais + " | Estoque: " + qntd + " (" + avisoEstoque + ")" + " Classificação: " + classificacao);
    alert("Dados cadastrados! Cheque-os no console (Dica: Aperte F12)")
    console.log("Cadastros feitos: " + contador + " | Vinhos com estoque baixo: " + numeroEstoqueBaixo + " | Vinho mais antigo: " + vinhoMaisAntigo)
}

while (continuar === "s" || continuar === "S") {
    nomeDoVinho = validarEntrada("Digite o nome do vinho que deseja cadastrar:");
    tipo = validarEntrada("Qual é o tipo de vinho? (Tinto, Branco, Rosé)");
    safra = prompt("Qual é a safra dele?");
    valorSafra = parseInt(safra);
    if (vinhoMaisAntigo === undefined || valorSafra < safraMaisAntiga) {
        vinhoMaisAntigo = nomeDoVinho;
        safraMaisAntiga = valorSafra;
    }
    pais = validarEntrada("Qual é o seu país de origem?");
    qntd = parseInt(prompt("Qual é a quantidade atual em estoque?"));
    avisoEstoque = verificarEstoqueBaixo(qntd);
    ContarEstoqueBaixo(avisoEstoque);
    contador++;
    continuar = prompt("Deseja cadastrar outro vinho? Digite 's' para Sim ou qualquer outra tecla para Sair:");
    LogarEAvisar()
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

function ContarEstoqueBaixo(aviso) {
    if (aviso === "Estoque baixo!") {
        numeroEstoqueBaixo++;
    }
}

ClassificaoDeVinhos();