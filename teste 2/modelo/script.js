let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.includes(Number(n))){
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        
    } else {
        window.alert('[ERRO], Pro favor digite um numero valido !')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Escolha algum numero antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media = soma/total
            if(valores[pos] > maior)
                valores[pos] = maior
            if (valores[pos] < menor)
                valores[pos] = menor
        }
        res.innerHTML = ""
        res.innerHTML+=`<p>O total de numeros adicionados foi ${total}.</p>`
        res.innerHTML+=`<p>O maior numero foi ${maior}.</p>`
        res.innerHTML+=`<p>O menor numero foi ${menor}.</p>`
        res.innerHTML+=`<p>A soma dos numeros adicionados foi ${soma}.</p>`
        res.innerHTML+=`<p>A media dos numeros adicionados foi ${media}.</p>`
        
    }
    
}
