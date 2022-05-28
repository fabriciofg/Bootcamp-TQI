//Solução 01
function verificaPalidromo(string){    
    if(!string){
        console.log('string não informada!')
        return
    }
    return string.split("").reverse().join("") === string       
}

console.log(verificaPalidromo('teste'))




//Solução 2
function verificaPalidromo2(string2){
    if(!string2){
        console.log('string não informada!')
        return
    }
    for(let i = 0; i < string2.length / 2; i++){
        if(string2[i] !== string2[string2.length -1 - i]){
            return false
        }
        return true
    }
}

console.log(verificaPalidromo2('ovo'))