# 🔄 Swap

"Swap" é um termo comum usado em programação e ciência da computação, referindo-se à troca ou intercâmbio de valores entre duas variáveis. Esta operação envolve a troca do conteúdo de duas variáveis, efetivamente trocando seus valores.

## Propósito do Swap

A operação de swap é frequentemente usada para reordenação, ordenação e otimização de algoritmos. Ela permite o rearranjo de valores sem a necessidade de variáveis temporárias adicionais.

### Exemplo de Código em Python

```python
# Trocando valores em Python
a = 5
b = 10

# Antes da troca
print("Antes da troca: a =", a, ", b =", b)

# Trocando valores usando uma variável temporária
temp = a
a = b
b = temp

# Depois da troca
print("Depois da troca: a =", a, ", b =", b)
```

### Exemplo de Código em JavaScript (Elementos do Array)

```js
// Declaração do array
let array = [10, 30, 40, 55]

// X é o ponto inicial e Y é o ponto final
let x = 0
let y = array.length - 1

// Variável temporária
let temp;


// Condição: enquanto X for menor ou igual a Y
while (x <= y) {
  temp = array[x]

  // Trocando valores usando uma variável temporária
  array[x] = array[y]
  array[y] = temp

  // Incremento e decremento
  x++;
  y--;
}

console.log('O array trocado', array)
```