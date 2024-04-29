// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes,
// e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".

const nome = ["Fred", "Conca" ,"Ganso" ,"Thiago Neves","J.Arias"];

for (let i = 0; i < nome.length; i++) {
    console.log( i + 1 + ":" + nome[i])
}