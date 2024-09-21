function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('impossível contar! Faltam dados.')

    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = ('Contando: <br>')
        if (p <= 0){
            window.alert('Passo inválido. Considerando passo como 1.')
            p=1
        } 
        if (i < f) {
            for (let c = i ; c <= f ; c=c+p) {
                res.innerHTML += `${c} \u{1F3C3} `
            }
        } else if (i > f) {
            let c = i
            while (c >= f) {
                res.innerHTML += `${c} \u{1F3C3} `
                c=c-p
            }
        }
        res.innerHTML += `\u{1F3C1} Chegou! `
    }
}