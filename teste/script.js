function calcular() {
    var inic = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (inic.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel calcular'
        window.alert('[ERRO], consulte os dados!')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            res.innerHTML = '[ERRO] O valor do passo eh zero, sera considerado o valor 1: Contando...'
            p = 1
        }
    }
    if (i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
    } else {
        for (var c = i; c >= f; c -= p){
            res.innerHTML += `${c} `
        }
    }
}