---
sidebar_label: "Hash Map como Índice"
sidebar_position: 3
description: "Trocar buscas O(n) por consultas O(1) guardando em um hash map o que já foi visto."
---

# Hash map como índice

Guardar em um **hash map** o que já foi visto (valor → índice, valor → contagem) troca buscas O(n) por consultas **O(1) em média**, ao custo de O(n) de memória.

## Como funciona

1. Percorra os dados uma vez.
2. Para cada elemento, consulte no mapa o que ele precisa: um complemento, uma posição, uma contagem.
3. Guarde o elemento atual no mapa para os próximos.

Consultar **antes** de guardar evita combinar um elemento com ele mesmo.

## Como reconhecer

- A força bruta tem um laço interno que só procura um valor (`indexOf`, `in`, outro `for`)
- Dá para calcular exatamente o que se procura, como o complemento `alvo − x`
- O(n) de memória extra é aceitável

## Onde aparece

- [Two Sum](../contests/leetcode/two-sum.md): mapa valor → índice para achar o complemento em uma passada
- [Construct Binary Tree](../contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md): um mapa valor → índice de `inorder` substitui o `indexOf` e leva a solução de O(n²) para O(n)
- [Roman to Integer](../contests/leetcode/roman-to-integer.md): uma tabela fixa símbolo → valor no lugar de uma cadeia de `if`s
- [Lista ligada](../../data-structures/linked-list.md): caches LRU combinam uma lista duplamente ligada com um hash map

## Comparativo

Para encontrar um par com soma alvo:

| Abordagem                   | Tempo      | Espaço | Exige                     |
| :-------------------------- | :--------- | :----- | :------------------------ |
| Força bruta (todos os pares) | O(n²)     | O(1)   | Nada                      |
| Ordenar + dois ponteiros    | O(n log n) | O(1)\* | Poder reordenar os dados  |
| Hash map                    | O(n)       | O(n)   | Memória extra             |

\* Sem contar a memória da ordenação.

## Perguntas de revisão

<details>
<summary>Em Two Sum, por que consultar o complemento antes de inserir o número atual?</summary>

Para não usar o mesmo elemento duas vezes. Com alvo `6` e um único `3`, inserir antes faria o `3` encontrar a si mesmo.

</details>

<details>
<summary>Qual o custo dessa técnica?</summary>

O(n) de memória extra. Em troca, cada consulta custa O(1) em média.

</details>

<details>
<summary>Quando um hash map não é a melhor saída?</summary>

Quando o problema exige O(1) de memória, como em [Single Number](../contests/leetcode/single-number.md), que usa XOR, ou quando os dados já estão ordenados e [dois ponteiros](./two-pointers.md) bastam.

</details>

## Relacionados

- [Dois ponteiros](./two-pointers.md)
- [Array](../../data-structures/array.md)
- [Notação Big O](../../concepts/big-o-notation.md)
