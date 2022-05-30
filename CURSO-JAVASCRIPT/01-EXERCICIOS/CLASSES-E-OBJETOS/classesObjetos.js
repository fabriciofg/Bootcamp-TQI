class contaBancaria{
    // sempre começa com um construtor
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // sempre quem tem um get ou set em cima do atributo inicia a variavel com o _
    }   

    //Get e Set
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    //Métodos sacar e depositar
    sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada - Saldo Insuficiente"
        }else{
            this._saldo = this._saldo - valor;
            return this._saldo
        }
            

    }
    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
    
}

class contaCorrente extends contaBancaria { // extends contaBancaria - significa que conta corrente é filha de conta bancaria 
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){ 
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'paopanca';
    }   
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }   

    sacar(valor){
        if(valor >= 500){
            return "Valor não permitido, valor permitido abaixo de 500,00"
        }else if(valor >= this._saldo){
            return "Operação Negada - Saldo Insuficiente"            
        }else{
            this._saldo = this._saldo - valor;
            return this._saldo            
        }
    }
}


/*
const minhaConta = new contaCorrente(1,234,true)
undefined
minhaConta._saldo
0
minhaConta.depositar(1000)
1000
minhaConta.saldo
1000
minhaConta.sacar(500)
500
minhaConta.saldo
500
minhaConta.sacar(600)
'Operação Negada - Saldo Insuficiente'
const contaPoupanca = new contaPoupanca(2,123)
VM697:1 Uncaught SyntaxError: Identifier 'contaPoupanca' has already been declared
const contaPoupanca = new contaPoupanca(2,111)
VM728:1 Uncaught SyntaxError: Identifier 'contaPoupanca' has already been declared
const contaPoupanca = new contaPoupanca(2,5)
VM750:1 Uncaught SyntaxError: Identifier 'contaPoupanca' has already been declared
const contaUniver = new contaUniversitaria(25,125)
undefined
const contaPoup = new contaPoupanca(2,5)
undefined
contaUniver.depositar(2000)
2000
contaUniver.sacar(500)
'Valor não permitido, valor permitido abaixo de 500,00'
contaUniver.sacar(499)
1501
contaPoup.depositar(1000000000000)
1000000000000
contaPoup.sacar(25474)
999999974526


*/