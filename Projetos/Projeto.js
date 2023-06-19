function escondeNumero (numero) {
    let num = numero.toString()
    let tamanho = num.length - 5
    let tampo = ""
    console.log(`Numero ${num.slice(0, 3)}${tampo.padEnd(tamanho, "*")}${num.substring(tamanho, (tamanho-2))} cadastrado com sucesso!`)
}

let numer = escondeNumero(51986211007)

