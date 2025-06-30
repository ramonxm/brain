# Array (Vetor)

## Introdução

Um **array** (ou vetor) é uma estrutura de dados que armazena uma sequência de elementos do mesmo tipo em posições de memória contíguas.

## Propriedades Principais
- **Indexado**: Cada elemento pode ser acessado diretamente pelo seu índice
- **Tamanho fixo**: O tamanho é definido na criação e não pode ser alterado
- **Homogêneo**: Todos os elementos são do mesmo tipo

## Operações Principais
- **Acesso**: O(1) - Acesso direto pelo índice
- **Atualização**: O(1) - Atualização direta pelo índice
- **Busca**: O(n) - Busca linear por um elemento
- **Inserção/Remoção**: O(n) - Pode exigir o deslocamento de elementos

## Exemplo (Python)

```python
# Criando um array
arr = [10, 20, 30, 40, 50]

# Acessando elementos
print(arr[2])  # Saída: 30

# Atualizando elementos
arr[1] = 25
print(arr)  # Saída: [10, 25, 30, 40, 50]

# Buscando um elemento
if 40 in arr:
    print("Encontrado!")

# Inserindo um elemento (no final)
arr.append(60)

# Removendo um elemento (por valor)
arr.remove(30)
print(arr)  # Saída: [10, 25, 40, 50, 60]
```

## Aplicações
- Quando é necessário acesso rápido e direto aos elementos
- Implementação de outras estruturas de dados (pilhas, filas, etc.)
- Armazenamento de coleções de dados de tamanho fixo

## Quando Usar um Array
- Quando o número de elementos é conhecido e fixo
- Quando o acesso por índice é uma prioridade

## Limitações
- Tamanho fixo (na maioria das linguagens)
- Inserção e remoção podem ser custosas (O(n))
- Todos os elementos devem ser do mesmo tipo

## Estruturas de Dados Relacionadas
- **Array Dinâmico (List em Python, Vector em C++)**: Versão redimensionável de um array
- **Lista Ligada**: Permite inserções/remoções eficientes, mas acesso mais lento 