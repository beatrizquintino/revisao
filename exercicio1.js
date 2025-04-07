function exercicio1() {
    let numMacas = parseInt(prompt("Digite a quantidade de maçãs compradas"));


    if (numMacas >= 12) {
        let custoTotal = numMacas * 1.95
    } else {
        custoTotal = numMacas * 2.30
    }

    alert("O custo total da sua compra foi: R$" + custoTotal)
}