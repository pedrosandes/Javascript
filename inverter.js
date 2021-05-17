function inverter(nome) {
  let nomeInvertido = nome.split('').reverse().join('');
  return nomeInvertido;
}

console.log(inverter('Pedro'));
