function configurarMemoriaSecundaria() {
    if (!localStorage.usuarios) {
        var usuarios = [];
        localStorage.setItem('usuarios', JSON.stringigy(usuarios));
    }
}

function Entrar() {
    if ($("#formInicio").valid()) {

        var usuarios = JSON.parse(localStorage.getItem('usuarios'));
        var login = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;

        if (verificarUsuario(login, senha, usuarios)) {
            var i = 0;
            var quantidade = usuarios.length;
            var cargo = 0;

            for (i = 0; i < quantidade; i++) {
                if (login == usuarios[i].user) {
                    cargo = usuarios[i].cargo;
                }
            }

            if (cargo == 1) {
                window.location.href = "pagFuncionario.html"
            } else {
                window.location.href = "biblioteca.html"
            }
        } else {
            alert("nome de usuário ou senha inválidos")
        }
    }
}

function verificarUsuario(login, senha, usuarios) {
    var resultado = false;
    var quantidade = usuarios.length;

    var posicao = 0;
    for (posicao = 0; posicao < quantidade; posicao++) {
        if ((login == usuarios[posicao].user) && (senha == usuarios[posicao].senha)) {
            resultado = true;
            usuarios[posicao].pontuacao = 0
        }
    }
    return resultado;
}

$("#formInicio").validate(
    {
        rules: {
            login: {
                required: true,
            },
            senha: {
                required: true
            }
        },
        messages: {
            login: {
                required: "Campo obrigatório",
            },
            senha: {
                required: "Campo obrigatório"
            }
        }
    }
);