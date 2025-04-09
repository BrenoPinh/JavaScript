let amigo = {
    nome:'José', 
    sexo: 'M',
    idade: 18, 
    peso: 85.4,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}Kg`)