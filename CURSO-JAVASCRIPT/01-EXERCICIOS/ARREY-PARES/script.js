//Solução 1
function substituiPares(arrey){
    if(!arrey.length){
        console.log('Informe um arrey')
        return false;
    }
    for(let i = 0; i <= arrey.length; i++){
        if(arrey[i] === 0){
            console.log("Você já é zero!!")
        }else if(arrey[i] % 2 === 0){
            console.log(`Substituindo ${arrey[i]} por 0...`)
            arrey[i] = 0           
        }else{
            console.log(`${arrey[i]} impar`)            
        }        
    }  
    console.log(arrey)    
}

substituiPares([0,1,2,3,4,5,6,7,8,9,10])