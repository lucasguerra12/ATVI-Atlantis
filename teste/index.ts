import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone"; 
let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let telefoneTitular = new Telefone()
telefoneTitular.ddd = `21`
telefoneTitular.numero = `12345-6789`
cliente.telefones.push(telefoneTitular)

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)

dependente.endereco = (cliente.endereco.clonar() as Endereco)
for (let telefone of cliente.telefones) {
    let telefoneClonado = telefone.clonar() as Telefone
    dependente.telefones.push(telefoneClonado)
}

dependente.titular = cliente
cliente.dependentes.push(dependente)


cliente.telefones[0].numero = "99999-9999"

console.log("--- TITULAR (DOM PEDRO II) ---")
console.log(cliente);

console.log("\n--- DEPENDENTE (PRINCESA ISABEL) ---")
console.log(dependente);

console.log("\n--- VERIFICAÇÃO DA CLONAGEM ---")
console.log(`Telefone do Titular: ${cliente.telefones[0].numero}`); 
console.log(`Telefone do Dependente: ${dependente.telefones[0].numero}`); 