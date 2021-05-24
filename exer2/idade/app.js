function calcularIdade(anos, meses, dias) {
  const diasNoAno = 365;
  const diasNoMes = 30;

  if (typeof anos == 'number' || typeof meses == 'number' || typeof dias == 'number') {
    diasAno = anos * diasNoAno;
    diasMes = meses * diasNoMes;
    diasTotais = diasAno + diasMes + dias;
    console.log(`São ${diasTotais} dias de vida.`);
  } else {
    console.log(`Error!`);
  }
}

calcularIdade(17, 5, 5);
