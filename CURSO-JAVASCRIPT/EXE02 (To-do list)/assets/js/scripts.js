let currentNumberWrapper = document.getElementById('currentNumber');

let butonSubtrair = document.getElementById('subtrair')
let butonAdicionar = document.getElementById('adicionar')

let currentNumber = 0;



function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;

    desabilitaNegativo()
 
    if(currentNumber > 0){
        currentNumberWrapper.style.color = 'blue'
        currentNumberWrapper.style.fontWeight = 'bold'
    }else if(currentNumber == 0){
        currentNumberWrapper.style.color = 'black'
        currentNumberWrapper.style.fontWeight = 'normal'
    }
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;    

    desabilitaNegativo()    

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
        currentNumberWrapper.style.fontWeight = 'bold'
    }
    else if(currentNumber == 0){
        currentNumberWrapper.style.color = 'black'
        currentNumberWrapper.style.fontWeight = 'normal'
    }
    
}

function desabilitaNegativo(){
  
    if(currentNumber <= -10){
        console.log ('desabilitado')
        butonSubtrair.disabled = true
        return true
    }else{
        console.log ('habilitado')
        butonSubtrair.disabled = false
        return false       
    }
}
