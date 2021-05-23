function contadorVotos(total, brancos, nulos) {
  let porcentagem = 100;

  let totalBrancos = ((total - brancos) * 100) / total;
  let porcentagemBrancos = porcentagem - totalBrancos;
  total -= brancos;

  let totalNulos = ((total - nulos) * 100) / total;
  let porcentagemNulos = porcentagem - totalNulos;
  total -= nulos;

  porcentagem -= porcentagemBrancos + porcentagemNulos;

  return {
    brancos: porcentagemBrancos.toFixed(1),
    nulos: porcentagemNulos.toFixed(1),
    validos: porcentagem.toFixed(1),
  };
}
let line = '-------------------------------------------------';
let resultadoVotos = contadorVotos(50, 20, 5);
let validosLog = `A quantidade de votos validos são: ${resultadoVotos.validos}%`,
  brancosLog = `A quantidade de votos em brancos são: ${resultadoVotos.brancos}%`,
  nulosLog = `A quantidade de votos em nulos são: ${resultadoVotos.nulos}%`;

console.log(line);
console.log(validosLog);
console.log(brancosLog);
console.log(nulosLog);
console.log(line);
