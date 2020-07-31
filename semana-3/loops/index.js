// ### EXERCÍCIOS DE INTERPRETAÇÃO ###

    // EXERCÍCIO 1

        // O código está pegando o valor da variável "i", verificando se ele é menor do que 5. Se menor do que 5 ele acrescenta 1 a variável "i". Depois disso ele executa o códiogo entre as chves. O código das chaves pega o valor da variável "valor" e acrescenta ao valor da variável "i". E por fim ele printa o valor da variável "valor" no console.
        // O resultado printado será: 0, 1, 2, 3, 4 (cada um em uma linha.) 

    // EXERCÍCIO 2

        // A. Serão impressos os valores 10, 11, 12 e 15
        // B. Acredito que sim. Acho que ficaria assim dentro das chaves: console.log(numero).


// ### EXERCÍCIOS DE ESCRITA ###
    
     let arrayOriginal = [1, 20, 40, 50, 80, 91, 100]

    // A.
    
        // let arrayOriginal = [1, 20, 40, 50, 80, 91, 100]

        // for (let numeros of arrayOriginal) {
        //     console.log(numeros)
        // }

    // B.

        // let arrayOriginal = [1, 20, 40, 50, 80, 91, 100]

        // for (let numeros of arrayOriginal) {
        // console.log(numeros / 10)
        // }

    // C.

        // let arrayOriginal = [1, 20, 40, 50, 80, 91, 100]
        // let arrayEvenNum = []
        // for (let evenNum of arrayOriginal) {
        //     if ( evenNum % 2 === 0){
        //         arrayEvenNum.push(evenNum) //Não sei se está certo fazer isso. Mas foi o que pensei na hora.
        //     }
        // }
        // console.log(arrayEvenNum)

    // D.
    
    /*
        for(let i = 0; i < arrayOriginal.length; i++) {
            let numero = arrayOriginal[i]
            let newArray = [`O elemento do índex ${i} é: ${numero}`]
            console.log(newArray)
        }
    */

    // E. *NÃO CONSEGUI RESOLVER AINDA*
        
    let valorMaximo = 0
        for (let numero of arrayOriginal) {
            if (numero > valorMaximo) {
                valorMaximo = numero
                console.log(valorMaximo)
            }
                
        }
            
            // let valorMaximo = Infinity

            // for (let i = 0; i < arrayOriginal.length; i++){

            //     if (numero >= valorMaximo) {
            //         console.log(numero)
            //     }
            // }
        