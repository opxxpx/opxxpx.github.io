function calcular() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let selector = document.getElementById("select").value;

    switch (selector) {
        case '+':
            let soma = n1 + n2;
            document.getElementById("resultado").innerHTML =  
            `O resultado da soma de ${n1} + ${n2} é = ${soma}`;
            break;
        
        case '-':
            let subtracao = n1 - n2;
            document.getElementById("resultado").innerHTML = 
            `O resultado da subtração de ${n1} - ${n2} é = ${subtracao}`;
            break;

            case '*':
                let multiplicacao = n1 * n2;
                document.getElementById("resultado").innerHTML = 
                `O resultado da multiplicação de ${n1} * ${n2} é = ${multiplicacao}`;
                break;
            
            case '/':
                let divisao = n1 / n2;
                document.getElementById("resultado").innerHTML = 
                `O resultado da divisão de ${n1} / ${n2} é = ${divisao}`;
                 break;
    }
}
