# Notação Big O

## Introdução
Big O é uma forma de medir a eficiência de algoritmos em termos de tempo (velocidade) ou espaço (memória) conforme o tamanho da entrada cresce.

Big O não mede o tempo de execução real — ela mede como o tempo ou a memória crescem dependendo do tamanho da entrada.

---

## Principais Complexidades Big O

### O(1) – Complexidade Constante
O tempo de execução não depende do tamanho da entrada. Sempre executa o mesmo número de passos.

### O(log n) – Complexidade Logarítmica
Cada operação reduz o problema pela metade. Exemplo clássico: busca binária.

### O(n) – Complexidade Linear
O tempo de execução cresce proporcionalmente ao tamanho da entrada. Exemplo: iterar por uma lista.

### O(n log n) – Complexidade Quasilinear
Melhor que O(n²), mas pior que O(n). Usado em algoritmos de ordenação eficientes como Merge Sort e Quick Sort (em média).

### O(n²) – Complexidade Quadrática
Cada elemento é comparado com todos os outros. Exemplos: Bubble Sort, Selection Sort.

### O(2ⁿ) – Complexidade Exponencial
O número de operações dobra a cada elemento adicionado. Exemplos: gerar todos os subconjuntos de uma lista, problema da mochila (força bruta).

### O(n!) – Complexidade Fatorial
Testa todas as permutações possíveis. Exemplos: problema do caixeiro viajante (força bruta), gerar todas as permutações de uma lista.

---

## Tabela Resumo das Complexidades

| Complexidade | Nome           | Crescimento                        | Exemplo Prático                   |
|:-------------|:---------------|:-----------------------------------|:----------------------------------|
| O(1)         | Constante      | Fixo, não muda com n               | Acessar item de array por índice  |
| O(log n)     | Logarítmica    | Cresce lentamente                  | Busca Binária                     |
| O(n)         | Linear         | Cresce proporcionalmente a n       | Iterar por um array               |
| O(n log n)   | Quasilinear    | Entre linear e quadrático          | Merge Sort, Quick Sort            |
| O(n²)        | Quadrática     | Cresce rapidamente                 | Bubble Sort, Selection Sort       |
| O(2ⁿ)        | Exponencial    | Cresce muito rápido                | Subconjuntos, problemas de combinação |
| O(n!)        | Fatorial       | Crescimento explosivo              | Permutações, Caixeiro Viajante    |

---

## Gráfico Visual do Crescimento das Complexidades

Crescimento de acordo com o tamanho da entrada n:

```
|
|                                         O(n!)
|                                     O(2^n)
|                                 O(n²)
|                             O(n log n)
|                          O(n)
|                       O(log n)
|__________O(1)____________________________________> n
```

- O(1) permanece constante.
- O(log n) cresce devagar.
- O(n) cresce proporcionalmente.
- O(n log n) cresce um pouco mais rápido.
- O(n²) cresce rapidamente.
- O(2ⁿ) e O(n!) crescem muito rápido e logo se tornam impraticáveis.

---

## Dicas para Memorizar Big O

- O(1): acesso direto
- O(log n): dividindo pela metade
- O(n): proporcional
- O(n log n): dividir e conquistar
- O(n²): comparações duplas
- O(2ⁿ): combinações dobrando
- O(n!): todas as ordens possíveis 