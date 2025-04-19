# Array

## Array
Um array é uma coleção de itens armazenados em locais contíguos de memória. A ideia é armazenar múltiplos itens do mesmo tipo juntos. Isso torna mais fácil calcular a posição de cada elemento simplesmente adicionando um deslocamento a um valor base, ou seja, o local de memória do primeiro elemento do array (geralmente indicado pelo nome do array).
Por exemplo, em um array `arr` de tamanho 5, podemos calcular o local de memória de cada elemento `arr[i]` usando a seguinte fórmula:
```
location(arr[i]) = base_value + i * size_of_element
```
Aqui, `base_value` é o local de memória do primeiro elemento do array `arr`, que é `location(arr[0])`. O tamanho de cada elemento é o mesmo, que é o tamanho do tipo de dado usado para armazenar os elementos.

## Array em Rust
Em Rust, arrays são coleções de elementos do mesmo tipo com tamanho fixo. O tamanho de um array é determinado em tempo de compilação e não pode ser alterado. Arrays são declarados usando colchetes `[]` e especificando o tipo dos elementos e o número de elementos no array. Por exemplo, o código a seguir declara um array de 5 inteiros:
```rust
let arr: [i32; 5] = [1, 2, 3, 4, 5];
```
Aqui, `arr` é um array de 5 inteiros. O tipo do array é `[i32; 5]`, que significa um array de 5 inteiros. Os elementos do array são inicializados com os valores 1, 2, 3, 4 e 5.

## Array em JavaScript
Em JavaScript, arrays são coleções dinâmicas de elementos do mesmo tipo. O tamanho de um array não é fixo e pode ser alterado em tempo de execução. Arrays são declarados usando colchetes `[]` e especificando os elementos do array. Por exemplo, o código a seguir declara um array de 5 inteiros:
```js
let arr = [1, 2, 3, 4, 5];
```
Aqui, `arr` é um array de 5 inteiros. Os elementos do array são inicializados com os valores 1, 2, 3, 4 e 5.

## Array em Python
Em Python, arrays são coleções dinâmicas de elementos do mesmo tipo. O tamanho de um array não é fixo e pode ser alterado em tempo de execução. Arrays são declarados usando colchetes `[]` e especificando os elementos do array. Por exemplo, o código a seguir declara um array de 5 inteiros:
```python
arr = [1, 2, 3, 4, 5]
```
Aqui, `arr` é um array de 5 inteiros. Os elementos do array são inicializados com os valores 1, 2, 3, 4 e 5.

## Array em C++
Em C++, arrays são coleções de elementos do mesmo tipo com tamanho fixo. O tamanho de um array é determinado em tempo de compilação e não pode ser alterado. Arrays são declarados usando colchetes `[]` e especificando o tipo dos elementos e o número de elementos no array. Por exemplo, o código a seguir declara um array de 5 inteiros:
```cpp
int arr[5] = {1, 2, 3, 4, 5};
```
Aqui, `arr` é um array de 5 inteiros. O tipo do array é `int[5]`, que significa um array de 5 inteiros. Os elementos do array são inicializados com os valores 1, 2, 3, 4 e 5.

