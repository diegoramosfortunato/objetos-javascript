const clientes = {
    nome : "diego",
    idade : 23 ,
    cpf : "12345678970",
    email : "Diego@email",
    fones : ["2113454678" , "21256786789"],
    dependentes : [{
        nome : "Ana",
        parentesco : "namorada",
        dtnsc : "30/08/2021" },
     {
      nome : "dandara",
      idade : 9,
      dtnsc : "2012/04/03"

     }
    ],

    saldo : 100,
    depositar : function(valor){
        this.saldo += valor
    }

}

console.log(clientes.saldo)

clientes.depositar(30) // função

console.log(clientes.saldo)



