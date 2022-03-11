const clientes =  {
    nome : "Ana",
    idade : 23,
    cpf : "1234567896",
    email : "Ana@email.com",
    fones : ["21567890678" , "2154678970"]
}


clientes.dependente = {
    nome : "Diego",
    parentesco : "Namorado",
    dtnsc : "20/09/1998"

}

console.log(clientes )

clientes.dependente.nome = "Diego Ramos"

console.log(clientes)