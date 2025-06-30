# Árvore Binária

## Introdução

Uma **árvore binária** é uma estrutura de dados hierárquica na qual cada nó possui no máximo dois filhos, chamados de filho esquerdo e filho direito.

## Propriedades Principais
- **Raiz**: O nó superior da árvore
- **Folha**: Um nó sem filhos
- **Altura**: O comprimento do caminho mais longo da raiz até uma folha
- **Profundidade**: O comprimento do caminho da raiz até um nó

## Tipos de Árvores Binárias
- **Árvore Binária Cheia**: Todo nó tem 0 ou 2 filhos
- **Árvore Binária Completa**: Todos os níveis estão completos, exceto possivelmente o último, que é preenchido da esquerda para a direita
- **Árvore Binária Perfeita**: Todos os nós internos têm dois filhos e todas as folhas estão no mesmo nível
- **Árvore Binária Balanceada**: A altura da árvore é minimizada
- **Árvore de Busca Binária (BST)**: Filho esquerdo < pai < filho direito

## Exemplo (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.data, end=" ")
        inorder_traversal(root.right)

# Uso
root = Node(10)
root.left = Node(5)
root.right = Node(15)
root.left.left = Node(2)
root.left.right = Node(7)

inorder_traversal(root)  # Saída: 2 5 7 10 15
```

## Aplicações
- Representação de dados hierárquicos (sistemas de arquivos, organogramas)
- Análise e avaliação de expressões
- Árvores de busca binária para busca, inserção e remoção rápidas
- Heaps para filas de prioridade

## Quando Usar uma Árvore Binária
- Quando você precisa representar relações hierárquicas
- Quando precisa de busca, inserção e remoção eficientes (BST)

## Limitações
- Pode se tornar desbalanceada, levando a desempenho ruim (operações O(n))
- Mais complexa de implementar do que arrays ou listas ligadas

## Estruturas de Dados Relacionadas
- **Árvore de Busca Binária (BST)**: Mantém a ordem ordenada
- **Árvore AVL, Árvore Rubro-Negra**: Árvores de busca binária auto-balanceadas
- **Heap**: Árvore binária completa usada para filas de prioridade 