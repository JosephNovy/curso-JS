let num = document.querySelector('input#num')
let lista = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert(['ERRO, escolha um valor valido!'])
    }
    num.value = ""
    num.focus()
}
function finalizar() {
     if (valores.length == 0){
         window.alert('Adicione valores antes de finalizar!')
     } else {
         let total = valores.length
         let maior = valores[0]
         let menor = valores[0]
         let soma = 0
         let media = 0
         for(let pos in valores) {
            soma += valores[pos]
            media = soma/valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
         }

         res.innerHTML = ""
         res.innerHTML += `<p> Ao todo temos ${total} elementos.</p>`
         res.innerHTML += `<p>O maior valor encontra foi ${maior}.</p>`
         res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
         res.innerHTML += `<p>A soma de todos os valores foi ${soma}.</p>`
         res.innerHTML += `<p>A media dos valores eh ${media}.</p>`
     }
 }