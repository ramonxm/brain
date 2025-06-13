# FIFO (First In, First Out)

*FIFO*, que significa "Primeiro a Entrar, Primeiro a Sair" (First In, First Out), é um método comumente usado em programação de computadores e estruturas de dados. Refere-se a um tipo de estrutura de dados ou processamento onde o primeiro elemento adicionado a uma coleção é o primeiro a ser removido. Este princípio é semelhante a uma fila no mundo real, como pessoas esperando em uma fila de supermercado. A pessoa que chega primeiro é a primeira a ser atendida.

Na programação, FIFO é frequentemente implementado usando uma estrutura de dados chamada fila (queue).

1. **Enqueue:** Adiciona um elemento ao final da fila.
2. **Dequeue:** Remove o elemento do início da fila.

Este processo garante que os elementos sejam processados na ordem em que foram adicionados, mantendo a ordem FIFO.

Aqui está um exemplo simples em Python usando uma lista como uma fila básica:

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Exemplo de Uso:
my_queue = Queue()
my_queue.enqueue(1)
my_queue.enqueue(2)
my_queue.enqueue(3)

print(my_queue.dequeue())  # Saída: 1
print(my_queue.dequeue())  # Saída: 2
```
