        function somarParesImpares() {
            let somaPares = 0;
            let somaImpares = 0;
            for (let i = 1; i <= 5; i++) {
                let valor = parseInt(document.getElementById("valor" + i).value);
                if (!isNaN(valor)) {
                    if (valor % 2 === 0) {
                        somaPares += valor;
                    } else {
                        somaImpares += valor;
                    }
                }
            }
            document.getElementById("resultado").innerText = 
                "Soma dos números pares: " + somaPares + 
                "\nSoma dos números ímpares: " + somaImpares;
        }