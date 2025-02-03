function configurarMemoriaSecundaria(){
    if (!localStorage.livros){
        var livros = [];
        localStorage.setItem('livros', JSON.stringify(livros));
    }
}

// imprimir e exibir tabela dos livros
function imprimirLinhaTabela(livro) {
	//length é o comprimento do vetor, ou seja, a quantidade de elementos
	var tabelaDados = document.getElementById("tabelaDados");

	var linha = tabelaDados.insertRow(1);

	var colunaIde = linha.insertCell(0);
	var colunaDesc = linha.insertCell(1);
	var colunaVagas = linha.insertCell(2);

	colunaIde.innerText = livro.ide;
	colunaDesc.innerText = livro.desc;
	colunaVagas.innerText = livro.vagas;

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

//form compras
function comprar() {
    if ($("#formFiltro").valid()) {
        var filtro = document.getElementById("filtro")

        var compras = JSON.parse(localStorage.getItem('compras'));

        var quantidade = compras.length; 
        var i = 0;

        for ( i = 0; i < quantidade; i++) {
            if (filtro == compras[i].idec) {
               exibirTabelaCompra() 
            }
        }
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
    localStorage.removeItem('compras');
	apagarLinhas();
}