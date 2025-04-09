function verificar(){
    var data = new Date()
    var ano = parseInt(data.getFullYear())
    var nascimento = parseInt(document.getElementById('data').value)
    var idade = (ano) - (nascimento)
    var rads = document.getElementsByName('rads')
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (rads[0].checked) {
        gênero = 'homem' 

            if (idade <= 0 || idade> 200) {
            //ERRO
                document.getElementById('res').innerHTML = `[ERRO]Coloque uma data válida!`
        } else if (idade < 14) {
            //CRIANÇA
            document.getElementById('res').innerHTML = `Você é um ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'menino.jpg')
        } else if (idade < 18) {
            //ADOLESCENTE
            document.getElementById('res').innerHTML = `Você é um ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'garoto.jpg')
        } else if (idade < 40) {
            //Adulto
            document.getElementById('res').innerHTML = `Você é um ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'homem.jpg')
        } else if (idade < 120) {
            //IDOSO
            document.getElementById('res').innerHTML = `Você é um ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'idoso.jpg')
        } else if(idade > 120){
            //MORTO
            document.getElementById('res').innerHTML = `Você é um fantasma com ${idade} de idade??`
            img.src = 'caveiradoidona.jpg'
        }
    } else if (rads[1].checked){
        gênero = 'mulher'
        
        if (idade <= 0 || idade> 200) {
            //ERRO
                document.getElementById('res').innerHTML = `[ERRO]Coloque uma data válida!`
        } else if (idade < 14) {
            //CRIANÇA
            document.getElementById('res').innerHTML = `Você é uma ${gênero} com ${idade} anos de idade!`
            img.src = 'menina.jpg'
        } else if (idade < 18) {
            //ADOLESCENTE
            document.getElementById('res').innerHTML = `Você é uma ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'garota.jpg')
        } else if (idade < 40) {
            //Adulto
            document.getElementById('res').innerHTML = `Você é uma ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'mulher.jpg')
        } else if (idade < 120) {
            //IDOSO
            document.getElementById('res').innerHTML = `Você é uma ${gênero} com ${idade} anos de idade!`
            img.setAttribute('src', 'idosa.jpg')
        } else if(idade > 120){
            //MORTO
            document.getElementById('res').innerHTML = `Você é um fantasma com ${idade} de idade??`
            img.setAttribute('src', 'caveiradoidona.jpg')
        }
        
    }
    document.getElementById('res').appendChild(img)
}