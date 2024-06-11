function calcularVolumePiramide() {
    let comprimentoLado = parseFloat(document.getElementById("comprimentoLado").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let baseArea = comprimentoLado ** 2;
    let volume = (baseArea * altura) / 3;
    document.getElementById("resultado").innerText = "O volume da pirâmide é: " + volume.toFixed(2) + " unidades cúbicas";}