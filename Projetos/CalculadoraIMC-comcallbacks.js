function imc(n1, n2, cb) {
    let peso = n1;
    let altura = n2;
    let _imc = (n1 / (n2 ** 2));
    if (typeof (peso || altura) === "string") {
        console.log("Erro! Um dos valores não é válido!")
    } else if ((arguments.length) != 3) {
        console.log("Erro! Existem valores que não foram informados!")
    } else {
        console.log(`O IMC é igual a: ${_imc} kg/m^2`)
        cb(_imc)
    }
}

function classIMC(imc) {

        let result = imc;
        if ((16 > result) && (result <= 16.9)) {
            console.log("Muito abaixo do peso")
        } else if ((17 < result) && (result <= 18.4)) {
            console.log("Abaixo do peso")
        } else if ((18.5 < result) && (result <= 24.9)) {
            console.log("Peso normal")
        } else if ((25 < result) && (result <= 29.9)) {
            console.log("Acima do peso")
        } else if ((30 < result) && (result <= 34.9)) {
            console.log("Obesidade Grau I")
        } else if ((35 < result) && (result <= 40)) {
            console.log("Obesidade Grau II")
        } else if (result > 40) {
            console.log("Obesidade Grau III")
        }
}


imc(93, 1.78, classIMC)
