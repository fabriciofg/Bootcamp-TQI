// tipos primitivos

//bollean
var VouF = false;
console.log(VouF)
console.log(typeof(VouF))

//number
var numeroQualquer = 1
console.log(numeroQualquer)
console.log(typeof(numeroQualquer))

//String
var nome = 'Fabrício'
console.log(nome)
console.log(typeof(nome))

//Sem declarar - Tipo não definido
var variavel1
console.log(variavel1)
console.log(typeof(variavel1))
//Tipo variavel let
let variavel2 = 'teste'
variavel2 = 'globo'
console.log(variavel2)
console.log(typeof(variavel2))

// tipo variavel cost
const variavel3 = 'constante'
console.log(variavel3)
console.log(typeof(variavel3))


// Escopo Global - quando a cariavel e declarada fora de qualquer bloco, ficando disponivel em todo o bloco
var escopoGlobal = 'global';
console.log(escopoGlobal)


//Escopo Local - quando a variavel é declarada dentro de um bloco, e sua visibilidade pode ficar disponível ou não
function escopoLocal(){
    let escopoLocalInterno = 'Local';
}
console.log(escopoLocalInterno)


// Atribuição =
var atribuicao = 0

//comparação ==
var comparacao = 0 == '0'
console.log(comparacao)

//comparação identica === 
var comparacaoIdentica = 0 === '0'
console.log(comparacaoIdentica)
