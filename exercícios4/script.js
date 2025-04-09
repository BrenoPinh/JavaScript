function verifique(){
        var inicio = Number(document.getElementById('inicio').value)
        var fim = Number(document.getElementById('fim').value)
        var passo = Number(document.getElementById('passo').value)
        var res = document.getElementById('res').innerHTML
        if (inicio == ''  || fim == '' || passo == '') {
            alert('Coloque valores válidos!')
        } else if(inicio<fim){
            for(inicio; inicio<=fim; inicio+=passo){
                res += `${inicio}`
                res+= `<span>\u{1F449}<span>` 
                document.getElementById('res').innerHTML= res
            }
            document.getElementById('res').innerHTML= res+= `<span>&#127988<span>` 
        } else if(inicio>fim){
            for(inicio; inicio>=fim; inicio-=passo){
                res += `${inicio}`
                res+= `\u{1F449}` 
                document.getElementById('res').innerHTML= res
        }document.getElementById('res').innerHTML= res+= `<span>&#127988<span>`
    }
}  