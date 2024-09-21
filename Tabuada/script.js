function calcular() {
    var txtnum = document.getElementById('txtnum')
    var txttab = document.getElementById('txttab')

    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Digite um número.')        
    } else {
        var num = Number(txtnum.value)
        var c = 1
        txttab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `txttab${c}`
            txttab.appendChild(item)
            c++
        }
    }
}