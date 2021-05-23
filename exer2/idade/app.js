function calcularIdade(dia, mes, ano) {
  let anoAtual = 2021,
    mesAtual = 5,
    diasNoMes = 30,
    diasAno = 365;
  var idade;

  if (mesAtual < mes) {
    idade = anoAtual - ano - 1;
  } else {
    idade = anoAtual - ano;
  }
  anoDias = idade * diasAno;
  mesDias = mes * diasNoMes;
  diasTotais = anoDias + mesDias + dia;

  return diasTotais;
}

let pedro = calcularIdade(05, 09, 2003);
console.log(`Sua idade em dias é aproximadamente ${pedro}`);

let ian = calcularIdade(22, 07, 2000);
console.log(`Sua idade em dias é aproximadamente ${ian}`);
