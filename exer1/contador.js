function contadorVogais(palavra) {
  let vogais = 'aãeéêiíoôõóuú';
  let contador = 0;

  let palavraDividida = palavra.toLowerCase().split('');
  for (const letra of palavraDividida) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }
  return {
    contador: contador,
    palavra: palavra,
  };
}

let qtdVogais = contadorVogais('Pedro');
console.log(`A quantidade de vogais do nome ${qtdVogais.palavra} é de ${qtdVogais.contador}`);

qtdVogais = contadorVogais('Ian');
console.log(`A quantidade de vogais do nome ${qtdVogais.palavra} é de ${qtdVogais.contador}`);
