function configurarMemoriaSecundaria() {
  if (!localStorage.usuarios) {
    var usuarios = []; 
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }
}

function cadastrar(){
  if ($("#formularioDados").valid()) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'))
    
    var funcionario = new Object();

    funcionario.user = document.getElementById("usuario").value;
    funcionario.senha = document.getElementById("senha").value;
    funcionario.cpf = document.getElementById("cpf").value;
    funcionario.sal = parseFloat(document.getElementById("sal").value);
    funcionario.com = parseInt(document.getElementById("com").value);
    // 1- funcionário; 2: usuário comum
    funcionario.cargo = 1; 
    funcionario.vendas = 0;

    if (verificarCpf(funcionario.cpf, usuarios)) {
      alert ("Este CPF já está cadastrado")
    }else{
      if (verificarUsuario(funcionario.user, usuarios)){
        alert ("Este nome de usuário já está sendo usado")
      }else{
        var posicao = usuarios.length;
        usuarios[posicao] = funcionario;

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert ("Cadastro realizado com sucesso <3")

        window.location.href = "index.html"
      }
    }
    
  }
}

function verificarCpf(cpf, usuarios) {
  var i = 0; 
  var repete = false;
  var quantidade = usuarios.length;

  for (i=0; i < quantidade; i++) {
    if (cpf == usuarios[i].cpf) {
      repete = true
    }
  }

  return repete
}

function verificarUsuario(user, usuarios) {
  var i = 0;
  var repete = false;
  var quantidade = usuarios.length;

  for (i=0; i < quantidade; i++) {
    if (user == usuarios[i].user) {
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
