# Queue (Fila)

Uma Queue (Fila) é uma estrutura de dados que segue o princípio FIFO (First In, First Out), onde o primeiro elemento inserido é o primeiro a ser removido.

## Características Principais

- Segue o princípio FIFO (First In, First Out)
- Operações principais: enqueue (inserção) e dequeue (remoção)
- Acesso ao primeiro elemento através da operação front
- Implementação pode ser feita usando arrays ou listas encadeadas

## Implementação em Kotlin

```kotlin
class Queue<T> {
  private val elements: MutableList<T> = mutableListOf()

  override fun toString(): String {
    return elements.toString()
  }

  fun enqueue(item: T) {
    elements.add(item)
  }

  fun dequeue(): T? {
    if (elements.isNotEmpty()) {
      return elements.removeAt(0)
    }
    return null
  }

  fun front(): T? {
    if (elements.isNotEmpty()) {
      return elements.first()
    }
    return null
  }
}
```

## Métodos

### enqueue(item: T)
Adiciona um elemento ao final da fila.

### dequeue(): T?
Remove e retorna o primeiro elemento da fila. Retorna null se a fila estiver vazia.

### front(): T?
Retorna o primeiro elemento da fila sem removê-lo. Retorna null se a fila estiver vazia.

## Exemplo de Uso

```kotlin
fun main() {
  val atendimentoQueue = Queue<String>()
  atendimentoQueue.enqueue("Cliente 1")
  atendimentoQueue.enqueue("Cliente 2")

  val proximo = atendimentoQueue.dequeue()
  println("$proximo foi atendido")

  println("Clientes na fila: $atendimentoQueue")

  val proximoCliente = atendimentoQueue.front()
  println("Próximo cliente a ser atendido: $proximoCliente")
}
```

## Complexidade de Tempo

- Enqueue: O(1)
- Dequeue: O(n) - usando lista
- Front: O(1)

## Casos de Uso

- Gerenciamento de filas de impressão
- Processamento de requisições em servidores
- Sistemas de atendimento ao cliente
- Gerenciamento de processos em sistemas operacionais
- Buffers em streaming de dados