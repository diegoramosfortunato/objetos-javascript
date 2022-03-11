const cliente = {
    nome : "Diego",
    idade: 23,
    cpf : "123242356",
    email: "Diego.ramos@gmail.com"

}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(`CPF : ${cliente.cpf.substring(0,3)}*********;`) // exibe os 3 primeiros caracteres
