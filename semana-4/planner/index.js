function addTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    let valorInputTarefa = inputTarefa.value
    let valorDiasSemana = document.getElementById("dias-semana").value
    let diaEscolhido

    if (valorInputTarefa === ""){
        alert("Você esqueceu de digitat a tarefa!")
    }
    switch (valorDiasSemana) {
        case "domingo":
            diaEscolhido = document.getElementById("domingo")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "segunda":
            diaEscolhido = document.getElementById("segunda")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "terca":
            diaEscolhido = document.getElementById("terca")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "quarta":
            diaEscolhido = document.getElementById("quarta")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "quinta":
            diaEscolhido = document.getElementById("quinta")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "sexta":
            diaEscolhido = document.getElementById("sexta")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
        case "sabado":
            diaEscolhido = document.getElementById("sabado")
            diaEscolhido.innerHTML += `<p>${valorInputTarefa}</p>`
            break
    }

    inputTarefa.value = ""
}

