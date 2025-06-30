# Linked List

## Introdução

Uma **Linked List** é uma estrutura de dados linear onde cada elemento (nó) contém um valor e uma referência (ponteiro) para o próximo nó na sequência.

## Tipos de Lista Ligada
- **Lista Ligada Simples**: Cada nó aponta para o próximo nó
- **Lista Duplamente Ligada**: Cada nó aponta para o próximo e para o nó anterior
- **Lista Ligada Circular**: O último nó aponta de volta para o primeiro nó

## Operações Principais
- **Inserção**: Adiciona um novo nó (O(1) na cabeça, O(n) na cauda ou em posição arbitrária)
- **Remoção**: Remove um nó (O(1) se o nó é conhecido, O(n) para buscar)
- **Busca**: Encontra um nó com um valor específico (O(n))
- **Percurso**: Visita todos os nós em sequência (O(n))

## Exemplo (Python - Lista Ligada Simples)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        curr = self.head
        while curr:
            print(curr.data, end=" ")
            curr = curr.next
        print()

# Uso
ll = LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.print_list()  # Saída: 10 20 30
```

## Aplicações
- Implementação de pilhas, filas e outros tipos abstratos de dados
- Alocação dinâmica de memória
- Funcionalidade de desfazer/refazer em aplicativos

## Quando Usar uma Lista Ligada
- Quando você precisa de inserções/remoções eficientes em posições arbitrárias
- Quando o tamanho da estrutura de dados muda frequentemente

## Limitações
- Não há acesso direto por índice (é necessário percorrer a partir da cabeça)
- Uso extra de memória para ponteiros
- Busca mais lenta comparada a arrays

## Estruturas de Dados Relacionadas
- **Array**: Acesso direto por índice, tamanho fixo
- **Lista Duplamente Ligada**: Permite percurso em ambas as direções 