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

    funcionario.user = document.getElementById("usuario").value;
    funcionario.senha = document.getElementById("senha").value;
    funcionario.cpf = document.getElementById("cpf").value;
    funcionario.sal = parseFloat(document.getElementById("sal").value);
    funcionario.com = parseInt(document.getElementById("com").value);
    funcionario.vendas = 0;

    if (verificarCpf(funcionario.cpf, funcionarios)) {
      alert ("Este CPF já está cadastrado")
    }else{
      if (verificarUsuario(funcionario.user, funcionarios)){
        alert ("Este nome de usuário já está sendo usado")
      }else{
        var posicao = funcionarios.length;
        funcionarios[posicao] = funcionario;

        localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

        alert ("Cadastro realizado com sucesso <3")
      }
    }
    
  }
}

function verificarCpf(cpf, funcionarios) {
  var i = 0; 
  var repete = false;
  var quantidade = funcionarios.length;

  for (i=0; i < quantidade; i++) {
    if (cpf == funcionarios[i].cpf) {
      repete = true
    }
  }

  return repete
}

function verificarUsuario(user, funcionarios) {
  var i = 0;
  var repete = false;
  var quantidade = funcionarios.length;

  for (i=0; i < quantidade; i++) {
    if (user == funcionarios[i].user) {
      repete = true
    }
  }

  return repete
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
