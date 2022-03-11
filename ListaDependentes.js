const clientes = {
    nome : "diego",
    idade : 23,
    cpf : "2345678934567",
    email : "diego@email",
    fones : ["213456789" ,  "21345678980"],
    dependentes : [{
        nome : "Ana Carolina",
        parentesco : "namorada",
        DTNSC : "30/08/1998"
    }] // trasformou dependentes em array
}

clientes.dependentes.push({
       nome : "brisa mel",
       idade : 1,
       DTNSC : "07/03/2021"

})


console.log(clientes.dependentes)

const nova = clientes.dependentes.filter(dependente => dependente.DTNSC === "07/03/2021")

console.log(nova[0].nome)

