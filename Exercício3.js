
        function converterTemperatura() {
            let valor = parseFloat(document.getElementById("valorTemperatura").value);
            let unidade = document.getElementById("unidadeTemperatura").value;
            let resultado;
            
            if (unidade === "F") {
                resultado = (valor - 32) * 5 / 9;
                document.getElementById("resultadoTemperatura").innerText = valor + " °F é igual a " + resultado.toFixed(2) + " °C";
            } else {
                resultado = (valor * 9 / 5) + 32;
                document.getElementById("resultadoTemperatura").innerText = valor + " °C é igual a " + resultado.toFixed(2) + " °F";
            }
        } 