function verificacao(){
    let num1 = Number(prompt('Insira o primeiro valor:'))
    let num2 = Number(prompt('Insira o segundo valor:'))

    if(!num1 || !num2){
        alert('Números Invalidos!')
        verificacao()
    }else{
        let soma = num1+num2

        if(num1 == num2){
            alert(`Os números ${num1} e ${num2} são IGUAIS`)           
            if(soma > 10 && soma < 20){
                alert(`Sua soma é ${soma}, que é maior que 10 e menor que 20`)
            }else{
                alert(`Sua soma é ${soma}, que é menor que 10 ou maior que 20`)
            }
            verificacao()
        }else{
            alert(`Os números ${num1} e ${num2} NãO são iguais`)      
            if(soma > 10 && soma < 20){
                alert(`Sua soma é ${soma}, que é maior que 10 e menor que 20`)
            }else{
                alert(`Sua soma é ${soma}, que é menor que 10 ou maior que 20`)
            }
            verificacao()
        }
    }    
}
verificacao()

function comparaNumeros(num1, num2){
    const saoIguais = num1 === num2;
    const soma = num1 + num2
    const primeiraFrase = criaPrimeiraFrase(num1, num2)


    //if normal
    /*
    if(!saoIguais){
        return "São iguais"
    }else{
        return "não são iguais"
    }
    */

    //if ternário
    return saoIguais ? "São iguais" : "não são iguais";
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = ''
    if(num1 !== num2){
        saoIguais = 'nao'
    }

    return `Os números ${num1} e ${num2}${saoIguais} são IGUAIS`
    
}


