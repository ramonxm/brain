---
sidebar_label: "Pilha (Stack)"
description: "Estrutura linear LIFO com inserção e remoção no topo."
---

# Pilha (stack)

Uma **pilha** (*stack*) é uma estrutura linear que segue a política [LIFO](../concepts/lifo.md): o último elemento inserido é o primeiro a ser removido. Todas as operações acontecem em uma única extremidade, o **topo**.

## Como funciona

- **Push**: adiciona um elemento ao topo
- **Pop**: remove e retorna o elemento do topo
- **Peek**: consulta o topo sem removê-lo
- **Is empty**: verifica se a pilha está vazia

## Complexidade

| Operação | Complexidade |
| :------- | :----------- |
| Push     | O(1)         |
| Pop      | O(1)         |
| Peek     | O(1)         |
| Busca    | O(n)         |

## Implementação

Em Python, uma `list` já funciona como pilha usando o final como topo:

```python
stack = []

stack.append(10)  # push
stack.append(20)
stack.append(30)

print(stack[-1])     # Saída: 30 (peek)
print(stack.pop())   # Saída: 30
print(stack.pop())   # Saída: 20

if not stack:
    print("Pilha vazia")
```

## Aplicações

- Pilha de chamadas de função (*call stack*)
- Desfazer/refazer em editores
- Avaliação de expressões (notação pós-fixa) e verificação de parênteses
- Análise sintática e busca em profundidade (DFS)

## Vantagens e desvantagens

### Vantagens

- Todas as operações principais em O(1)
- Implementação simples sobre um array ou lista ligada

### Desvantagens

- Só o topo é acessível
- Não serve para acesso aleatório

## Quando usar

- Quando é preciso inverter a ordem dos dados
- Para controlar operações aninhadas ou recursivas

## Relacionados

- [LIFO](../concepts/lifo.md)
- [Fila (queue)](./queue.md)
- [Memória stack e heap](../concepts/memory-stack-heap.md)
