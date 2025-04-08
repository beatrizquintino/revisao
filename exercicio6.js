function exercicio6() {
    let decisao = 0;

    do {

        let num1 = 0;
        let num2 = 0;
        let resultado = 0;

        decisao = parseInt(prompt("Digite:" + "\n" + "[1] para somar" + "\n" + "[2] para subtrair" + "\n" + "[3] para multiplicar" + "\n" + "[4] para dividir" + "\n" + "[5] para sair"));

        if (decisao != 5) {
            num1 = parseInt(prompt("Digite o primeiro número:"));
            num2 = parseInt(prompt("Digite o segundo número:"));
        }

        switch (decisao) {
            case 1:
                resultado = num1 + num2;
                alert("Resultado da soma: " + resultado);
                break;
            case 2:
                resultado = num1 - num2;
                alert("Resultado da subtração: " + resultado);
                break;
            case 3:
                resultado = num1 * num2;
                alert("Resultado da multiplicação: " + resultado);
                break;
            case 4:
                if (num2 > num1) {
                    alert("Operação inválida");
                } else {
                    resultado = num1 / num2
                    alert("Resultado da divisão: " + resultado);
                }
                break;
            default:
                break;
        }

    } while (decisao >= 1 && decisao <= 4)

}