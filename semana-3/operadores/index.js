//1.
    //A.  false

    //B.  false

    //C.  false

    //E.  boolean

//2.

    //A.  undefined
    //B.  null
    //C.  11
    //D.  0
    //E.  19
    //F.  25


// ------------------------------------

//1

let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade da sua melhor amiga?")
let comparacaoIdade = console.log("Sua idade é maior do que a do seu amigo?", idade > idadeAmigo)

let sumDireferenca = console.log("Diferença de", Number(idade - idadeAmigo), "anos")

//2

let evenNumber = Number(prompt("Porfavor, insira um número par:"))

console.log(evenNumber % 2)
    //c. Sim, todo número par dividido por 2 dá modulo 0
    //d. Sim, como a divisão é "quebrada" dá modulo 1.

//3

let listaDeTarefas = []

let tarefaAFazer1 = Array(prompt("Irei te perguntar 3 tarefas. Primeiro: Me conte a 1ª tarefas que tu precisa realizar hoje:"))

let tarefaAFazer2 = Array(prompt("Me conte a 2ª tarefa:"))

let tarefaAFazer3 = Array(prompt("Me conte a 3ª tarefa:"))

listaDeTarefas.push(tarefaAFazer1)
listaDeTarefas.push(tarefaAFazer2)
listaDeTarefas.push(tarefaAFazer3)

console.log(listaDeTarefas)

//4

let name = prompt("Qual o seu nome?")
let email = prompt("Qual seu email?")

console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinde,", name, "!")