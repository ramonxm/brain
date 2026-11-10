---
sidebar_label: "LIFO"
sidebar_position: 5
description: "Last In, First Out: o último elemento a entrar é o primeiro a sair."
---

# LIFO (Last In, First Out)

**LIFO** ("último a entrar, primeiro a sair") é a política em que o elemento removido é sempre o mais recente, como em uma pilha de pratos: o último colocado no topo é o primeiro a ser retirado.

## Como funciona

A política define apenas **qual** elemento sai, não como ele é guardado. Inserções e remoções acontecem na mesma extremidade, então a ordem de saída é a **inversa** da ordem de entrada: inserir `1, 2, 3` e remover tudo devolve `3, 2, 1`.

Isso faz do LIFO a política natural para tudo que é **aninhado**: a última coisa aberta precisa ser a primeira a ser fechada. A estrutura que a implementa é a [pilha (*stack*)](../data-structures/stack.md).

## Comparativo

| Característica       | LIFO                         | [FIFO](./fifo.md)              |
| :------------------- | :--------------------------- | :----------------------------- |
| Sai primeiro         | O mais recente               | O mais antigo                  |
| Ordem de saída       | Inversa à de entrada         | Igual à de entrada             |
| Estrutura            | Pilha                        | Fila                           |
| Percurso de grafo    | Busca em profundidade (DFS)  | Busca em largura (BFS)         |

## Aplicações

- [Pilha de chamadas](./memory-stack-heap.md): cada função retorna antes de quem a chamou
- Desfazer (*undo*): a última ação é a primeira a ser desfeita
- Verificação de parênteses: o último aberto é o primeiro a fechar
- Busca em profundidade (DFS): explora sempre o vértice descoberto mais recentemente

## Perguntas de revisão

<details>
<summary>Que tipo de problema costuma pedir LIFO?</summary>

Problemas com estrutura aninhada, em que o último elemento aberto precisa ser o primeiro a ser resolvido: chamadas de função, parênteses, desfazer.

</details>

<details>
<summary>O que acontece com a ordem dos elementos ao passar por uma pilha?</summary>

Ela se inverte: inserir `1, 2, 3` e remover tudo devolve `3, 2, 1`.

</details>

<details>
<summary>Trocar a fila da BFS por uma pilha produz que percurso?</summary>

Uma busca em profundidade (DFS), pois o próximo vértice explorado passa a ser o descoberto mais recentemente.

</details>

## Relacionados

- [Pilha (stack)](../data-structures/stack.md)
- [FIFO](./fifo.md)
- [Memória stack e heap](./memory-stack-heap.md)
