function calcular() {
    var inic = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (inic.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO, faltam dados!')
    } else {
        res.innerHTML= 'Contando: '
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo invalido! Considerando passo = 1')
            p = 1
        }
        if (i < f){
            for (var c = i; c<= f; c += p){
                //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }
        
        } else {
            for ( var c = i; c>=f; c-= p){
                //contagem regressiva
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   

}

