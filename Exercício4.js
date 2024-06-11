
        function verificarVoto() {
            let nome = document.getElementById("nome").value;
            let idade = parseInt(document.getElementById("idade").value);
            let resultado;
            
            if (idade >= 16) {
                resultado = nome + " pode votar.";
            } else {
                resultado = nome + " não pode votar.";
            }
            
            document.getElementById("resultadoVoto").innerText = resultado;
        }