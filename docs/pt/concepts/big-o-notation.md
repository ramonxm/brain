# Notação Big O

### Big O **fala sobre como os algoritmos ESCALAM** dependendo do **tamanho** da **entrada**, e **não** necessariamente sobre o **desempenho** do **algoritmo**.

<aside>
💡

É uma forma de **denotar o desempenho do algoritmo**, mas **não** é uma **medida de desempenho**

</aside>

<aside>
💡

Big O **não mede o tempo exato de execução** de um algoritmo, mas sim **como o tempo cresce** conforme o tamanho da entrada aumenta. 📈

</aside>

---

### Big O pode ser usado para medir tanto a *complexidade de tempo* quanto a *complexidade de espaço* de um algoritmo.

- **Complexidade de Tempo**: Relaciona-se ao tempo de execução (runtime), ou seja, quanto tempo leva para executar. **Mais comum em entrevistas**
- **Complexidade de Espaço**: Relaciona-se a quanto de memória adicional precisamos alocar

---

> A **análise assintótica** é a forma de analisar como um algoritmo se comporta em termos de tempo e memória conforme o tamanho da entrada cresce.
> 

---

# Principais notações do BIG O:

## **O(1) – Complexidade Constante →**

> *"Acender uma luz com um interruptor – sempre leva o mesmo tempo, independente do tamanho da casa."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você tem uma caixa de objetos e precisa encontrar um item específico nela. Agora, em vez de procurar em cada item da caixa, você já sabe exatamente onde ele está. Ao abrir a caixa, você vai diretamente ao item certo, sem precisar verificar nada mais. 
    O tempo que você leva para encontrar o item é o mesmo, não importa quantos itens estejam na caixa. Isso é o que acontece com a complexidade **O(1)**. 
    Independentemente do tamanho da entrada, o tempo de execução do algoritmo é constante.
    
    **O(1)** é complexidade constante, significando que o tempo de execução do algoritmo não depende do tamanho da entrada. Independentemente de quantos elementos existam, o tempo ou memória consumidos são os mesmos.
    
- **🧐 Exemplo Prático**
    - Acessar o primeiro elemento de um array: `arr[0]`
    - Verificar se um número é par: `num % 2 == 0`
    - Inserir ou remover um item do topo de uma pilha
- **⏰ Sobre Complexidade Temporal**
    
    **Tempo constante**, significando que independentemente do tamanho da entrada, o algoritmo tem o mesmo tempo de execução.
    
    O tempo de execução não muda, seja o tamanho da entrada pequeno ou grande. O algoritmo sempre leva o mesmo tempo para executar.
    
    **⏰ Exemplos de O(1) – Tempo**
    
    - Acessar um índice específico do array → *arr[0]*
    - Verificar se um número é par → *num % 2 == 0*
    - Inserir/remover um elemento no topo de uma pilha
    - Exemplo de algoritmos O(1) →
        - Encontrar o primeiro elemento de um array
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    **Memória constante**, significando que o espaço alocado não cresce com a entrada.
    
    O espaço de memória também não varia com o tamanho da entrada. O algoritmo usa a mesma quantidade de memória independentemente do número de elementos.
    
    💾 **Exemplos de O(1) – Memória**
    
    - Criar uma variável e armazenar um valor fixo (int x = 10;)
    - Trocar valores de duas variáveis (a, b = b, a)
- **🔍 Como identificar se é O(1)?**
    
    **Como identificar**:
    
    Se o algoritmo realiza uma única operação, independentemente do tamanho da entrada, é **O(1)**. Em outras palavras, o número de passos para completar a tarefa não muda com o aumento da entrada.
    
    **Exemplo**:
    
    - Se você acessa um elemento do array diretamente, como `arr[5]`, ou troca valores de duas variáveis, o tempo para essas operações é constante.

---

## **O(log n) – Complexidade Logarítmica →**

> *"Encontrar um nome na lista telefônica dividindo as páginas ao meio a cada vez."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você tem um livro com **1.000 páginas** e quer encontrar uma palavra específica. Se você folhear página por página, do início ao fim, poderia levar muito tempo (O(n)).
    
    Agora, imagine um método mais inteligente: **você abre o livro no meio** e vê se a palavra está antes ou depois daquela página. Se estiver antes, você ignora a metade de trás e olha apenas a metade da frente. Se estiver depois, ignora a metade da frente e foca na metade de trás.
    
    Repita este processo, cortando o problema pela metade a cada passo. Em muito poucos passos, você encontra a palavra! 🎯
    
    🔢 **Isso é O(log n)** → Em vez de processar **todos** os elementos, você reduz drasticamente a quantidade de verificações.
    
- **🧐 Exemplo Prático**
    - Você tem um array ordenado e quer encontrar um número.
    - Comece olhando o meio:
        - Se for o número que procuramos, fim! 🎉
        - Se o número for menor, olhamos apenas a metade da esquerda.
        - Se for maior, olhamos apenas a metade da direita.
    - Em cada passo, cortamos o problema pela **metade** até encontrar o resultado.
- **⏰ Sobre Complexidade Temporal**
    
    O tempo de execução cresce muito mais devagar à medida que o tamanho da entrada aumenta, em comparação com algoritmos **O(n)** ou **O(n²)**.
    
    ⏰ **Exemplos de O(log n) - Temporal**
    
    - **Busca binária**: A cada iteração, o número de elementos possíveis é reduzido pela metade.
    - **Encontrar o elemento no meio de uma lista ordenada** e eliminar metade das opções em cada iteração.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    A memória utilizada por um algoritmo **O(log n)** também cresce de forma logarítmica em relação ao tamanho da entrada. Isso significa que, mesmo que o número de elementos cresça, o espaço utilizado por cada operação não aumenta drasticamente.
    
    **👩🏼‍🚀 Exemplos de O(log n) - Espacial**
    
    - **Recursão em busca binária**, onde a pilha de chamadas cresce logaritmicamente à medida que o tamanho da entrada diminui.
    - Algoritmos de **divisão e conquista** podem precisar de espaço extra para armazenar subproblemas, mas o espaço usado não cresce linearmente.
- **🔍 Como identificar se é O(log n)?**
    
    **Como identificar**:
    
    Se você perceber que, a cada passo, o tamanho do problema diminui significativamente — por exemplo, sempre pela metade — o algoritmo provavelmente tem complexidade **O(log n)**. Isso acontece porque o número de iterações necessárias cresce muito mais devagar do que o tamanho da entrada.
    
    **Exemplo**:
    
    - Se você está dividindo o problema pela metade a cada iteração, como em uma busca binária, o tempo de execução será **O(log n)**.
    - Quando o algoritmo realiza uma busca ou divisão de dados que elimina metade das opções a cada passo, como na **busca binária**, você pode identificar que é **O(log n)**.

---

## **O(n) – Complexidade Linear →**

> *"Ler um livro do começo ao fim sem pular páginas."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você tem uma fila de pessoas esperando para fazer uma tarefa. Se a pessoa na frente terminar, ela chama a próxima, e assim por diante, até que todos tenham feito a tarefa. O tempo necessário para todos fazerem a tarefa depende diretamente de quantas pessoas estão na fila. Se houver mais pessoas na fila, o tempo total aumenta na mesma proporção. 
    Esse é o conceito de **O(n)**: o tempo de execução aumenta linearmente com o tamanho da entrada. 
    O número de operações que o algoritmo realiza aumenta conforme o número de itens que ele precisa processar.
    
- **🧐 Exemplo Prático**
    
    Passo a passo:
    
    1. Você tem um array de 10 elementos e quer somar todos os números nele.
    2. Você começa do primeiro elemento e vai até o último, somando um por um.
    3. O número de passos (operações) que o algoritmo faz é igual ao número de elementos no array.
    4. Portanto, se o array tiver 100 elementos, o algoritmo fará 100 operações; se tiver 1.000, ele fará 1.000 operações.
    
    **Outro exemplo:**
    
    - **Buscar um elemento em um array não ordenado**: O algoritmo precisa olhar cada elemento até encontrar o que está procurando.
    - **Imprimir todos os elementos de um array**: O tempo de execução aumenta com o número de elementos que você precisa imprimir.
- **⏰ Sobre Complexidade Temporal**
    
    **O(n)** é linear. O tempo de execução cresce na mesma proporção que o tamanho da entrada. 
    Se você tem 1.000 itens para processar, o algoritmo fará 1.000 operações, e se você tiver 10.000 itens, fará 10.000 operações.
    
    ⏰ **Exemplos de O(n) - Temporal**
    
    - **Soma de todos os elementos de um array**: O algoritmo percorre cada elemento uma vez para somá-los.
    - **Buscar um item em um array não ordenado**: O algoritmo verifica cada elemento até encontrar o item.
    - **Imprimir cada valor de uma lista**: A operação de imprimir cada item exige uma operação por item na lista.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    - **Armazenar cópias dos elementos de uma lista**: Se o algoritmo precisa criar uma nova lista para armazenar os elementos, o espaço necessário cresce com o número de elementos.
    - **Contar o número de vezes que um valor aparece em um array**: Para cada item que o algoritmo verifica, ele precisa de um pouco mais de memória para armazenar a contagem.
- **🔍 Como identificar se é O(n)?**
    
    **Como identificar**:
    
    Se o algoritmo faz uma operação para cada item na entrada (ou em uma parte significativa da entrada), o tempo de execução é **O(n)**. O número de operações cresce proporcionalmente ao tamanho da entrada.
    
    **Exemplo**:
    
    - Se você precisa percorrer uma lista e realizar uma operação em cada item (como somar ou verificar um valor), isso será **O(n)** porque o número de operações aumenta conforme o tamanho da lista.

---

## **O(n log n) – Complexidade Quasilinear →**

> *"Organizar um baralho dividindo as cartas em pilhas menores e juntando depois."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você tem um grande número de dados e quer organizá-los de alguma forma, como em um array. Agora, em vez de olhar para todos os dados de uma vez, você divide em partes menores e faz algo com essas partes (como ordená-las) para depois juntar tudo de novo. 
    Esse processo de dividir, ordenar e juntar faz o tempo de execução crescer de maneira um pouco mais complexa do que um simples **O(n)**, mas muito mais rápido do que o **O(n²)**. 
    
    O "log n" vem do processo de dividir repetidamente os dados em partes menores, e o "n" vem de ter que processar todos os dados ao longo do caminho.
    
- **🧐 Exemplo Prático**
    - Exemplos de algoritmos que usam:
        - ORDENAÇÃO (quicksort, mergesort)
        - DIVIDIR E CONQUISTAR
    - Digamos que você tenha um array de **n** elementos.
    - Você divide esse array em dois subarrays menores até que cada subarray tenha um único elemento.
    - Depois, você começa a juntar esses subarrays ordenando-os, de forma que no final você tenha o array inteiro ordenado.
    - O tempo para dividir os arrays é **O(log n)**, e o tempo para percorrer todos os **n** elementos enquanto você faz a ordenação é **O(n)**.
    - Juntando os dois, temos **O(n log n)**.
- **⏰ Sobre Complexidade Temporal**
    
    **O(n log n)** significa que o tempo de execução aumenta conforme o número de elementos cresce, mas de uma forma mais controlada do que **O(n²)**. 
    
    A ordem de grandeza do tempo de execução é mais eficiente, o que faz esse tipo de algoritmo ser muito útil para problemas grandes, como ordenação de dados.
    
    ⏰ **Exemplos de O(n log n) - Temporal**
    
    - **Merge Sort**: Um dos algoritmos mais conhecidos para ordenar dados com **O(n log n)**.
    - **Quick Sort**: Outro algoritmo de ordenação que tem um desempenho de **O(n log n)**, mas em alguns casos pode ter desempenho pior se não for bem implementado.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    **O(n log n)** pode envolver o uso de memória extra para armazenar os subarrays temporários durante o processo de divisão e junção. 
    Dependendo do algoritmo, pode ser necessário mais espaço para armazenar esses dados temporários.
    
    💾 **Exemplos de O(n log n) - Espacial**
    
    - **Merge Sort**: Durante o processo de ordenação, o **Merge Sort** precisa de espaço extra proporcional a **O(n)** para armazenar subarrays temporários.
    - **Quick Sort**: O espaço extra usado pelo **Quick Sort** pode ser **O(log n)** no melhor caso, mas pode ser maior dependendo de como a recursão é realizada.
- **🔍 Como identificar se é O(n log n)?**
    - Para identificar se um algoritmo tem **O(n log n)** de complexidade, é importante procurar por processos que envolvem dividir um conjunto de dados em partes menores e realizar uma operação sobre cada uma dessas partes, como ordenar. 
    Esses algoritmos tendem a ter uma combinação de um loop que percorre todos os **n** dados e um processo de divisão recursiva ou logarítmica.
    
    **Como identificar:**
    
    1. Se você vê uma **divisão repetitiva** dos dados, como no caso de **Merge Sort** ou **Quick Sort**.
    2. Se cada operação de divisão tem um custo de **O(log n)**, mas você ainda precisa passar por todos os dados **n**.
    3. Quando o tempo de execução é uma combinação de linear e logarítmica, como **n log n**.

---

## **O(n²) – Complexidade Quadrática →**

> *"Comparar cada aluno da turma com todos os outros para descobrir quem é mais alto."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    **Viu loop dentro de um loop ou Bubble sort? Pode cravar que é O(n²)!**
    Imagine que você tem uma lista de pessoas e quer comparar cada uma delas com todas as outras para encontrar pares com algo em comum. No começo, você compara a primeira pessoa com todas as outras, depois a segunda com todas as outras (exceto a primeira, porque já foi comparada), e assim por diante. 
    Isso cria uma cascata de comparações, onde cada novo elemento faz o número de interações crescer de forma quadrática. Se tivermos 10 elementos, fazemos **100 comparações**; se tivermos 1.000, fazemos **1.000.000**! 
    Isso explica por que algoritmos **O(n²)** ficam lentos com entradas grandes.
    
- **🧐 Exemplo Prático**
    - Você tem um array de **n** elementos.
    - Você precisa comparar cada elemento com todos os outros.
    - O primeiro elemento será comparado com **n - 1** elementos.
    - O segundo elemento será comparado com **n - 2** elementos.
    - Isso se repete até o último elemento, criando **n × n** operações.
- **⏰ Sobre Complexidade Temporal**
    
    **O(n²)** significa que à medida que **n** cresce, o tempo de execução cresce proporcionalmente ao quadrado desse número. 
    Isso significa que um pequeno aumento no tamanho do input pode resultar em um aumento **exponencial** no tempo de execução.
    
    ⏰ **Exemplos de O(n²) - Temporal**
    
    - **Bubble Sort**: Cada elemento precisa ser comparado com todos os outros.
    - **Selection Sort**: Busca pelo menor elemento e o troca de posição várias vezes.
    - **Algoritmo ingênuo para encontrar pares duplicados**: Um loop dentro de outro loop para verificar se existem elementos iguais.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    **O(n²)** pode, em alguns casos, exigir uma grande quantidade de memória extra se for necessário armazenar pares, matrizes ou listas auxiliares durante as operações.
    
    💾 **Exemplos de O(n²) - Espacial**
    
    - **Multiplicação de Matrizes Ingênua**: Cada célula da matriz resultante requer múltiplas iterações pelos dados.
    - **Criação de tabelas auxiliares** para armazenar relações entre elementos (exemplo: uma tabela de adjacência em grafos).
- **🔍 Como identificar se é O(n²)?**
    - Para identificar se um algoritmo tem **O(n²)** de complexidade, procure por **loops aninhados** onde cada iteração percorre toda a entrada para cada elemento.
    
    **Como identificar:**
    
    1. Se há **dois loops aninhados** que percorrem o mesmo conjunto de dados.
    2. Se a quantidade de operações cresce **muito rápido** conforme o input aumenta.
    3. Se um problema envolve comparar **todos os elementos com todos os outros** (como em alguns algoritmos de ordenação).

---

# Outras notações do BIG O (menos comuns):

## **O(2ⁿ) – Complexidade Exponencial →**

> *"Testar todas as formas possíveis de resolver um cubo mágico."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você tem um cofre e quer descobrir a senha, mas não sabe quantos números precisa testar. 
    
    Cada vez que você adiciona um dígito a mais, o número de possibilidades dobra. Se a senha tiver 1 dígito, há 2 possibilidades (0 ou 1). 
    
    Se tiver 2 dígitos, há 4 possibilidades (00, 01, 10, 11). Com 3 dígitos, já são 8 possibilidades. 
    
    Assim, conforme o número de elementos aumenta, o número de operações cresce exponencialmente, dobrando a cada nova unidade adicionada.
    
- **🧐 Exemplo Prático**
    - Você precisa gerar **todas as combinações possíveis** de um conjunto.
    - Se há **n elementos**, cada um pode estar **presente ou ausente** na combinação.
    - Isso cria **2ⁿ possibilidades** de subconjuntos.
    - Para **n = 3**, as combinações possíveis seriam:
        - `{}`
        - `{A}`
        - `{B}`
        - `{C}`
        - `{A, B}`
        - `{A, C}`
        - `{B, C}`
        - `{A, B, C}`
    - Para **n = 4**, já teríamos **16 possibilidades**.
    - Para **n = 10**, já seriam **1024 possibilidades**. 😯
- **⏰ Sobre Complexidade Temporal**
    
    **O(2ⁿ)** significa que, conforme o input cresce, o tempo de execução **dobra** a cada novo elemento. Isso torna esses algoritmos extremamente ineficientes para inputs grandes.
    
    ⏰ **Exemplos de O(2ⁿ) - Temporal**
    
    - **Problema do subconjunto**: Gerar todas as combinações possíveis de um conjunto.
    - **Problema da Mochila (Força Bruta)**: Testar todas as combinações possíveis de itens para encontrar o melhor conjunto.
    - **Fibonacci Recursivo (sem otimização)**: A versão ingênua da sequência de Fibonacci, onde cada chamada recursiva cria duas novas chamadas.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    **O(2ⁿ)** pode exigir **muito espaço na memória**, especialmente quando todas as possibilidades precisam ser armazenadas antes da execução.
    
    💾 **Exemplos de O(2ⁿ) - Espacial**
    
    - **Armazenamento de todas as combinações de um conjunto**.
    - **Backtracking em problemas de busca exaustiva**, onde todas as opções precisam ser mantidas na pilha de chamadas da recursão.
- **🔍 Como identificar se é O(2ⁿ)?**
    - Se o número de operações **dobra** a cada novo elemento adicionado, você provavelmente está lidando com **O(2ⁿ)**.
    
    **Como identificar:**
    
    1. Se o algoritmo envolve **gerar todas as combinações possíveis** de um conjunto.
    2. Se a solução usa **recursão exponencial**, onde cada chamada gera **duas ou mais chamadas recursivas**.
    3. Se a quantidade de operações cresce **extremamente rápido**, tornando o algoritmo inviável para inputs grandes.

---

## **O(√n) – Complexidade de Raiz Quadrada →**

> *"Subir uma escada pulando degraus para chegar mais rápido ao topo."*
> 
- **🧠 Explicado usando a Técnica Feynman**
    
    Imagine que você precisa encontrar um número específico dentro de **n** elementos, mas, ao invés de verificar todos um por um (**O(n)**), você pode **pular** de um grupo para outro, reduzindo drasticamente a quantidade de verificações. 
    Por exemplo, se você tivesse **100 elementos**, ao invés de checar todos, você poderia **dividir em blocos** e testar apenas **√100 = 10 elementos**. 
    Esse comportamento aparece em problemas onde é possível reduzir a busca para a raiz quadrada do input.
    
- **🧐 Exemplo Prático**
    - Você precisa encontrar um número **primo** menor que **n**.
    - Ao invés de testar divisibilidade até **n**, você só precisa verificar até **√n**.
    - Exemplo: Para verificar se **37 é primo**, você não precisa testar divisibilidade por todos os números até 37, basta testar até **√37 ≈ 6**.
    - Se nenhum número até 6 divide 37, então 37 é primo.
- **⏰ Sobre Complexidade Temporal**
    
    **O(√n)** significa que o tempo de execução cresce com a raiz quadrada do tamanho da entrada. 
    Isso é mais eficiente que **O(n)** para entradas grandes.
    
    ⏰ **Exemplos de O(√n) - Temporal**
    
    - **Verificação de primalidade**: Testar se um número é primo.
    - **Encontrar todos os divisores de um número**: Você só precisa testar até a raiz quadrada do número.
- **👩🏼‍🚀 Sobre Complexidade Espacial**
    
    **O(√n)** geralmente não requer muito espaço adicional, pois a maioria das operações pode ser feita in-place.
    
    💾 **Exemplos de O(√n) - Espacial**
    
    - **Armazenamento de divisores**: Em alguns casos, você pode precisar armazenar os divisores encontrados.
    - **Buffer temporário**: Para algumas operações matemáticas que trabalham com blocos de tamanho √n.
- **🔍 Como identificar se é O(√n)?**
    
    **Como identificar:**
    
    1. Se o algoritmo trabalha com **blocos** ou **grupos** de tamanho √n.
    2. Se envolve **operações matemáticas** onde você só precisa verificar até a raiz quadrada do número.
    3. Se há uma **otimização** que permite pular verificações baseada na raiz quadrada do tamanho da entrada.