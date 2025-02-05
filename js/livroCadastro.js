function configurarMemoriaSecundaria() {
    if (!localStorage.livros) {
      var livros = []; 
      localStorage.setItem('livros', JSON.stringify(livros))
    }
  }
  
  function cadastrar(){
    if ($("#formularioDados").valid()) {
      var livros = JSON.parse(localStorage.getItem('livros'))
      
      var livro = new Object();
  
      livro.titulo = document.getElementById("titulo").value;
      livro.cod = document.getElementById("cod").value;
      livro.autor = document.getElementById("autor").value;
      livro.editora = document.getElementById("editora").value;
      livro.vol = parseInt(document.getElementById("vol").value);
      // 0- diponível; 1- emprestado;
      livro.sit = 0; 
      
      // varificar se o código já está sendo usado
      if (validarCodigo(livro.cod, livros)) {
        alert ("Este código já está cadastrado")
      }else{
        //verificar se já tem o mesmo volume do mesmo livro
        if (verificarLivro(livro.vol, livros)){
          alert ("Este volume já foi cadastrado")
        }else{
          var posicao = livros.length;
          livros[posicao] = livro;
  
          localStorage.setItem('livros', JSON.stringify(livros));
  
          alert ("Cadastro realizado vol sucesso <3")
  
          window.location.href = "pagFuncionario.html"
        }
      }
      
    }
  }
  
  function validarCodigo(cod, livros) {
    var i = 0; 
    var repete = false;
    var quantidade = livros.length;
  
    for (i=0; i < quantidade; i++) {
      if (cod == livros[i].cod) {
        repete = true
      }
    }
  
    return repete
  }
  
  function verificarLivro(vol, livros) {
    var i = 0;
    var repete = false;
    var quantidade = livros.length;
  
    for (i=0; i < quantidade; i++) {
      if (vol == livros[i].vol) {
        repete = true
      }
    }
  
    return repete
  }
  
  $(document).ready(function(){
      $('#cod').mask('000-SSS');
  });
  
  $("#formularioDados").validate({
    rules: {
      autor: {
        required: true
      },
      vol: {
        maxlength: 2, 
        required: true
      },
      cod: {
        minlength: 7,
        required: true
      },
      titulo: {
        minlength: 2,
        required: true
      }
    }
  })
  