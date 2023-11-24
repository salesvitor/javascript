function calcular() {
    var peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var res = window.document.getElementById('res')
    var n1 = Number(peso.value)
    var n2 = Number(altura.value)
    var s1 = n1 / (n2 ** 2)
    res.innerHTML = `Resultado: Seu IMC é ${s1.toFixed(1)}`
 }

