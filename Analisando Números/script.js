let numero = document.querySelector('input#txtnum')
let sel = document.getElementById('txtsel')
let res = document.querySelector('div#res')
let lista = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(numero.value) && inList(numero.value, lista)) {
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        sel.appendChild(item)
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
    numero.focus()
    numero.value = ''
    res.innerHTML = ''
}

function analisar() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de analisar.')
    } else {
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for(pos in lista) {
            soma = soma + lista[pos]
            if (lista[pos] > maior) {
                maior = lista[pos]
            }
            if (lista[pos] < menor) {
                menor = lista[pos]
            }
            media = soma / lista.length
        }

        res.innerHTML = ''
        res.innerHTML += `Foram adicionados ${total} valore(s).`
        res.innerHTML += `<p>O maior número da lista é o ${maior}`
        res.innerHTML += `<p>O menor número da lista é o ${menor}`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}`
        res.innerHTML += `<p>A media de todos os valores é ${media}`
    }
}