function carregar(){
    var img = document.getElementById("imagem")
    var msg = document.getElementById("msg")
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são exatamanete ${horas} horas!`
    if (horas >= 0 && horas< 12) {
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.backgroundColor = '#dad9d8d8'
    } else if (horas < 18){
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.backgroundColor = '#da9b83'
    } else{
        //BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.backgroundColor = '#082d4ed8'
    }
}

