function returnEvenValues(arrey){
    let evenNums = []
    for(let i = 0; i < arrey.length; i++){
        if(arrey[i] % 2 === 0){
            evenNums.push(arrey[i])
        }else{
            console.log(`${arrey[i]} não é par`)
        }
    }
    console.log(`Os números pares são: ${evenNums}`)
}
let arrey = [1,2,4,5,7,8]
returnEvenValues(arrey)