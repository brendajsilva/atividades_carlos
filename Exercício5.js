function encontrarMaiorMenor() {
    let valores = [];
    for (let i = 1; i <= 5; i++) {
        let valor = parseFloat(document.getElementById("valor" + i).value);
        if (!isNaN(valor)) {
            valores.push(valor);
        }
    }
    if (valores.length > 0) {
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        document.getElementById("resultadoMaiorMenor").innerText = "Maior valor: " + maior + ", Menor valor: " + menor;
    } else 
        document.getElementById("resultadoMaiorMenor").innerText = "Por favor, insira pelo menos um valor válido.";
}