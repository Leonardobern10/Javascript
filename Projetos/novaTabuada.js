function tabuada (n1){
    let arrEx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    arrEx.forEach(function(el){
    let result = n1 * el
    console.log(`${n1} x ${el} = ${result}`)
    return true
})
}

tabuada(9)