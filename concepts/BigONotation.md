# Big O Notation

### Big O **talks about how algorithms SCALE** depending on the **size** of the **input**, and **not** necessarily about the **performance** of the **algorithm**.

<aside>
💡

It's a way to **denote algorithm performance**, but it's **not** a **performance measure**

</aside>

<aside>
💡

Big O **doesn't measure the exact execution time** of an algorithm, but rather **how time grows** as input size increases. 📈

</aside>

---

### Big O can be used to measure both *time complexity* and *space complexity* of an algorithm.

- **Time Complexity**: Relates to execution time (runtime), that is, how long it takes in *runtime.* **More common in interviews**
- **Space Complexity**: Relates to how much additional memory we need to allocate

---

> **Asymptotic analysis** is the way to analyze how an algorithm behaves in terms of time and memory as the input size grows.
> 

---

# Main BIG O notations:

## **O(1) – Constant Complexity →**

> *"Turning on a light with a switch – it always takes the same time, regardless of house size."*
> 
- **🧠 Explained using Feynman Technique**
    
    Imagine you have a box of objects and need to find a specific item in it. Now, instead of searching through each item in the box, you already know exactly where it is. When opening the box, you go directly to the right item, without needing to check anything else. 
    The time you take to find the item is the same, no matter how many items are in the box. This is what happens with **O(1)** complexity. 
    Regardless of input size, the algorithm's execution time is constant.
    
    **O(1)** is constant complexity, meaning the algorithm's execution time doesn't depend on input size. Regardless of how many elements exist, the time or memory consumed is the same.
    
- **🧐 Practical Example**
    - Accessing the first element of an array: `arr[0]`
    - Checking if a number is even: `num % 2 == 0`
    - Inserting or removing an item from the top of a stack.
- **⏰ About Time Complexity**
    
    **Constant time**, meaning regardless of input size, the algorithm has the same execution time.
    
    Execution time doesn't change, whether the input size is small or large. The algorithm always takes the same time to run.
    
    **⏰ Examples of O(1) – Time**
    
    - Accessing a specific array index → *arr[0]*
    - Checking if a number is even → *num % 2 == 0*
    - Inserting/removing an element at the top of a stack
    - Example of O(1) algorithms →
        - Finding the first element of an array.
- **👩🏼‍🚀 About Space Complexity**
    
    **Constant memory**, meaning allocated space doesn't grow with input.
    
    Memory space also doesn't vary with input size. The algorithm uses the same amount of memory regardless of the number of elements.
    
    💾 **Examples of O(1) – Memory**
    
    - Creating a variable and storing a fixed value (int x = 10;)
    - Swapping values of two variables (a, b = b, a)
- **🔍 How to identify if it's O(1)?**
    
    **How to identify**:
    
    If the algorithm performs a single operation, regardless of input size, it's **O(1)**. In other words, the number of steps to complete the task doesn't change with increasing input.
    
    **Example**:
    
    - If you access an array element directly, like `arr[5]`, or swap two variable values, the time for these operations is constant.

---

## **O(log n) – Logarithmic Complexity →**

> "*Finding a name in the phone book by dividing pages in half each time.*"
> 
- **🧠 Explained using Feynman Technique**
    
    Imagine you have a book with **1,000 pages** and want to find a specific word. If you flip page by page, from start to finish, it could take a long time (O(n)).
    
    Now, imagine a smarter method: **you open the book in the middle** and see if the word is before or after that page. If it's before, you ignore the back half and look only at the front half. If it's after, ignore the front half and focus on the back.
    
    Repeat this process, cutting the problem in half at each step. In very few steps, you find the word! 🎯
    
    🔢 **This is O(log n)** → Instead of processing **all** elements, you drastically reduce the amount of work at each step.
    
- **🧐 Exemplo prático**
    - Você tem um array ordenado e quer encontrar um número.
    - Comece olhando o meio:
        - Se for o número que procuramos, fim! 🎉
        - Se o número for menor, olhamos apenas a metade da esquerda.
        - Se for maior, olhamos apenas a metade da direita.
    - Em cada passo, cortamos o problema pela **metade** até encontrar o resultado.
- **⏰ Falando sobre complexidade Temporal**
    
    O tempo de execução cresce muito mais devagar à medida que o tamanho da entrada aumenta, em comparação com algoritmos **O(n)** ou **O(n²)**.
    
    ⏰ **Exemplos de O(log n) - Temporal**:
    
    - **Busca binária**: A cada iteração, o número de elementos possíveis pela metade.
    - **Encontrar o elemento no meio de uma lista ordenada** e eliminar metade das opções em cada iteração.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    A memória utilizada por um algoritmo **O(log n)** também cresce de forma logarítmica em relação ao tamanho da entrada. Isso significa que, mesmo que o número de elementos cresça, o espaço utilizado por cada operação não aumenta drasticamente.
    
    **👩🏼‍🚀 Exemplos de O(log n) - Espacial**:
    
    - **Recursão em busca binária**, onde a pilha de chamadas cresce logaritmicamente à medida que o tamanho da entrada diminui.
    - Algoritmos de **divisão e conquista** podem precisar de espaço extra para armazenar subproblemas, mas o espaço usado não cresce linearmente.
- **🔍 Como descobrir se é O(log n)?**
    
    **Como identificar**:
    
    Se você perceber que, a cada passo, o tamanho do problema diminui significativamente — por exemplo, sempre pela metade — o algoritmo provavelmente tem complexidade **O(log n)**. Isso acontece porque o número de iterações necessárias cresce muito mais devagar do que o tamanho da entrada.
    
    **Exemplo**:
    
    - Se você está dividindo o problema pela metade a cada iteração, como em uma busca binária, o tempo de execução será **O(log n)**.
    - Quando o algoritmo realiza uma busca ou divisão de dados que elimina metade das opções a cada passo, como na **busca binária**, você pode identificar que é **O(log n)**.

---

## **O(n) – Complexidade Linear→**

> "*Ler um livro do começo ao fim sem pular páginas.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    Imagine que você tem uma linha de pessoas esperando para fazer uma tarefa. Se a pessoa na frente terminar, ela chama a próxima, e assim por diante, até que todos tenham feito a tarefa. O tempo necessário para todos fazerem a tarefa depende diretamente de quantas pessoas estão na fila. Se houver mais pessoas na fila, o tempo total aumenta na mesma proporção. 
    Esse é o conceito de **O(n)**: o tempo de execução aumenta linearmente com o tamanho da entrada. 
    O número de operações que o algoritmo realiza aumenta conforme o número de itens que ele precisa processar.
    
- **🧐 Exemplo prático**
    
    Passo a passo:
    
    1. Você tem um array de 10 elementos e quer somar todos os números nele.
    2. Você começa do primeiro elemento e vai até o último, somando um por um.
    3. O número de passos (operações) que o algoritmo faz é igual ao número de elementos no array.
    4. Portanto, se o array tiver 100 elementos, o algoritmo fará 100 operações; se tiver 1.000, ele fará 1.000 operações.
    
    **Outro exemplo:**
    
    - **Buscar um elemento em um array não ordenado**: O algoritmo precisa olhar cada elemento até encontrar o que está procurando.
    - **Imprimir todos os elementos de um array**: O tempo de execução aumenta com o número de elementos que você precisa imprimir.
- **⏰ Falando sobre complexidade Temporal**
    
    **O(n)** é linear. O tempo de execução cresce na mesma proporção que o tamanho da entrada. 
    Se você tem 1.000 itens para processar, o algoritmo fará 1.000 operações, e se você tiver 10.000 itens, fará 10.000 operações.
    
    ⏰ **Exemplos de O(n) - Temporal**:
    
    - **Soma de todos os elementos de um array**: O algoritmo percorre cada elemento uma vez para somá-los.
    - **Buscar um item em um array não ordenado**: O algoritmo verifica cada elemento até encontrar o item.
    - **Imprimir cada valor de uma lista**: A operação de imprimir cada item exige uma operação por item na lista.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    - **Armazenar cópias dos elementos de uma lista**: Se o algoritmo precisa criar uma nova lista para armazenar os elementos, o espaço necessário cresce com o número de elementos.
    - **Contar o número de vezes que um valor aparece em um array**: Para cada item que o algoritmo verifica, ele precisa de um pouco mais de memória para armazenar a contagem.
- **🔍 Como descobrir se é O(n)?**
    
    **Como identificar**:
    
    Se o algoritmo faz uma operação para cada item na entrada (ou em uma parte significativa da entrada), o tempo de execução é **O(n)**. O número de operações cresce proporcionalmente ao tamanho da entrada.
    
    **Exemplo**:
    
    - Se você precisa percorrer uma lista e realizar uma operação em cada item (como somar ou verificar um valor), isso será **O(n)** porque o número de operações aumenta conforme o tamanho da lista.

---

## **O(n log n) – Complexidade Quasilinear →**

> “*Organizar um baralho dividindo as cartas em pilhas menores e juntando depois.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    Imagine que você tem um grande número de dados e quer organizá-los de alguma forma, como em um array. Agora, em vez de olhar para todos os dados de uma vez, você divide em partes menores e faz algo com essas partes (como ordená-las) para depois juntar tudo de novo. 
    Esse processo de dividir, ordenar e juntar faz o tempo de execução crescer de maneira um pouco mais complexa do que um simples **O(n)**, mas muito mais rápido do que o **O(n²)**. 
    
    O "log n" vem do processo de dividir repetidamente os dados em partes menores, e o "n" vem de ter que processar todos os dados ao longo do caminho.
    
- **🧐 Exemplo prático**
    - Exemplos de algoritmos que usam:
        - SORTING (quicksort, mergesort)
        - DIVEDE AND CONQUER
    - Digamos que você tenha um array de **n** elementos.
    - Você divide esse array em dois subarrays menores até que cada subarray tenha um único elemento.
    - Depois, você começa a juntar esses subarrays ordenando-os, de forma que no final você tenha o array inteiro ordenado.
    - O tempo para dividir os arrays é **O(log n)**, e o tempo para percorrer todos os **n** elementos enquanto você faz a ordenação é **O(n)**.
    - Juntando os dois, temos **O(n log n)**.
- **⏰ Falando sobre complexidade Temporal**
    
    **O(n log n)** significa que o tempo de execução aumenta conforme o número de elementos cresce, mas de uma forma mais controlada do que **O(n²)**. 
    
    A ordem de grandeza do tempo de execução é mais eficiente, o que faz esse tipo de algoritmo ser muito útil para problemas grandes, como ordenação de dados.
    
    ⏰ **Exemplos de O(n log n) - Temporal**
    
    - **Merge Sort**: Um dos algoritmos mais conhecidos para ordenar dados com **O(n log n)**.
    - **Quick Sort**: Outro algoritmo de ordenação que tem um desempenho de **O(n log n)**, mas em alguns casos pode ter desempenho pior se não for bem implementado.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    **O(n log n)** pode envolver o uso de memória extra para armazenar os subarrays temporários durante o processo de divisão e junção. 
    Dependendo do algoritmo, pode ser necessário mais espaço para armazenar esses dados temporários.
    
    💾 **Exemplos de O(n log n) - Espacial**
    
    - **Merge Sort**: Durante o processo de ordenação, o **Merge Sort** precisa de espaço extra proporcional a **O(n)** para armazenar subarrays temporários.
    - **Quick Sort**: O espaço extra usado pelo **Quick Sort** pode ser **O(log n)** no melhor caso, mas pode ser maior dependendo de como a recursão é realizada.
- **🔍 Como descobrir se é O(n log n)?**
    - Para identificar se um algoritmo tem **O(n log n)** de complexidade, é importante procurar por processos que envolvem dividir um conjunto de dados em partes menores e realizar uma operação sobre cada uma dessas partes, como ordenar. 
    Esses algoritmos tendem a ter uma combinação de um loop que percorre todos os **n** dados e um processo de divisão recursiva ou logarítmica.
    
    **Como identificar:**
    
    1. Se você vê uma **divisão repetitiva** dos dados, como no caso de **Merge Sort** ou **Quick Sort**.
    2. Se cada operação de divisão tem um custo de **O(log n)**, mas você ainda precisa passar por todos os dados **n**.
    3. Quando o tempo de execução é uma combinação de linear e logarítmica, como **n log n**.

---

## **O(n²) – Complexidade Quadrática →**

> "*Comparar cada aluno da turma com todos os outros para descobrir quem é mais alto.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    **Viu loop dentro de um loop ou Bubble sort? Pode cravar que é O(n²)!**
    Imagine que você tem uma lista de pessoas e quer comparar cada uma delas com todas as outras para encontrar pares com algo em comum. No começo, você compara a primeira pessoa com todas as outras, depois a segunda com todas as outras (exceto a primeira, porque já foi comparada), e assim por diante. 
    Isso cria uma cascata de comparações, onde cada novo elemento faz o número de interações crescer de forma quadrática. Se tivermos 10 elementos, fazemos **100 comparações**; se tivermos 1.000, fazemos **1.000.000**! 
    Isso explica por que algoritmos **O(n²)** ficam lentos com entradas grandes.
    
- **🧐 Exemplo prático**
    - Você tem um array de **n** elementos.
    - Você precisa comparar cada elemento com todos os outros.
    - O primeiro elemento será comparado com **n - 1** elementos.
    - O segundo elemento será comparado com **n - 2** elementos.
    - Isso se repete até o último elemento, criando **n × n** operações.
- **⏰ Falando sobre complexidade Temporal**
    
    **O(n²)** significa que à medida que **n** cresce, o tempo de execução cresce proporcionalmente ao quadrado desse número. 
    Isso significa que um pequeno aumento no tamanho do input pode resultar em um aumento **exponencial** no tempo de execução.
    
    ⏰ **Exemplos de O(n²) - Temporal**
    
    - **Bubble Sort**: Cada elemento precisa ser comparado com todos os outros.
    - **Selection Sort**: Busca pelo menor elemento e o troca de posição várias vezes.
    - **Algoritmo ingênuo para encontrar pares duplicados**: Um loop dentro de outro loop para verificar se existem elementos iguais.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    **O(n²)** pode, em alguns casos, exigir uma grande quantidade de memória extra se for necessário armazenar pares, matrizes ou listas auxiliares durante as operações.
    
    💾 **Exemplos de O(n²) - Espacial**
    
    - **Multiplicação de Matrizes Ingênua**: Cada célula da matriz resultante requer múltiplas iterações pelos dados.
    - **Criação de tabelas auxiliares** para armazenar relações entre elementos (exemplo: uma tabela de adjacência em grafos).
- **🔍 Como descobrir se é O(n²)?**
    - Para identificar se um algoritmo tem **O(n²)** de complexidade, procure por **loops aninhados** onde cada iteração percorre toda a entrada para cada elemento.
    
    **Como identificar:**
    
    1. Se há **dois loops aninhados** que percorrem o mesmo conjunto de dados.
    2. Se a quantidade de operações cresce **muito rápido** conforme o input aumenta.
    3. Se um problema envolve comparar **todos os elementos com todos os outros** (como em alguns algoritmos de ordenação).

---

# Outras notações do BIG O (menos comuns):

## **O(2ⁿ) – Complexidade Exponencial →**

> "*Testar todas as formas possíveis de resolver um cubo mágico.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    Imagine que você tem um cofre e quer descobrir a senha, mas não sabe quantos números precisa testar. 
    
    Cada vez que você adiciona um dígito a mais, o número de possibilidades dobra. Se a senha tiver 1 dígito, há 2 possibilidades (0 ou 1). 
    
    Se tiver 2 dígitos, há 4 possibilidades (00, 01, 10, 11). Com 3 dígitos, já são 8 possibilidades. 
    
    Assim, conforme o número de elementos aumenta, o número de operações cresce exponencialmente, dobrando a cada nova unidade adicionada.
    
- **🧐 Exemplo prático**
    - Você precisa gerar **todas as combinações possíveis** de um conjunto.
    - Se há **n elementos**, cada um pode estar **presente ou ausente** na combinação.
    - Isso cria **2ⁿ possibilidades** de subconjuntos.
    - Para **n = 3**, as combinações possíveis seriam:
        - {}
        - {A}
        - {B}
        - {C}
        - {A, B}
        - {A, C}
        - {B, C}
        - {A, B, C}
    - Para **n = 4**, já teríamos **16 possibilidades**.
    - Para **n = 10**, já seriam **1024 possibilidades**. 😯
- **⏰ Falando sobre complexidade Temporal**
    
    **O(2ⁿ)** significa que, conforme o input cresce, o tempo de execução **dobra** a cada novo elemento. Isso torna esses algoritmos extremamente ineficientes para inputs grandes.
    
    ⏰ **Exemplos de O(2ⁿ) - Temporal**
    
    - **Problema do subconjunto**: Gerar todas as combinações possíveis de um conjunto.
    - **Problema da Mochila (Brute Force)**: Testar todas as combinações possíveis de itens para encontrar o melhor conjunto.
    - **Fibonacci Recursivo (sem otimização)**: A versão ingênua da sequência de Fibonacci, onde cada chamada recursiva cria duas novas chamadas.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    **O(2ⁿ)** pode exigir **muito espaço na memória**, especialmente quando todas as possibilidades precisam ser armazenadas antes da execução.
    
    💾 **Exemplos de O(2ⁿ) - Espacial**
    
    - **Armazenamento de todas as combinações de um conjunto**.
    - **Backtracking em problemas de busca exaustiva**, onde todas as opções precisam ser mantidas na pilha de chamadas da recursão.
- **🔍 Como descobrir se é O(2ⁿ)?**
    - Se o número de operações **dobra** a cada novo elemento adicionado, você provavelmente está lidando com **O(2ⁿ)**.
    
    **Como identificar:**
    
    1. Se o algoritmo envolve **gerar todas as combinações possíveis** de um conjunto.
    2. Se a solução usa **recursão exponencial**, onde cada chamada gera **duas ou mais chamadas recursivas**.
    3. Se a quantidade de operações cresce **extremamente rápido**, tornando o algoritmo inviável para inputs grandes.

---

## **O(√n) – Complexidade de Raiz Quadrada →**

> “*Subir uma escada pulando degraus para chegar mais rápido ao topo.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    Imagine que você precisa encontrar um número específico dentro de **n** elementos, mas, ao invés de verificar todos um por um (**O(n)**), você pode **pular** de um grupo para outro, reduzindo drasticamente a quantidade de verificações. 
    Por exemplo, se você tivesse **100 elementos**, ao invés de checar todos, você poderia **dividir em blocos** e testar apenas **√100 = 10 elementos**. 
    Esse comportamento aparece em problemas onde é possível reduzir a busca para a raiz quadrada do input.
    
- **🧐 Exemplo prático**
    
    
- **⏰ Falando sobre complexidade Temporal**
    - Você precisa encontrar um número **primo** menor que **n**.
    - Ao invés de testar divisibilidade até **n**, você só precisa verificar até **√n**.
    - Exemplo: Para verificar se **37 é primo**, você não precisa testar divisibilidade de **1 a 37**. Basta testar até **√37 ≈ 6** (2, 3 e 5).
    - Isso reduz a quantidade de verificações **significativamente** para números grandes.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    **O(√n)** significa que, conforme **n cresce**, o tempo de execução **cresce mais devagar** do que O(n), mas **mais rápido** que O(log n).
    
    ⏰ **Exemplos de O(√n) - Temporal**
    
    - **Verificação de números primos**: Testar divisibilidade apenas até **√n**.
    - **Jump Search**: Algoritmo de busca em um array ordenado que pula **√n** posições a cada iteração.
    - **Problemas de fatoração**: Ao fatorar um número, o maior fator primo possível será no máximo **√n**.
- **🔍 Como descobrir se é O(√n)?**
    - Se o número de operações cresce **na mesma proporção que a raiz quadrada de n**, o algoritmo provavelmente tem complexidade **O(√n)**.
    
    **Como identificar:**
    
    1. Se o algoritmo **divide o problema em blocos** de tamanho **√n** e processa apenas esses blocos.
    2. Se há uma **redução significativa na quantidade de iterações** comparado com O(n), mas sem atingir a eficiência de O(log n).
    3. Se a solução envolve **operações matemáticas relacionadas à raiz quadrada**, como fatoração ou verificação de primos.

---

## **O(N!) – Complexidade Fatorial →**

> "*Planejar uma viagem visitando todas as cidades possíveis em todas as ordens possíveis.*”
> 
- **🧠 Explicado usando Feynman Technique**
    
    Imagine que você precisa organizar **n** pessoas em uma fila, mas cada vez que adiciona uma nova pessoa, o número de formas de organizá-las **explode**. 
    Se houver **3 pessoas**, temos **3! = 6 formas** de organizá-las. 
    Se forem **4 pessoas**, temos **4! = 24 formas**. 
    Agora imagine com **10 pessoas**: seriam **3.628.800 combinações**! 
    O crescimento é **absurdamente rápido** e fica impraticável para valores grandes de **n**.
    
- **🧐 Exemplo prático**
    - Você precisa gerar **todas as permutações possíveis** de um conjunto de **n** elementos.
    - Para **3 elementos** (*A, B, C*), as permutações são:
        1. ABC
        2. ACB
        3. BAC
        4. BCA
        5. CAB
        6. CBA
    - Se adicionarmos **D**, o número sobe para **24 permutações (4!)**.
- **⏰ Falando sobre complexidade Temporal**
    
    O tempo de execução cresce **de forma absurda** conforme **n aumenta**. Um algoritmo **O(n!)** se torna **impraticável muito rápido**.
    
    ⏰ **Exemplos de O(n!) - Temporal**
    
    - **Gerar todas as permutações possíveis** de um conjunto.
    - **Resolver o problema do Caixeiro Viajante (TSP) por força bruta**, testando todas as rotas possíveis.
    - **Quebra de senha por brute-force** se for necessário testar todas as combinações possíveis de caracteres.
- **👩🏼‍🚀 Falando sobre complexide Espacial**
    
    **O(n!)** também pode exigir um consumo gigantesco de memória se armazenarmos todas as permutações possíveis.
    
    💾 **Exemplos de O(n!) - Espacial**
    
    - **Armazenar todas as permutações** de uma sequência de elementos.
    - **Backtracking com estados salvos** em problemas combinatórios pode levar a um espaço de busca **explosivo**.
- **🔍 Como descobrir se é O(N!)?**
    - Se o número de operações cresce **multiplicando sucessivamente por n, n-1, n-2, ..., 1**, então o algoritmo provavelmente tem complexidade **O(n!)**.
    
    **Como identificar:**
    
    1. Se o algoritmo **gera todas as permutações possíveis** de um conjunto.
    2. Se há **muitas escolhas recursivas** e a árvore de recursão cresce **muito rapidamente**.
    3. Se a solução envolve **testar todas as combinações possíveis** de um problema combinatório.