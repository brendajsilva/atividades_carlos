function verificarDivisibilidade() {
    let divisiveisPor2 = 0;
    let divisiveisPor3 = 0;
    let divisiveisPor5 = 0;
    for (let i = 1; i <= 5; i++) {
        let valor = parseInt(document.getElementById("valor" + i).value);
        if (!isNaN(valor)) {
            if (valor % 2 === 0) divisiveisPor2++;
            if (valor % 3 === 0) divisiveisPor3++;
            if (valor % 5 === 0) divisiveisPor5++;
        }
    }
    document.getElementById("resultadoDivisibilidade").innerText = 
        "Divisíveis por 2: " + divisiveisPor2 + 
        ", Divisíveis por 3: " + divisiveisPor3 + 
        ", Divisíveis por 5: " + divisiveisPor5;
}