---
sidebar_label: "Stack e Heap"
sidebar_position: 3
description: "As duas principais regiões de memória de um programa e quando cada uma é usada."
---

# Memória stack e heap

Durante a execução, um programa usa duas regiões principais de memória: a **stack**, para dados temporários das chamadas de função, e a **heap**, para dados alocados dinamicamente que precisam sobreviver além de uma chamada.

## Como funciona

### Stack

Cada chamada de função empilha um bloco (*frame*) na stack contendo:

- Parâmetros da função
- Variáveis locais (especialmente tipos primitivos)
- Endereço de retorno

Quando a função termina, o frame é removido automaticamente. A stack segue o modelo [LIFO](./lifo.md): o último frame empilhado é o primeiro a sair.

- **Alocação**: automática, gerenciada pelo runtime
- **Velocidade**: muito rápida
- **Tamanho**: limitado; recursão profunda causa *stack overflow*

### Heap

A heap guarda memória reservada sob demanda durante a execução, como objetos, listas, árvores e grafos.

- **Alocação**: manual em C/C++ (`malloc`/`free`), automática via *garbage collector* em Java, JavaScript, Python e C#
- **Velocidade**: mais lenta que a stack, devido ao gerenciamento
- **Tamanho**: geralmente muito maior que a stack
- **Riscos**: vazamentos de memória em linguagens sem garbage collector

```python
def build_list(n):
    size = n            # 'size' e a referência 'items' vivem no frame (stack)
    items = [0] * size  # a lista em si é alocada na heap
    return items        # o frame é descartado; a lista continua na heap
```

## Comparativo

| Característica | Stack                              | Heap                                  |
| :------------- | :--------------------------------- | :------------------------------------ |
| Alocação       | Automática                         | Manual (C/C++) ou automática (GC)     |
| Velocidade     | Muito rápida                       | Mais lenta                            |
| Tamanho        | Limitado                           | Geralmente maior                      |
| Uso            | Variáveis locais e chamadas        | Objetos e estruturas dinâmicas        |
| Liberação      | Ao fim da função                   | Manual ou pelo garbage collector      |
| Riscos         | Stack overflow                     | Vazamentos e fragmentação             |

## Quando usar

- **Stack**: dados pequenos com tempo de vida restrito a uma função
- **Heap**: dados grandes, de tamanho desconhecido em tempo de compilação ou que precisam sobreviver à função que os criou

## Perguntas de revisão

<details>
<summary>O que acontece com as variáveis locais quando a função retorna?</summary>

O frame é desempilhado e elas deixam de existir. Objetos na heap continuam vivos enquanto houver referências a eles, como uma lista retornada pela função.

</details>

<details>
<summary>Por que recursão muito profunda causa *stack overflow*, mas um objeto grande não?</summary>

Cada chamada empilha um frame em uma stack de tamanho limitado. Objetos grandes vão para a heap, que é bem maior.

</details>

<details>
<summary>Em `items = [0] * size`, onde ficam `items` e a lista?</summary>

A referência `items` fica no frame, na stack. A lista em si fica na heap.

</details>

## Relacionados

- [LIFO](./lifo.md)
- [Pilha (stack)](../data-structures/stack.md)
- [Threads](./thread.md)
