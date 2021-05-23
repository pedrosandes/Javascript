function calcularDias(idade) {
  const meses = 12;
  const dias = 30;
  qtdMeses = idade * meses;
  qtdDias = qtdMeses * dias;
  return qtdDias;
}
let resultado = calcularDias(17);
let resultadoLog = 'Sua idade em dias é: ' + resultado;
console.log(resultadoLog);
