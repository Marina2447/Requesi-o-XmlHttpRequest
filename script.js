
const url = 'https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/tecnologias.json';

// Função para fazer a requisição e exibir os dados
function carregarDados() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const dados = JSON.parse(xhr.responseText);
      exibirDados(dados.tecnologias);
    } else {
      console.error('Erro ao carregar os dados.');
    }
  };

  xhr.onerror = function () {
    console.error('Erro de conexão.');
  };

  xhr.send();
}


function exibirDados(tecnologias) {
  const container = document.getElementById('dados');
  for (let i = 0; i < tecnologias.length; i++) {
    const tecnologia = tecnologias[i];
    const div = document.createElement('div');
    div.classList.add('tecnologia');

    div.innerHTML = `
      <h2>${tecnologia.nome} (${tecnologia.tipo})</h2>
      <p><strong>Categoria:</strong> ${tecnologia.categoria}</p>
      <p><strong>Descrição:</strong> ${tecnologia.descricao}</p>
      <p><strong>Popularidade:</strong> ${tecnologia.popularidade}</p>
      <p><strong>Ano de Lançamento:</strong> ${tecnologia.ano_lancamento}</p>
      <p><strong>Criador:</strong> ${tecnologia.criador}</p>
      <h3>Bibliotecas Populares:</h3>
      <ul>
        ${tecnologia.bibliotecas_populares.map(bib => `
          <li>
            <strong>${bib.nome}</strong>: ${bib.descricao} (Lançado em ${bib.ano_lancamento} por ${bib.desenvolvedor})
          </li>`).join('')}
      </ul>
    `;

    container.appendChild(div);
  }
}


carregarDados();
