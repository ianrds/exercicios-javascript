function carregar() {

var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var saudação = document.getElementById('saudação')
//hora = 13 // para forçar um horário que não seja o atual

msg.innerHTML = `<p>Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {

    imagem.src = 'fotomanhã.png'
    document.body.style.background = '#e2cd9f'
    saudação.innerHTML = '<p>Bom dia!'
    
} else if (hora >= 12 && hora < 18){

    imagem.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
    saudação.innerHTML = '<p>Boa tarde!'

} else {
     imagem.src = 'fotonoite.png'
     document.body.style.background = '#515154'
     saudação.innerHTML = '<p>Boa noite!'
}
} 