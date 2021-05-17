function contadorVogais(palavra) {
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
console.log(fazerRelatorio('Pedro'));
