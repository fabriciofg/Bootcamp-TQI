const alunos =[
    {
        nome: 'Joao',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '20',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '20',
    },
]



function alunosAprovados(arrey, media){
    let aprovados = []
    for(let i = 0; i < arrey.length; i++){        
        if(arrey[i].nota >= media){            
            aprovados.push(arrey[i].nome)            
        }
    }
    return aprovados
}

//Usando técica object destructuring
function alunosAprovadosObjDesc(arrey, media){
    let aprovados = []

    for(let i = 0; i < arrey.length; i++){
        
        const {nota, nome} = arrey[i]
        
        if(nota >= media){            
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))
console.log('----------------------------------------------')
console.log(alunosAprovadosObjDesc(alunos, 5))