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

console.log(comparaNumeros(1,2))

