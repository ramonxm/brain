# 📚 Notação Big O

## Introdução
**Big O** é uma forma de medir a eficiência de algoritmos em termos de **tempo** (velocidade) ou **espaço** (memória) **conforme o tamanho da entrada cresce**.

Big O **não** mede o tempo de execução real — ela mede **como o tempo/memória cresce** dependendo do tamanho da entrada.

---

# 🧠 Principais Complexidades Big O

## O(1) – Complexidade Constante
> "Você acende uma luz apenas apertando o interruptor."

- ✅ O tempo de execução não depende do tamanho da entrada.
- ✅ Sempre executa o mesmo número de passos.

---

## O(log n) – Complexidade Logarítmica
> "Procurar um nome na lista telefônica dividindo o livro ao meio a cada vez."

- ✅ Cada operação reduz o problema pela metade.
- ✅ Exemplo clássico: **Busca Binária**.

---

## O(n) – Complexidade Linear
> "Olhar cada carta em um baralho para encontrar o Ás de Espadas."

- ✅ O tempo de execução cresce proporcionalmente ao tamanho da entrada.
- ✅ Exemplo: **Iterar por uma lista**.

---

## O(n log n) – Complexidade Quasilinear
> "Divida para conquistar e depois combine."

- ✅ Melhor que O(n²), mas pior que O(n).
- ✅ Usado em algoritmos de ordenação eficientes como **Merge Sort** e **Quick Sort** (em média).

---

## O(n²) – Complexidade Quadrática
> "Comparar cada aluno com todos os outros em uma sala de aula."

- ✅ Cada elemento é comparado com todos os outros.
- ✅ Exemplos: **Bubble Sort**, **Selection Sort**.

---

## O(2ⁿ) – Complexidade Exponencial
> "Testar todas as combinações possíveis para resolver um cubo mágico."

- ✅ O número de operações dobra a cada elemento adicionado.
- ✅ Exemplos:
  - **Subconjuntos**: gerar todos os subconjuntos de uma lista.
  - **Problema da Mochila** (força bruta).

---

## O(n!) – Complexidade Fatorial
> "Organizar todas as ordens possíveis para os convidados de uma festa."

- ✅ Testa todas as permutações possíveis.
- ✅ Exemplos:
  - **Problema do Caixeiro Viajante** (força bruta).
  - **Gerar todas as permutações** de uma lista.

---

# 📋 Tabela Resumo das Complexidades

| Complexidade | Nome           | Crescimento                        | Exemplo Prático                   |
|:-------------|:---------------|:-----------------------------------|:----------------------------------|
| O(1)         | Constante      | Fixo, não muda com n               | Acessar item de array por índice  |
| O(log n)     | Logarítmica    | Cresce lentamente                  | Busca Binária                     |
| O(n)         | Linear         | Cresce proporcionalmente a n       | Iterar por um array               |
| O(n log n)   | Quasilinear    | Entre linear e quadrático          | Merge Sort, Quick Sort            |
| O(n²)        | Quadrática     | Cresce rapidamente                 | Bubble Sort, Selection Sort       |
| O(2ⁿ)        | Exponencial    | Cresce absurdamente rápido         | Subconjuntos, problemas de combinação |
| O(n!)        | Fatorial       | Crescimento explosivo              | Permutações, Caixeiro Viajante    |

---

# 📈 Gráfico Visual do Crescimento das Complexidades

Crescimento de acordo com o tamanho da entrada n:

```md
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
- O(log n) cresce muito devagar.
- O(n) cresce proporcionalmente.
- O(n log n) cresce um pouco mais rápido.
- O(n²) cresce muito rapidamente.
- O(2ⁿ) e O(n!) crescem absurdamente e rapidamente se tornam impraticáveis.

---

# ✨ Dicas para Memorizar Big O

- 🔵 **Constante (O(1))** → "Acesso direto"
- 🟢 **Logarítmica (O(log n))** → "Dividindo pela metade"
- 🟡 **Linear (O(n))** → "Proporcional"
- 🟠 **Quasilinear (O(n log n))** → "Dividir e conquistar"
- 🔴 **Quadrática (O(n²))** → "Comparações duplas"
- 🟣 **Exponencial (O(2ⁿ))** → "Combinações dobrando"
- ⚫ **Fatorial (O(n!))** → "Todas as ordens possíveis" 