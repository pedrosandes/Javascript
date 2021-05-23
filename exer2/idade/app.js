function calcularDias(idade) {
  let qtdDias;
  if (typeof idade == 'number') {
    const ano = 365;
    qtdDias = ano * idade;
  } else {
    console.log('Declare sua idade.');
  }
  return {
    dias: qtdDias,
  };
}
let resultado = calcularDias(17);
console.log(`Sua idade em dias é: ${resultado.dias}`);
