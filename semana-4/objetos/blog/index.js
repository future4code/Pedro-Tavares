
// Tive que fazer tudo dentro dessa função... Quando tentava fazer separado não funcionava ;c 

function criarPost() {
    let tituloPost = document.getElementById('titulo-post').value
    let autorPost = document.getElementById('autor-post').value
    let conteudoPost = document.getElementById('conteudo-post').value

    let infoPost = {
        titulo: tituloPost,
        autor: autorPost,
        conteudo: conteudoPost
    }

    let container = document.getElementById('container-de-posts')
    container.innerHTML += `<div id="conteudoPostado"></div>`
    
    let divPostPublicado = document.getElementById('conteudoPostado')
    divPostPublicado.innerHTML += `<h1>${tituloPost}</h1>`
    divPostPublicado.innerHTML += `<h5><i> ${autorPost}</i></h5>`
    divPostPublicado.innerHTML += `<br><p>${conteudoPost}</p>`
}




//******** Rever pq nao deu certo no final de semana **********/

// Pegabdo Valores dos input

// let tituloPost = document.getElementById('titulo-post').value
// let autorPost = document.getElementById('autor-post').value
// let conteudoPost = document.getElementById('conteudo-post').value

// // Criando objetos com chaves que referencie semanticamente o seu valor. Nos valores são postas as variaveis acima

// let infoPost = {
//     titulo: tituloPost,
//     autor: autorPost,
//     conteudo: conteudoPost
// }

// console.log(infoPost.titulo)

