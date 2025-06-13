# Memória Heap e Stack

Quando um programa é executado, a memória é alocada para armazenar variáveis e dados temporários. Duas áreas principais de memória são comumente utilizadas: **stack** e **heap**.

## O que é Stack?

A **stack** (ou pilha) é uma região de memória usada para armazenar variáveis locais e informações das funções em execução. Cada vez que uma função é chamada, um novo bloco (chamado de *frame*) é adicionado à stack, contendo:

- Parâmetros da função
- Variáveis locais (especialmente tipos primitivos)
- Endereço de retorno (para saber para onde voltar após a execução da função)

Quando a função termina, esse bloco é removido automaticamente. A stack segue o modelo **LIFO (Last In, First Out)**: o último item adicionado é o primeiro a ser removido. Isso torna a stack muito eficiente, mas ela possui um tamanho limitado, determinado pelo sistema operacional ou pelo runtime.

### Características da Stack

- Alocação e liberação automáticas (gerenciadas pelo próprio runtime)
- Extremamente rápida e eficiente
- Tamanho limitado (pode causar *stack overflow* em casos de recursão profunda, por exemplo)
- Usada para variáveis locais, chamadas de função e controle de fluxo

## O que é Heap?

A **heap** é uma área de memória usada para alocação dinâmica, ou seja, memória reservada durante a execução do programa conforme a necessidade.

- Em linguagens de baixo nível (como C e C++), o programador é responsável por alocar (`malloc`) e liberar (`free`) essa memória manualmente.
- Em linguagens de alto nível (como Java, JavaScript, Python, C#), o gerenciamento da heap é feito automaticamente por mecanismos de **garbage collection** (coletor de lixo), que libera a memória não mais utilizada.

A heap é geralmente utilizada para armazenar objetos e estruturas de dados de maior duração e complexidade, como listas, árvores, grafos, etc.

### Características da Heap

- Alocação e liberação manual (em C/C++) ou automática via garbage collector (em linguagens modernas)
- Permite criar estruturas de dados dinâmicas e flexíveis
- Mais lenta que a stack (devido à complexidade de gerenciamento)
- Tamanho geralmente muito maior que a stack
- Possibilidade de vazamentos de memória caso a liberação não seja feita corretamente (em linguagens sem garbage collector)

## Diferenças entre Stack e Heap

| Stack                        | Heap                                |
|------------------------------|-------------------------------------|
| Alocação automática          | Alocação manual (C/C++) ou automática (GC) |
| Muito rápida                 | Mais lenta                          |
| Tamanho limitado             | Tamanho geralmente maior            |
| Usada para variáveis locais e chamadas de função | Usada para objetos e estruturas dinâmicas |
| Liberação automática         | Liberação manual ou automática (GC)  |
| Menor risco de vazamentos    | Risco de vazamento em algumas situações |

## Resumo

- **Stack:** usada para dados temporários e chamadas de função, com gerenciamento automático e muito eficiente.
- **Heap:** usada para alocação dinâmica de objetos e estruturas de dados mais complexas, com gerenciamento manual ou automático dependendo da linguagem.

Entender como funcionam stack e heap é fundamental para escrever programas eficientes, escaláveis e com bom gerenciamento de memória.
