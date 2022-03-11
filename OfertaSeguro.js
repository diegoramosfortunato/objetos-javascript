const cliente = {
    nome: "Diego",
    idade: 23,
    cpf: "23456789089",
    email: "diego@email.com",
    fones: ["2134567897" , "214567890"],
    depedentes: [{
        nome: "Ana",
        parentesco: "namorada",
        dtnsc: "30/08/1998"

    },
    {
        nome: "Dandara",
        parentesco: "sobrinha",
        dtnsc: "03/04/2012"
    }],

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }

}

function seguro(obj){
    const pclientes = Object.keys(obj);
    if(pclientes.includes("depedentes")){
        console.log(`Seguro de vida para ${obj.nome}`)
    }
}


seguro(cliente)


