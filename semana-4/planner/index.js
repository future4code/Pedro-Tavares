function addTarefa(){
    const inputTarefa = document.getElementById("tarefa")
    let valorInputTarefa = inputTarefa.value

    let diasDaSemana = document.getElementById('dias-semana')
    
    let valorDiasDaSemana = diasDaSemana.value
    let listaDiaSemana = document.getElementsByClassName('semana')
    let valorListaDiaSemana = listaDiaSemana.value
    switch(valorDiasDaSemana){
        case "Domingo":
            valorDiasDaSemana = valorListaDiaSemana.innerHtml += `<li>${valorInputTarefa}</li>`
    }


    
    inputTarefa.value = ""
}