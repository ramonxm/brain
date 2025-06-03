# 🧠 Memória Heap e Stack

Quando um programa é executado, a memória é alocada para armazenar variáveis e dados temporários. Duas áreas principais de memória são comumente utilizadas: heap e stack.

## Memória Stack

A memória stack é uma região que armazena variáveis locais e informações relacionadas às funções que estão sendo executadas no momento. Cada função tem seu próprio frame de stack, contendo parâmetros, endereço de retorno e variáveis locais. A alocação e desalocação de memória na stack são feitas automaticamente conforme as funções são chamadas e retornadas.

As operações na stack seguem o modelo Last In, First Out (LIFO), onde o último item adicionado é o primeiro a ser removido. Isso torna a stack eficiente para gerenciar a execução de funções, mas vem com uma capacidade limitada.

## Memória Heap

A memória heap é uma área de memória dinâmica usada para alocar memória durante a execução do programa. A alocação e desalocação de memória no heap são controladas explicitamente pelo programador. Isso permite a criação de estruturas de dados flexíveis e gerenciamento eficiente de memória conforme necessário.

Diferente da stack, o heap não possui uma estrutura organizacional específica, e a alocação de memória pode ocorrer de forma esporádica. É responsabilidade do programador liberar a memória heap alocada quando ela não for mais necessária, evitando vazamentos de memória.

## Conclusão

Em resumo, a memória stack é usada para armazenar dados temporários e informações relacionadas a funções, com alocação e desalocação automática. Por outro lado, a memória heap permite alocação dinâmica de memória, fornecendo mais controle ao programador, mas exigindo um gerenciamento responsável de memória.

Ambas as áreas de memória desempenham papéis vitais na operação do programa, e uma compreensão adequada delas é crucial para um desenvolvimento eficiente e livre de bugs.
