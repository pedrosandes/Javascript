function inverter(nome) {
  if (typeof nome === 'string') {
    let nomeInvertido = nome.split('').reverse().join('');
    return nomeInvertido;
  } else {
    console.log('Digite seu nome para inverte-lo!');
  }
}

console.log(inverter('Pedro'));
