function configurarMemoriaSecundaria(){
    if (!localStorage.livros){
        var livros = [];
        localStorage.setItem('livros', JSON.stringify(livros));
    }
}

function exibir(){
    var filtro = parseInt(document.getElementById("filtro").value);
    var livros = JSON.parse(localStorage.getItem('livros'));

    if (filtro == 0) {
        exibirTabela()
    }else{
        if (filtro == 1) {
            apagarLinhas();
            var i = 0;
            var quantidade = livros.length;

            for (i = 0; i < quantidade; i++){
                if (livros[i].sit == 1) {
                    imprimirLinhaTabela()
                }
            }
        }
    }
}

// imprimir e exibir tabela dos livros
function imprimirLinhaTabela(livro) {
	//length é o comprimento do vetor, ou seja, a quantidade de elementos
	var tabelaDados = document.getElementById("tabelaDados");

	var linha = tabelaDados.insertRow(1);

	var colunaTitulo = linha.insertCell(0);
	var colunaCod = linha.insertCell(1);
	var colunaAutor = linha.insertCell(2);
    var colunaEditora = linha.insertCell(3);
    var colunaVol = linha.insertCell(4);
    var colunaSit = linha.insertCell(5);

	colunaTitulo.innerText = livro.titulo;
	colunaCod.innerText = livro.cod;
	colunaAutor.innerText = livro.autor;
    colunaEditora.innerText = livro.editora;
    colunaVol.innerText = livro.vol;
    if (livro.sit == 0) {
        colunaSit.innerText = "disponível";
    }else{
        if (livro.sit == 1){
            colunaSit.innerText = "emprestado";
        }
    }
    

}

function exibirTabela() {
	apagarLinhas();

	//recupera o vetor na memória secundária
	var livros = JSON.parse(localStorage.getItem('livros'));

	var posicao = 0;
	var quantidade = livros.length;
	for (posicao = 0; posicao < quantidade; posicao++) {
		imprimirLinhaTabela(livros[posicao])
	}
}

function apagarLinhas() {
	var tabelaDados = document.getElementById("tabelaDados");

	// o código abaixo cria um vetor com todos os elementos tr (linha) da tabela
	var linhas = tabelaDados.getElementsByTagName('tr');

	//length é comprimento do vetor, ou seja, a quantidade de linhas da tabela
	var quantidade = linhas.length;

	var numero = quantidade - 1;
	while (numero >= 1) {
		tabelaDados.deleteRow(numero);
		numero = numero - 1;
	}
}

function excluirDados() {
	localStorage.removeItem('livros');
	apagarLinhas();
}