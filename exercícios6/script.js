let numeros = []
let maior = 0
let menor = 100

function adicionar(){
    let n = document.getElementById('num')
    let num = Number(n.value)
    let lista = document.getElementById('lista')
    let item = document.createElement('option')
    if (n.value.length == 0 || num > 100 || num < 1) {
        alert('Insira um valor válido!')
    } else if (numeros.indexOf(num) == -1) {
        numeros.push(num)
        lista.style.border = 'groove'
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
        lista.style.width = '450px'
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    } else if (numeros.indexOf(num) != -1){
        alert(`Valor já inserido!`)
    }
    n.value = ''
    n.focus()
}

function finalizar(){
    if (numeros.length == 0) {
        alert("Adicione número na lista!")
    } else {     
        let quantidade = numeros.length
        let res1 = document.getElementById('r1')
        let res2 = document.getElementById('r2')
        let res3 = document.getElementById('r3')
        let res4 = document.getElementById('r4')
        let res5 = document.getElementById('r5')
        res1.innerHTML = `Ao todo, temos ${quantidade} números cadastrados!`
        res2.innerHTML = `O maior número informado foi ${maior}!`
        res3.innerHTML = `O menor número informado foi ${menor}!`
        res4.innerHTML = `A soma dos números foi ${soma()}!`
        res5.innerHTML = `A media dos números é ${media()}!`
    }
}

function soma() {
    let n = 0
    for(let c = 0; c < numeros.length; c++){
        n += numeros[c]
   }
   return n
}

function media() {
    media = soma()/numeros.length
    return media
}

function limpar() {
    numeros = []
    let lista = document.getElementById('lista')
    let res1 = document.getElementById('r1')
    let res2 = document.getElementById('r2')
    let res3 = document.getElementById('r3')
    let res4 = document.getElementById('r4')
    let res5 = document.getElementById('r5')
    lista.innerHTML = ''
    res1.innerHTML = ``
    res2.innerHTML = ``
    res3.innerHTML = ``
    res4.innerHTML = ``
    res5.innerHTML = ``
    lista.style.border = 'none'
}