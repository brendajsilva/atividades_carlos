            function verificarDivisiveisPor7() {
            let contador = 0;
            for (let i = 1; i <= 5; i++) {
                let valor = parseInt(document.getElementById("valor" + i).value);
                if (!isNaN(valor) && valor % 7 === 0) {
                    contador++;
                }
            }
            document.getElementById("resultadoDivisiveisPor7").innerText = "Quantidade de números divisíveis por 7: " + contador;
        }