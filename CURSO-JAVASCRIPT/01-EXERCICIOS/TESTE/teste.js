let equipes = 10;
let partidas = 0;

do{
    if(equipes%2 == 0){
        equipes = (equipes/2)
        partidas = partidas + equipes
    }else{
        equipes = (equipes-1)
        equipes = (equipes/2)        
        partidas = partidas + equipes+1
    
    }   
}while(equipes > 2)
console.log(`Número de paridas: ${partidas}`)