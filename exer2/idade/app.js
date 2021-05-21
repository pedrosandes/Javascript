const anos = 17;
function calcularDias(idade) {
  const meses = 12;
  const dias = 30;
  qtdMeses = idade * meses;
  qtdDias = qtdMeses * dias;
  return qtdDias;
}

console.log('Sua idade em dias é: ' + calcularDias(anos));
