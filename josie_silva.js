// 1️ Imprimindo Números Pares
// Garantindo que o último número impresso será sempre par
function imprimirPares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// 2️ Soma dos Números de um Array
function somarArray(numeros) {
  const soma = numeros.reduce((total, numero) => total + numero, 0);
  return soma;
}

// 3️ Identificar Número Primo
// Uso do Math.sqrt(n) para reduzir iterações
function ehPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// 4️ Executar FizzBuzz de 1 a 50
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    let resultado = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
    console.log(i + ": " + (resultado || i));
  }
}

// 5️ Contador de Vogais
function contarVogais(texto) {
  const vogais = texto.match(/[aeiouáéíóúâêîôûãõà]/gi);
  return vogais ? vogais.length : 0;
}

// 6️ Tabuada de um Número
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// 7️ Inverter String
function inverterString(texto) {
  return texto.split("").reverse().join("");
}

// 8️ Encontre o Maior Número
function encontrarMaiorNumero(numeros) {
  return Math.max(...numeros);
}

// 9️ Palíndromo
function ehPalindromo(texto) {
  const normalizado = texto.toLowerCase().replace(/[\W_]/g, "");
  const invertido = normalizado.split("").reverse().join("");
  return normalizado === invertido;
}

// 10️ Média de Notas
function calcularMedia(notas) {
  if (notas.length === 0) return "Reprovado - Média: 0.0";
  const media = somarArray(notas) / notas.length;
  const status = media >= 7 ? "Aprovado" : "Reprovado";
  return `${status} - Média: ${media.toFixed(1)}`;
}

// ✅ Testes (exemplos)

console.log("1️ Imprimir Números Pares até 10");
imprimirPares(10);

console.log("\n2️ Somar Array [1, 2, 3, 4, 5]");
console.log("Soma:", somarArray([1, 2, 3, 4, 5])); // Esperado: 15

console.log("\n3️ Número Primo - ehPrimo(7), ehPrimo(10)");
console.log("7 é primo?", ehPrimo(7)); // Esperado: true
console.log("10 é primo?", ehPrimo(10)); // Esperado: false

console.log("\n4️ Executar FizzBuzz de 1 a 50");
fizzBuzz();

console.log('\n5️ Contar Vogais em "Node.js é incrível"');
console.log("Vogais:", contarVogais("Node.js é incrível")); // Esperado: 6

console.log("\n6️ Tabuada do 5");
tabuada(5);

console.log('\n7️ Inverter String "hello"');
console.log("String invertida:", inverterString("hello")); // Esperado: "olleh"

console.log("\n8️ Encontrar Maior Número em [3, 10, 6, 2]");
console.log("Maior número:", encontrarMaiorNumero([3, 10, 6, 2])); // Esperado: 10

console.log('\n9️ Verificar Palíndromo - "Ame a ema", "Olá mundo"');
console.log("É palíndromo?", ehPalindromo("Ame a ema")); // Esperado: true
console.log("É palíndromo?", ehPalindromo("Olá mundo")); // Esperado: false

console.log("\n10️ Calcular Média das Notas [8, 7, 6], [5, 6, 4]");
console.log(calcularMedia([8, 7, 6])); // Esperado: "Aprovado - Média: 7.0"
console.log(calcularMedia([5, 6, 4])); // Esperado: "Reprovado - Média: 5.0"
