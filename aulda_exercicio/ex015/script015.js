function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
             genero = 'Homem'
             if (idade >= 0 && idade <= 12){
                 //crianca
                
                img.src ='crianca_mc.png'
            } else if (idade > 12 && idade <=23 ) {
                 //jovem
                
                img.src ='jovem_mc.png'
            } else if (idade >23 && idade <=65) {
                     //adulto
                
                img.src ='adulto_mc.png'
            }else {
                
                img.src ='idoso_mc.png'
                //idoso
            }   
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12){
                
                img.src ='crianca_fm.png'
                 //crianca
            } else if (idade > 12 && idade <=23 ) {
                 //jovem
                
                img.src ='jovem_fm.png'
            } else if (idade >23 && idade <=65) {
                 //adulto
                
                img.src ='adulto_fm.png'
            }else {
                
                img.src ='idoso_fm.png'
                 //idoso
            }  
            
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = ` ${genero} e ${idade}`
        res.appendChild(img)
        
    }
}