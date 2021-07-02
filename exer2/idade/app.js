const idades = [
  {
    nome: 'Pedro',
    anos: 17,
    meses: 5,
    dias: 9,
  },

  {
    nome: 'Ian',
    anos: 20,
    meses: 5,
    dias: 9,
  },
  {
    nome: 'Nilton',
    anos: 49,
    meses: 1,
    dias: 10,
  },
];

function calcularIdade({ nome, anos, meses, dias } = idades) {
  const tipoString =
    typeof anos != 'number' || typeof meses !== 'number' || typeof dias !== 'number';
  if (tipoString || !anos || !meses || !dias) {
    return console.log(`Error, verifique os dados.`);
  }
  diasAnos = anos * 365;
  diasMeses = meses * 30;
  diasTotais = diasAnos + diasMeses + dias;
  console.log(`A quantidade de dias vivos de ${nome} são de: ${diasTotais}`);
}

for (idade of idades) {
  calcularIdade(idade);
}
