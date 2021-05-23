function precoMaca(quantidade) {
  const duzia = 12;
  let custoNormal = 1.3;
  let custoDesconto = 1.0;
  let custoTotal;
  if (quantidade >= duzia) {
    custoTotal = quantidade * custoDesconto;
    console.log(`Você teve um desconto, cada maça vai ser R$ 1,00`);
  } else {
    custoTotal = quantidade * custoNormal;
    console.log(`Você não teve desconto.`);
  }
  return {
    custoTotal: custoTotal.toFixed(2),
    quantidade: quantidade,
  };
}

let qtdMaca = precoMaca(15);
let qtdMacaLog = `Você comprou ${qtdMaca.quantidade} maças, então irá pagar R$ ${qtdMaca.custoTotal} reais.`;
console.log(qtdMacaLog);
