---
sidebar_label: "Dois Ponteiros"
sidebar_position: 2
description: "Percorrer uma sequência com dois índices que se movem por regras próprias, em uma única passada."
---

# Dois ponteiros

A técnica de **dois ponteiros** (*two pointers*) percorre uma sequência com dois índices (ou referências) ao mesmo tempo, movendo cada um por uma regra própria. Ela resolve em uma passada o que a força bruta resolveria comparando todos os pares.

## Como funciona

Há três variações principais:

- **Pontas opostas**: um ponteiro no início e outro no fim, caminhando para o centro
- **Mesma direção, velocidades diferentes**: um ponteiro lento e um rápido
- **Uma sequência para cada ponteiro**: cada um avança na sua, como ao intercalar duas listas ordenadas

A cada passo, a regra de movimento descarta pelo menos um candidato. Por isso o total de passos é O(n), e não O(n²).

## Como reconhecer

- Os dados estão ordenados ou formam uma sequência linear
- A força bruta compararia pares em O(n²), mas cada comparação permite descartar um dos lados
- Precisa do meio, do fim ou de um ciclo em uma lista ligada sem saber o tamanho dela

## Onde aparece

- [Swap](../../concepts/swap.md): inverter um array com `left` e `right` vindo das pontas
- [Busca binária](../search/binary-search.md): `left` e `right` delimitam o intervalo e se aproximam
- [Quick Sort](../sorting/quick-sort.md): `i` marca a fronteira dos menores enquanto `j` percorre o array
- [Merge Sort](../sorting/merge-sort.md): `i` e `j` percorrem as duas metades na intercalação
- [Sort List](../contests/leetcode/sort-list.md): ponteiros lento e rápido para achar o meio da lista

## Perguntas de revisão

<details>
<summary>Como achar o meio de uma lista ligada em uma única passada?</summary>

O ponteiro lento avança um nó por vez e o rápido, dois. Quando o rápido chega ao fim, o lento está no meio.

</details>

<details>
<summary>Por que ponteiros nas pontas acham um par com soma alvo em um array ordenado em O(n)?</summary>

Se a soma é menor que o alvo, só avançar o ponteiro esquerdo pode aumentá-la; se é maior, só recuar o direito pode diminuí-la. Cada passo descarta um elemento.

</details>

<details>
<summary>Que propriedade dos dados a técnica costuma exigir?</summary>

Ordenação (ou outra monotonicidade) ou uma estrutura linear em que mover um ponteiro descarta candidatos com segurança.

</details>

## Relacionados

- [Divisão e conquista](./divide-and-conquer.md)
- [Hash map como índice](./hash-map-lookup.md)
- [Array](../../data-structures/array.md)
- [Lista ligada](../../data-structures/linked-list.md)
