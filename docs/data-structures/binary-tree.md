---
sidebar_label: "Árvore Binária"
description: "Estrutura hierárquica em que cada nó tem no máximo dois filhos."
---

# Árvore binária

Uma **árvore binária** é uma estrutura hierárquica em que cada nó tem no máximo dois filhos, chamados de filho esquerdo e filho direito. Quando os valores seguem a regra `esquerda < nó < direita`, ela é uma **árvore binária de busca** (BST).

## Como funciona

- **Raiz**: o nó no topo da árvore
- **Folha**: nó sem filhos
- **Altura**: comprimento do caminho mais longo da raiz até uma folha
- **Profundidade**: comprimento do caminho da raiz até um nó

Tipos comuns:

- **Cheia**: todo nó tem 0 ou 2 filhos
- **Completa**: todos os níveis estão completos, exceto talvez o último, preenchido da esquerda para a direita
- **Perfeita**: todos os nós internos têm dois filhos e todas as folhas estão no mesmo nível
- **Balanceada**: a altura é mantida em O(log n)

## Complexidade

Para uma árvore binária de busca:

| Operação | Complexidade (balanceada) | Complexidade (pior caso) |
| :------- | :------------------------ | :----------------------- |
| Busca    | O(log n)                  | O(n)                     |
| Inserção | O(log n)                  | O(n)                     |
| Remoção  | O(log n)                  | O(n)                     |
| Percurso | O(n)                      | O(n)                     |

O pior caso acontece quando a árvore degenera em uma lista, por exemplo ao inserir valores já ordenados.

## Implementação

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def inorder(root):
    """Percurso em ordem: esquerda, nó, direita."""
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)


root = Node(10)
root.left = Node(5)
root.right = Node(15)
root.left.left = Node(2)
root.left.right = Node(7)

inorder(root)  # Saída: 2 5 7 10 15
```

## Aplicações

- Dados hierárquicos (sistemas de arquivos, organogramas)
- Árvores de expressão em compiladores
- Árvores de busca para busca, inserção e remoção rápidas
- Heaps para filas de prioridade

## Vantagens e desvantagens

### Vantagens

- Operações em O(log n) quando balanceada
- Percurso em ordem devolve os valores ordenados (BST)

### Desvantagens

- Pode desbalancear e degradar para O(n)
- Mais complexa de implementar que arrays e listas

## Quando usar

- Para representar relações hierárquicas
- Quando busca, inserção e remoção precisam ser eficientes e os dados precisam ficar ordenados

## Relacionados

- [Construct Binary Tree](../algorithms/contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal.md)
- [Busca binária](../algorithms/search/binary-search.md)
- Árvores AVL e rubro-negras (árvores de busca autobalanceadas)
