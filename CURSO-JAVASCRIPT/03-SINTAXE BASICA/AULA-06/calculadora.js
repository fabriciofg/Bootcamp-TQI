function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 -Soma(+)\n 2 -Subtração(-)\n 3 -Multiplicação(*)\n 4 -Divisão(/)\n 5 -Divisão Inteira(%)\n 6 -Potenciação(**)'))
    
    if(!operacao || operacao >6){
        alert('Opção não encotrada!')
        calculadora()
    }else{      
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let resultado = 0

        if(!n1 || !n2){
            alert('Números Invalidos!')
            calculadora()
        }else{
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisao(){
                resultado = n1 / n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoInteira(){
                resultado = n1 % n2
                alert(`O resto da divisão entre ${n1} e ${n2} itgual a: ${resultado}`)
                novaOperacao()
            }
            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} ** ${n2} = ${resultado}`)
                novaOperacao()
            }

            function novaOperacao(){
                let opcao = Number(prompt('Deseja fazer outra operação: \n1-SIM \n2-NÃO'))
                if(opcao == 1){
                    calculadora()
                }else if(opcao == 2){
                    alert('Até mais')
                }else{
                    alert('Operação não encotrada!')
                    novaOperacao()            
                }
            }
/*
            if(operacao ==1){
                soma()
            }else if(operacao ==2){
                subtracao()
            }else if(operacao ==3){
                multiplicacao()
            }else if(operacao ==4){
                divisao()
            }else if(operacao ==5){
                divisaoInteira()
            }else if(operacao ==6){
                potenciacao()
            }
*/
            switch (operacao){
                case 1:
                    soma()
                    break
                    case 2:
                        subtracao()
                        break
                        case 3:
                            multiplicacao()
                            break
                            case 4:
                                divisao()
                                break
                                case 5:
                                    divisaoInteira()
                                    break
                                    case 6:
                                        potenciacao()
                                        break
            }
        }
    }
}
calculadora()
