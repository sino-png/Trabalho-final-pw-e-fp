function configurarMemoriaSecundaria() {
  if (!localStorage.funcionarios) {
    var funcionarios = []; 
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
  }
}

function cadastrar(){
  if ($("#formularioDados").valid()) {
    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'))
    
    var funcionario = new Object();

    var user = document.getElementById("usuario").value;
    var senha = document.getElementById("usuario").value;
    var cpf = document.getElementById("cpf").value;
    var sal = parseFloat(document.getElementById("sal").value);
    var com = parseInt(document.getElementById("com").value);
    var vendas = 0;

    if (verificarCpf())
    
  }
}

$(document).ready(function(){
    $('#com').mask('00%');
    $('#cpf').mask('000.000.000-00');
});

$("#formularioDados").validate({
  rules: {
    cpf: {
      required: true,
      minlength: 14
    },
    com: {
      maxlength: 3, 
      required: true
    },
    senha: {
      required: true
    },
    nome: {
      required: true
    }
  }
})
