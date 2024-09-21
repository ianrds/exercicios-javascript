function verificar() {
    var data = new Date() //pega a data atual
    var ano = data.getFullYear() //pega o ano atual atraves da variavel que pega a data atual
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro]')        

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'homembebe.png')
            } else if (idade <= 12) {
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
        } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade.`
    res.appendChild(img)
    }
}