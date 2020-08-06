function limparInput(){
    document.getElementById("valor-despesa").value=""
    document.getElementById("descricao-despesa").value=""
}

let valorDespesa = document.getElementById("valor-despesa").value
let tipoDespesa = document.getElementById("tipo-despesa").value
let descricaorDespesa = document.getElementById("descricao-despesa").value

const minhasDespesas = {
    valor: valorDespesa,
    tipo: tipoDespesa,
    descricao: descricaorDespesa
}

const arrayObjetos = []

function armazenarInfo(){
    valorDespesa
    tipoDespesa
    descricaorDespesa
    minhasDespesas
    limparInput()
    return minhasDespesas


}

console.log(minhasDespesas)


