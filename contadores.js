let valorContador = 0;

function aumentar() {
    valorContador++;
    atualizarContador();
}

function diminuir() {
    valorContador--;
    atualizarContador();
}

function atualizarContador() {
    document.getElementById('contador').innerText = valorContador;
}

function alterarCorFundo() {
    const seletorCor = document.getElementById('seletorCor');
    document.body.style.backgroundColor = seletorCor.value;
}