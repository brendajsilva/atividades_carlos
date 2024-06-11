const MMHG_TO_PSI = 0.0193367801;
        
        function converterPressao() {
            let valor = parseFloat(document.getElementById("valorPressao").value);
            let unidade = document.getElementById("unidade").value;
            let resultado;
            
            if (unidade === "mmHg") {
                resultado = valor * MMHG_TO_PSI;
                document.getElementById("resultadoPressao").innerText = valor + " mmHg é igual a " + resultado.toFixed(4) + " PSI";
            } else {
                resultado = valor / MMHG_TO_PSI;
                document.getElementById("resultadoPressao").innerText = valor + " PSI é igual a " + resultado.toFixed(2) + " mmHg";
            }
        }