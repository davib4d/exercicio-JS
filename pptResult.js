function jogar(escolhaUsuario) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    
    document.getElementById("escolhaUsuario").innerText = `Você escolheu: ${escolhaUsuario}`;
    document.getElementById("escolhaComputador").innerText = `Computador escolheu: ${escolhaComputador}`;
    
    let resultado = "";
    
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }
    
    document.getElementById("resultadoJogo").innerText = resultado;
}
