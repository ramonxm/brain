# Queue

## Introdução

Uma **fila** é uma estrutura de dados linear que segue o princípio do Primeiro a Entrar, Primeiro a Sair (FIFO). O primeiro elemento inserido é o primeiro a ser removido.

## Operações Principais
- **Enfileirar (Enqueue)**: Adiciona um elemento ao final da fila (O(1))
- **Desenfileirar (Dequeue)**: Remove o elemento do início da fila (O(1))
- **Frente (Peek/Front)**: Visualiza o elemento da frente sem removê-lo (O(1))
- **Está Vazia (IsEmpty)**: Verifica se a fila está vazia

## Exemplo (Python)

```python
from collections import deque

fila = deque()

# Enfileirar elementos
fila.append(10)
fila.append(20)
fila.append(30)

# Ver a frente
print(fila[0])  # Saída: 10

# Desenfileirar elementos
print(fila.popleft())  # Saída: 10
print(fila.popleft())  # Saída: 20

# Verificar se está vazia
if not fila:
    print("Fila está vazia!")
```

## Aplicações
- Escalonamento de tarefas (fila de impressão, escalonamento de CPU)
- Busca em largura (BFS) em grafos
- Gerenciamento de requisições em servidores web
- Gerenciamento de buffers

## Quando Usar uma Fila
- Quando é necessário processar itens na ordem de chegada
- Ao implementar algoritmos como BFS

## Limitações
- Apenas os elementos da frente e do final são acessíveis
- Não é adequada para acesso aleatório

## Estruturas de Dados Relacionadas
- **Pilha**: Segue o princípio Último a Entrar, Primeiro a Sair (LIFO)
- **Deque**: Fila de duas pontas, permite inserção/remoção em ambas as extremidades 