function validaArrey(arrey, num){
    try {        
        if(!arrey || !num){
            throw new ReferenceError("Envie os parâmetros")        
        }
        if(typeof(arrey) !== 'object'){
            throw new TypeError("arrey não é do tipo object")
        }
        if(typeof num !== 'number'){
            throw new TypeError('num não é do tipo number')
        }
        if(arrey.length !== num){
            throw new RangeError("Tamanho do arrey diferente do numero informado")
        }    
        return `Retorno da função: ${arrey}`   

    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            console.log(error.message)
        } else if(error instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(error.message)
        } else if(error instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(error.message)
        }else{
            console.log("Ocorreu um tipo erro não esperado: " + error)
        }
    }
}
    


console.log(validaArrey([1,2,3,4,5], 5)) 