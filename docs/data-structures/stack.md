# Stack

## Introdução

Uma **pilha** é uma estrutura de dados linear que segue o princípio do Último a Entrar, Primeiro a Sair (LIFO). O último elemento inserido é o primeiro a ser removido.

## Operações Principais
- **Empilhar (Push)**: Adiciona um elemento ao topo da pilha (O(1))
- **Desempilhar (Pop)**: Remove o elemento do topo da pilha (O(1))
- **Topo (Peek/Top)**: Visualiza o elemento do topo sem removê-lo (O(1))
- **Está Vazia (IsEmpty)**: Verifica se a pilha está vazia

## Exemplo (Python)

```python
pilha = []

# Empilhar elementos
pilha.append(10)
pilha.append(20)
pilha.append(30)

# Ver o topo
print(pilha[-1])  # Saída: 30

# Desempilhar elementos
print(pilha.pop())  # Saída: 30
print(pilha.pop())  # Saída: 20

# Verificar se está vazia
if not pilha:
    print("Pilha está vazia!")
```

## Aplicações
- Gerenciamento de chamadas de funções (call stack)
- Funcionalidade de desfazer/refazer em editores
- Avaliação de expressões (notação pós-fixa, pré-fixa)
- Análise sintática

## Quando Usar uma Pilha
- Quando é necessário reverter dados
- Quando é preciso controlar operações aninhadas ou recursivas

## Limitações
- Apenas o elemento do topo é acessível
- Não é adequada para acesso aleatório

## Estruturas de Dados Relacionadas
- **Fila**: Segue o princípio Primeiro a Entrar, Primeiro a Sair (FIFO)
- **Deque**: Fila de duas pontas, permite inserção/remoção em ambas as extremidades 