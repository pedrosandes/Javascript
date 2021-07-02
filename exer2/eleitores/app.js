const votos = {
  total: 110000,
  brancos: 3750,
  nulos: 2366,
};

function contadorVotos() {
  let porcentagem = 100;

  totalBrancos = ((votos.total - votos.brancos) * 100) / votos.total;
  porcentagemBrancos = porcentagem - totalBrancos;

  totalNulos = ((votos.total - votos.nulos) * 100) / votos.total;
  porcentagemNulos = porcentagem - totalNulos;

  porcentagem -= porcentagemBrancos + porcentagemNulos;

  console.log(`O total de votos validos são de: ${porcentagem.toFixed(1)}%`);
  console.log(`O total de votos brancos são de: ${porcentagemBrancos.toFixed(1)}%`);
  console.log(`O total de votos nulos são de: ${porcentagemNulos.toFixed(1)}%`);
}

contadorVotos(votos);
