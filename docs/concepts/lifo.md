# LIFO (Último a Entrar, Primeiro a Sair)

LIFO, ou "Último a Entrar, Primeiro a Sair", é um método de organização de dados onde o último elemento adicionado é o primeiro a ser removido. Este conceito é comumente aplicado em estruturas de dados como pilhas.

## Pilhas

Uma pilha é uma coleção de elementos onde as operações de inserção e remoção ocorrem apenas em uma extremidade, conhecida como topo. Quando um elemento é adicionado à pilha, ele se torna o novo topo, e quando um elemento é removido, é sempre o elemento do topo que é retirado.

### Operação LIFO em Pilhas

- **Inserção (Push):** Novos elementos são adicionados ao topo da pilha.
- **Remoção (Pop):** A remoção também acontece no topo, retirando o elemento mais recentemente adicionado.

### Exemplo de Código em Python

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

# Usando a Pilha
stack_example = Stack()
stack_example.push(1)
stack_example.push(2)
stack_example.push(3)

print(stack_example.pop())  # Saída: 3
print(stack_example.pop())  # Saída: 2
```
