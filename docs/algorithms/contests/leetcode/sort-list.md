---
sidebar_label: "Sort List"
description: "Ordene uma lista ligada em O(n log n) com Merge Sort."
---

# Sort List

Ordenar uma lista ligada em O(n log n) adaptando o [Merge Sort](../../sorting/merge-sort.md), que só precisa ajustar ponteiros.

:::info[Fonte]

[LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)

:::

## Problema

Dada a cabeça (`head`) de uma lista ligada, retorne a lista ordenada em ordem crescente.

## Solução

```ts
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  // Encontra o meio com ponteiros lento e rápido
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Divide a lista em duas metades
  const mid = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(mid));
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ?? l2;
  return dummy.next;
}
```

## Explicação

1. Encontre o meio da lista com dois ponteiros: o lento avança um nó por vez e o rápido, dois. Quando o rápido chega ao fim, o lento está no meio.
2. Corte a lista em duas metades.
3. Ordene cada metade recursivamente.
4. Intercale as duas metades ordenadas, usando um nó sentinela (`dummy`) para simplificar a construção da lista resultante.

## Complexidade

| Métrica | Complexidade |
| :------ | :----------- |
| Tempo   | O(n log n)   |
| Espaço  | O(log n)     |

O espaço vem da pilha de recursão; a intercalação não aloca novos nós. A solução é **estável**.

## Casos de teste

```ts
function fromArray(values: number[]): ListNode | null {
  return values.reduceRight<ListNode | null>((next, val) => new ListNode(val, next), null);
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  for (let node = head; node; node = node.next) values.push(node.val);
  return values;
}

console.log(toArray(sortList(fromArray([4, 2, 1, 3]))));     // Saída: [1, 2, 3, 4]
console.log(toArray(sortList(fromArray([-1, 5, 3, 4, 0])))); // Saída: [-1, 0, 3, 4, 5]
console.log(toArray(sortList(fromArray([3, 1, 3, 1]))));     // Saída: [1, 1, 3, 3]
console.log(toArray(sortList(fromArray([]))));               // Saída: []
```

## Relacionados

- [Merge Sort](../../sorting/merge-sort.md)
- [Lista ligada](../../../data-structures/linked-list.md)
