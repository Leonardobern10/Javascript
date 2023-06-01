function media() {
    let soma = 0;
    let result = undefined;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    result = soma / arguments.length
    if (typeof soma == "string"){
        console.log("Error")
    } else {
    console.log(result || 0)
    }
}

media(2, 9, "8")