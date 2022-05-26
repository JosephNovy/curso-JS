let num = [2,3,5,7,8,9]
num.sort()
/*for(let pos = 0; pos < num.length; pos++){
    console.log(`a posicao ${pos} tem o valor ${num[pos]}`)
}*/
 for (let pos in num){
     console.log(`a posicao ${pos} tem o valor ${num[pos]}`)
 }