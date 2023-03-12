import cursos from 'readline-sync';

let cursos_idomas = [
    {nome: "Ingles", preco:2500, carga:160 },
    {nome: "Espanhol", preco:1500, carga:110},
    {nome: "Francês", preco:3600, carga:200},
    {nome: "Chinês", preco:5500, carga:400},
    {nome: "Alemão", preco:3800, carga:230}
];

for (let cursos of cursos_idomas){

    let valor_hora = cursos.preco / cursos.carga;

    console.log("Nome do curso: " + cursos.nome);
    console.log("Carga horária do curso: " + cursos.carga + " horas");
    console.log("Preço do curso: " + "R$" + cursos.preco + ",00");
    
    if(valor_hora >= 15){
        console.log("Hora/aula superior ou igual a R$15,00")
    } else{
        console.log("Hora/aula inferior a R$15,00")
    }


    console.log("\n")

}