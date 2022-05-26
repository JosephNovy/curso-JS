function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 6
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //bom dia
        img.src = "foto_manha.png"
        document.body.style.background = '#d7978b'
    } else if  (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "foto_tarde.png"
        document.body.style.background = '#584237'
    } else {
        //boa noite
        img.src = "foto_noite.png"
        document.body.style.background = '#342b4a'
    }
}
