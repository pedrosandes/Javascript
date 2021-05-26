function precoMaca(quantidade) {
  if (!quantidade || quantidade < 0 || typeof quantidade !== 'number') {
    return console.log(`Insira um valor valido.`);
  }
  const resultado = quantidade < 12 ? quantidade * 1.3 : quantidade * 1;
  return console.log(`Você irá pagar R$${resultado.toFixed(1)} reais.`);
}

precoMaca(13);
