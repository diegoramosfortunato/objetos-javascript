const clientes = {
    nome  : "Diego",
    idade : 23,
    cpf   : "123454657879",
    email : "diego@email.com",
    fones : ["21456789090", "213456865543"],
    dependentes : [{

        nome       : "Ana",
        parentesco : "namorada",
        dtnsc      : "30/09/98"
    },
    {
        nome       : "Dandara",
        parentesco : "sobrinha",
        dtnsc      : "03/04/12"
    }


],

    saldo : 100,
    depositar : function(valor) {
    this.saldo += valor
}

}


let relatorio = "";
        //chave  //dentro
for(let info     in clientes) {
    if(typeof clientes[info] ===  " object " || typeof clientes[info] === "function")
    {
        continue
    }else{
        relatorio += `
                   ${info} ==> ${clientes[info]}
         `
    }
}

console.log(relatorio)