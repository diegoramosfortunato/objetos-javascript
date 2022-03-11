
//objeto
const clientes = {
    nome : "Diego",
    idade: 23,
    cpf  : "1312455467",
    email: "diego@gamil.com"
}


//array
const chaves = ["nome" , "idade" , "cpf" , "email"]

console.log(clientes[chaves[0]])

//dando print no objeto todo

chaves.forEach(info => console.log(clientes[info]))









