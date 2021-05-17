function fazerRelatorio(palavra) {
  function inverter(nome) {
    let invertido = nome.split('').reverse().join('');
    return invertido;
  }

  function contarNumeroVogais(palavra) {
    let vogais = [
      'a',
      'ã',
      'e',
      'é',
      'ê',
      'i',
      'í',
      'o',
      'ô',
      'õ',
      'ó',
      'u',
      'ú',
    ];
    let contador = 0;

    let palavraDividida = palavra.toLowerCase().split('');
    for (const letra of palavraDividida) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
    return contador;
  }

  return {
    PalavraInvertida: inverter(palavra),
    Vogais: contarNumeroVogais(palavra),
  };
}

console.log(fazerRelatorio('Nilton'));

// FALTA FAZER UM ERRO SE A PALAVRA FOR DIFERENTE DE UMA STRING
