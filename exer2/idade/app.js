function calcularIdade(anos, meses, dias) {
  const diasNoAno = 365;
  const diasNoMes = 30;
  const condicional =
    typeof anos == 'number' && typeof meses == 'number' && typeof dias == 'number';

  if (condicional) {
    diasAno = anos * diasNoAno;
    diasMes = meses * diasNoMes;
    diasTotais = diasAno + diasMes + dias;
  } else {
    console.log(`Error!`);
  }
  return diasTotais;
}
const totaisDias = calcularIdade(17, 5, 9);

console.log(`São ${totaisDias} de vida.`);
