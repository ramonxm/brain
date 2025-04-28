# 📚 Guia completo de Big O Notation

## Introdução
**Big O** é uma forma de medir a eficiência de algoritmos em termos de **tempo** (velocidade) ou **espaço** (memória) **à medida que a entrada cresce**.

Big O **não** mede o tempo real de execução — ele mede **como o tempo/memória cresce** dependendo do tamanho da entrada.

---

# 🧠 Principais Complexidades do Big O

## O(1) – Complexidade Constante
> "Você liga uma lâmpada apertando o interruptor."

- ✅ O tempo de execução não depende do tamanho da entrada.
- ✅ Sempre é feito o mesmo número de passos.

---

## O(log n) – Complexidade Logarítmica
> "Procurar um nome na lista telefônica dividindo o livro ao meio a cada vez."

- ✅ Cada operação reduz o problema pela metade.
- ✅ Exemplo clássico: **Binary Search**.

---

## O(n) – Complexidade Linear
> "Olhar cada carta em uma pilha para encontrar o Ás de Espadas."

- ✅ O tempo de execução cresce proporcionalmente ao tamanho da entrada.
- ✅ Exemplo: **Percorrer uma lista**.

---

## O(n log n) – Complexidade Quasilinear
> "Dividir para conquistar e depois combinar."

- ✅ Melhor que O(n²) mas pior que O(n).
- ✅ Usado em algoritmos de ordenação eficientes como **Merge Sort** e **Quick Sort** (na média).

---

## O(n²) – Complexidade Quadrática
> "Comparar cada aluno com todos os outros alunos em uma sala."

- ✅ Cada elemento é comparado com cada outro elemento.
- ✅ Exemplos: **Bubble Sort**, **Selection Sort**.

---

## O(2ⁿ) – Complexidade Exponencial
> "Testar todas as combinações possíveis para resolver um cubo mágico."

- ✅ Número de operações dobra a cada elemento adicionado.
- ✅ Exemplos:
  - **Subsets**: gerar todos os subconjuntos de uma lista.
  - **Problema da Mochila** (brute-force).

---

## O(n!) – Complexidade Fatorial
> "Organizar todas as ordens possíveis para os convidados da festa."

- ✅ Tenta todas as permutações possíveis.
- ✅ Exemplos:
  - **Traveling Salesman Problem** (caixeiro viajante - brute-force).
  - **Gerar todas as permutações** de uma lista.

---

# 📋 Tabela Resumo das Complexidades

| Complexidade | Nome           | Crescimento                  | Exemplo prático                  |
|:-------------|:---------------|:------------------------------|:----------------------------------|
| O(1)         | Constante       | Fixo, não muda com n           | Acessar item em array pelo índice |
| O(log n)     | Logarítmica     | Cresce devagar                 | Binary Search                     |
| O(n)         | Linear          | Cresce proporcionalmente a n   | Percorrer array                   |
| O(n log n)   | Quasilinear     | Entre linear e quadrático      | Merge Sort, Quick Sort            |
| O(n²)        | Quadrática      | Cresce rapidamente             | Bubble Sort, Selection Sort       |
| O(2ⁿ)        | Exponencial     | Cresce absurdamente rápido     | Subsets, problemas de combinação  |
| O(n!)        | Fatorial        | Crescimento explosivo          | Permutações, Traveling Salesman   |

---

# 📈 Gráfico visual de crescimento das complexidades

Crescimento conforme o tamanho da entrada n:

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
- O(log n) cresce bem devagar.
- O(n) cresce proporcionalmente.
- O(n log n) cresce um pouco mais rápido.
- O(n²) cresce muito rápido.
- O(2ⁿ) e O(n!) crescem absurdamente e rapidamente se tornam inviáveis.


---

# ✨ Dicas para memorizar o Big O

- 🔵 **Constante (O(1))** → "Acesso direto"
- 🟢 **Logarítmico (O(log n))** → "Dividindo pela metade"
- 🟡 **Linear (O(n))** → "Proporcional"
- 🟠 **Quasilinear (O(n log n))** → "Dividir para conquistar"
- 🔴 **Quadrático (O(n²))** → "Comparações duplas"
- 🟣 **Exponencial (O(2ⁿ))** → "Dobrar combinações"
- ⚫ **Fatorial (O(n!))** → "Todas as ordens possíveis"

=