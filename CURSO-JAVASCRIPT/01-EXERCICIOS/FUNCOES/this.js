const pessoa1 = {
        nome: 'Joao',
        idade: 30,
    }
 const pessoa2 = {
        nome: 'Isabela',
        idade: 15,        
    }
const pessoa3 = {
        nome: 'Pedro',
        idade: 05,        
    }
 const pessoa4 = {
        nome: 'Carol',
        idade: 28,        
    }
const animal = {
        nome: 'Freddie',
        idade: 3,  
        raça: 'shitzu',      
    }

function calculaIdade(anos){    
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
    
}

console.log(calculaIdade.call(pessoa4,5)) // usando call
console.log(calculaIdade.apply(pessoa4,[5])) // usando aplay
