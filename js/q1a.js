function configurarMemoriaSecundaria() {
    if (!localStorage.carros) {
        var carros = [];
        localStorage.setItem('carros', JSON.stringify(carros));
    }
}

function Cadastrar() {
    if ($("#formularioDados").valid()) {
        var carros = JSON.parse(localStorage.getItem('carros'));

        var carro = new Object
        carro.placa = document.getElementById("placa").value;
        carro.desc = document.getElementById("desc").value;
        carro.valor = parseFloat(document.getElementById("valor").value);

        if (verificaridentificacao(carro.placa, carros)) {
            alert('Esta placa já foi informada')
        } else {
            var posicao = carros.length;
            // perguntar oq se trata
            carros[posicao] = carro;

            localStorage.setItem('carros', JSON.stringify(carros));

            alert("cadastro realizado com sucesso")

            window.location.href = "q1b.html"
        }
    }
}

function verificaridentificacao(placa, carros) {
    var i = 0;
    var repete = false;
    var quantidade = carros.length;

    for (i = 0; i < quantidade; i++) {
        if (placa == carros[i].placa) {
            repete = true
        }
    }
    return repete;
}

$(document).ready(function () {
    $('#placa').mask('SSS-00000');
    $('#valor').mask('#.##0,00', {reverse: true});
});

$("#formularioDados").validate(
    {
        rules: {
            placa: {
                required: true,
                minlength: 9
            },
            valor: {
                required: true, 
                maxlength: 10
            }
        },
        messages: {
            placa: {
                required: "Campo obrigatório",
                minlength: "Preencha o campo corretamente"
            },
            valor: {
                required: "Campo obrigatório",
            }
        }
    }
)