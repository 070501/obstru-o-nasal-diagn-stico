
let tipo = '';
let etiologia = '';

function escolherObstrucao(valor) {
  tipo = valor;
  document.getElementById('etapa1').classList.remove('active');
  document.getElementById('etapa2').classList.add('active');
  document.getElementById('tipoObstrucao').textContent = valor;
}

function escolherEtiologia(valor) {
  etiologia = valor;
  document.getElementById('etapa2').classList.remove('active');
  document.getElementById('etapa3').classList.add('active');

  const opcoes = document.getElementById('opcoesClinicas');
  opcoes.innerHTML = '';

  if (tipo === 'unilateral' && etiologia === 'mucosa') {
    opcoes.innerHTML = `<button onclick="mostrarResposta('Paciente apresentando estase de secreção espessada + presença de pólipo grande em rinoscopia + anosmia.<br><br>Conduta: Solicitar TC e encaminhar ao especialista para avaliação de pólipo nasal.')">Estase + pólipo + anosmia</button>
                        <button onclick="mostrarResposta('Outro quadro clínico de obstrução nasal unilateral de etiologia mucosa.<br><br>Conduta: Solicitar TC e encaminhar ao especialista para avaliação de pólipo nasal.')">Outro</button>`;
  } else if (tipo === 'unilateral' && etiologia === 'estrutural') {
    opcoes.innerHTML = `<button onclick="mostrarResposta('Paciente com rinorreia fétida e histórico de corpo estranho com achado em rinoscopia.<br><br>Conduta: Remoção do corpo estranho.')">Rinorreia fétida + corpo estranho</button>
                        <button onclick="mostrarResposta('Suspeita de desvio de septo por malformação, intercorrência no parto ou trauma.<br><br>Conduta: Avaliar desvio de septo com especialista.')">Desvio de septo</button>
                        <button onclick="mostrarResposta('Paciente do sexo masculino, com quadro clínico de epistaxes volumosas, drenagem nasal e podendo apresentar quadro de otite média serosa com diminuição na audição.<br><br>Conduta: Solicitar TC para avaliar suspeita de Angiofibroma Nasal Juvenil.')">Adolescente sexo masculino + epistaxe + drenagem nasal</button>`;
  } else if (tipo === 'bilateral' && etiologia === 'mucosa') {
    opcoes.innerHTML = `<button onclick="mostrarResposta('Paciente com coriza hialina, prurido nasal e ocular e crises esternutatórias.<br><br>Conduta: Diagnóstico clínico de Rinite alérgica.<br><br>Tratamento: higiene ambiental, lavagem nasal com solução salina, anti-histamínico de 2ª geração (loratadina) e corticoesteroide tópico nasal (budesonida).')">Coriza + prurido + espirros</button>
                        <button onclick="mostrarResposta(tabelaSinusite())">Febre + tosse + cefaleia</button>`;
  } else if (tipo === 'bilateral' && etiologia === 'estrutural') {
    opcoes.innerHTML = `<button onclick="mostrarResposta('Paciente com respiração bucal, boca seca, secreção nasal mucopurulenta, ronco e distúrbio do sono.<br><br>Conduta: Avaliar por oroscopia a suspeita de hiperplasia adenoideana e considerar indicação cirúrgica.')">Respiração bucal + ronco + secreção</button>`;
  }
}

function mostrarResposta(resposta) {
  document.getElementById('etapa3').classList.remove('active');
  document.getElementById('etapa4').classList.add('active');
  document.getElementById('respostaFinal').innerHTML = resposta;
}

function voltar(etapaAtual) {
  document.getElementById(`etapa${etapaAtual + 1}`).classList.remove('active');
  document.getElementById(`etapa${etapaAtual}`).classList.add('active');
}

function tabelaSinusite() {
  return `
    <p>Quadro sugestivo de sinusite: avaliar se é aguda viral, aguda bacteriana ou crônica.</p>
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Características</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aguda Viral</td>
          <td>Até 14 dias; sintomas intensos nos primeiros 2-3 dias com melhora gradual; tratamento sintomático.</td>
        </tr>
        <tr>
          <td>Aguda Bacteriana</td>
          <td>Sem melhora após 10 dias ou piora após 5 dias; febre alta, dor facial intensa; tratamento com antibióticos.</td>
        </tr>
        <tr>
          <td>Crônica</td>
          <td>Persistência dos sintomas por mais de 12 semanas; fatores de risco como rinite alérgica, pólipos, desvio de septo.</td>
        </tr>
      </tbody>
    </table>
  `;
}
