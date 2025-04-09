var botao = document.getElementById('verificar')
function verifique(){
    let num = document.getElementById('numero')
    let tab= document.getElementById('lista')
    botao.style.background = '#c7deffe7'
    if(num.value.length != 0){
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c<=10; c++) {
            
            let item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        
    } else {
        alert('Digite um número')
    }
    botao.style.background = '#2b80f6e7'
}  

function entrou(){
    botao.style.background = '#1c57abe7'
}

function saiu(){
    botao.style.background = '#2b80f6e7'
}