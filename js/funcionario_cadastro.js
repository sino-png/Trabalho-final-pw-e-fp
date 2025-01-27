function configurarMemoriaSecundaria() {
  if (!localStorage.funcionarios) {
    var funcionarios = []; 
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
  }
}

function cadastrar(){
  if ($("#formularioDados").valid()) {
    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'))
    
    var nome = document.getElementById("nome")
    var user = document.getElementById("user")
    
  }
}
