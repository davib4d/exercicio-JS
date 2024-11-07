function validarLogin() {
    const usuario = document.getElementById('campoUsuario').value;
    const senha = document.getElementById('campoSenha').value;

    document.getElementById('erroUsuario').innerText = '';
    document.getElementById('erroSenha').innerText = '';

    const usuariosValidos = {
        "ale@cesupa.br": { senha: "123123", url: "https://www.cesupa.br/" },
        "pedro@giroto.com": { senha: "223344", url: "https://www.detran.pa.gov.br/index_.php" },
        "isaac@java.com": { senha: "asdasd", url: "https://www.idopterlabs.com.br/" },
        "lyo@mugiwara.br": { senha: "reidospiratas", url: "https://www.youtube.com/@emitriz"}
    };

    if (usuariosValidos[usuario]) {
        if (usuariosValidos[usuario].senha === senha) {
  
            window.location.href = usuariosValidos[usuario].url;
            return false;
        } else {
            document.getElementById('erroSenha').innerText = 'Senha incorreta';
        }
    } else {
        document.getElementById('erroUsuario').innerText = 'Usuário não encontrado';
    }
    return false;
}