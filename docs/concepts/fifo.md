---
sidebar_label: "FIFO"
sidebar_position: 4
description: "First In, First Out: o primeiro elemento a entrar é o primeiro a sair."
---

# FIFO (First In, First Out)

**FIFO** ("primeiro a entrar, primeiro a sair") é a política em que os elementos são removidos na mesma ordem em que foram inseridos, como em uma fila de supermercado: quem chega primeiro é atendido primeiro.

## Como funciona

A política define apenas **qual** elemento sai, não como ele é guardado. Elementos entram por uma extremidade e saem pela outra, então a ordem de saída é **igual** à de entrada: inserir `1, 2, 3` e remover tudo devolve `1, 2, 3`.

Isso faz do FIFO a política natural para tudo que precisa ser **justo** ou processado **por ordem de chegada**. A estrutura que a implementa é a [fila (*queue*)](../data-structures/queue.md). O [comparativo com LIFO](./lifo.md#comparativo) mostra as duas lado a lado.

## Aplicações

- [Busca em largura (BFS)](../algorithms/graph/breadth-first-search.md): processa os vértices por nível de distância
- Escalonamento de processos e [threads](./thread.md) por ordem de chegada
- Filas de impressão, de tarefas e de mensagens
- Buffers de rede e de I/O, que precisam preservar a ordem dos dados

## Perguntas de revisão

<details>
<summary>Que tipo de problema costuma pedir FIFO?</summary>

Problemas em que a ordem de chegada importa ou em que tudo precisa ser processado por camadas, como a BFS e filas de tarefas.

</details>

<details>
<summary>Por que uma fila preserva a ordem e uma pilha a inverte?</summary>

Na fila, entrada e saída acontecem em extremidades opostas; na pilha, na mesma extremidade.

</details>

<details>
<summary>Por que a BFS depende do FIFO para achar o menor caminho?</summary>

O FIFO garante que todos os vértices a distância `k` saiam da fila antes dos que estão a distância `k + 1`.

</details>

## Relacionados

- [Fila (queue)](../data-structures/queue.md)
- [LIFO](./lifo.md)
- [Busca em largura (BFS)](../algorithms/graph/breadth-first-search.md)
