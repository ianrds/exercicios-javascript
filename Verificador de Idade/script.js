function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'homembebe.png')
            } else if (idade <= 11){
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', 'mulherbebe.png')
            } else if (idade <= 11) {
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade <= 20) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulheradulta.png')
            } else {

                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}