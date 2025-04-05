---
sidebar_position: 3
---

# Sort List

## Problema

Dada a cabeça de uma lista encadeada, retorne a lista encadeada ordenada em ordem crescente.

## Solução

```typescript
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    
    // Encontra o meio da lista usando o método "fast and slow pointers"
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    // Divide a lista em duas partes
    const mid = slow!.next;
    slow!.next = null;
    
    // Ordena recursivamente as duas metades
    const left = sortList(head);
    const right = sortList(mid);
    
    // Combina as duas metades ordenadas
    return merge(left, right);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
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
    
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    
    return dummy.next;
}
```

## Explicação

A solução utiliza o algoritmo Merge Sort adaptado para listas encadeadas:

1. Divide a lista em duas metades usando a técnica de ponteiros rápido e lento
2. Ordena recursivamente cada metade
3. Combina as duas metades ordenadas

O processo de divisão e combinação continua até que a lista esteja completamente ordenada.

## Complexidade

- Tempo: O(n log n)
- Espaço: O(log n) devido à recursão

## Exemplo

```typescript
// Criando a lista: 4 -> 2 -> 1 -> 3
const head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

const sorted = sortList(head);
// Resultado: 1 -> 2 -> 3 -> 4
```

## Casos de Teste

```typescript
// Teste 1: Lista já ordenada
const test1 = new ListNode(1);
test1.next = new ListNode(2);
test1.next.next = new ListNode(3);
console.log(sortList(test1)); // 1 -> 2 -> 3

// Teste 2: Lista em ordem reversa
const test2 = new ListNode(3);
test2.next = new ListNode(2);
test2.next.next = new ListNode(1);
console.log(sortList(test2)); // 1 -> 2 -> 3

// Teste 3: Lista com elementos repetidos
const test3 = new ListNode(3);
test3.next = new ListNode(1);
test3.next.next = new ListNode(3);
test3.next.next.next = new ListNode(1);
console.log(sortList(test3)); // 1 -> 1 -> 3 -> 3
```

## Observações

- A solução é estável (mantém a ordem relativa de elementos iguais)
- Usa espaço extra O(log n) devido à recursão
- É eficiente para listas encadeadas, pois não requer acesso aleatório
- O Merge Sort é uma boa escolha para listas encadeadas porque não requer trocas de elementos, apenas ajustes nos ponteiros