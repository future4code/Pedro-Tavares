// 1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// No primeiro console.log seria impresso: 10
// No segundo console.log seria impresso: 10 5


// 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// Seria impresso: 20 10 10

// ----------------------Exercícios de escrita de código--------------------------


// 1

let nome
let idade
console.log(typeof (nome))
console.log(typeof (idade))

//         // Foi impresso esse tipo porque as variáveis nao tiveram valor atribuido.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof (nome))
console.log(typeof (idade))

//         //Ao imprimir os tipos da variavel nome e idade ambas ficaram do tipo string. Pensava que a idade fosse ficar como number. Mas pelo jeito o prompt pega tudo como string.

console.log("Olá " + nome + ", você tem " + idade + " anos")


// 2

let nome
let idade
let profissao
let nacionalidade
let email

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
profissao = prompt("Qual a sua profissão?")
nacionalidade = prompt("Qual a sua nacionalidade?")
email = prompt("qual seu email?")

console.log("1. Qual seu nome?")
console.log("Resposta: " + nome)
console.log("2. Qual sua idade?")
console.log("Resposta: " + idade)
console.log("3. Qual a sua profissão?")
console.log("Resposta: " + profissao)
console.log("4. Qual a sua nacionalidade?")
console.log("Resposta: " + nacionalidade)
console.log("5. Qual o seu email?")
console.log("Resposta: " + email)


//3

let comidasFavoritas = ['Paella', 'Osso buco', 'Queijos', 'Burrito', 'Pizza']
console.log(comidasFavoritas)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


comidasFavoritas[1] = prompt('Qual sua comida favorita?')

console.log(comidasFavoritas)


//4

let perguntas = ['O paciente está vivo?', 'O paciente é a maior de 18 anos?', 'O paciente é intolerante a lactose?',]

let infoPaciente = [true, true, false]

console.log(perguntas[0], infoPaciente[0])
console.log(perguntas[1], infoPaciente[1])
console.log(perguntas[2], infoPaciente[2])

