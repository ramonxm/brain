# Stack (Pilha)

Uma Stack (Pilha) é uma estrutura de dados que segue o princípio LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido.

## Características Principais

- Segue o princípio LIFO (Last In, First Out)
- Operações principais: push (inserção) e pop (remoção)
- Acesso ao elemento do topo através da operação peek
- Implementação pode ser feita usando arrays ou listas encadeadas

## Implementação em Kotlin

```kotlin
class Stack<T> {
  private val elements: MutableList<T> = mutableListOf()

  override fun toString(): String {
    return elements.toString()
  }

  fun push(item: T) {
    elements.add(item)
  }

  fun pop(): T? {
    if (elements.isNotEmpty()) {
      return elements.removeAt(elements.size - 1)
    }
    return null
  }

  fun peek(): T? {
    if (elements.isNotEmpty()) {
      return elements.last()
    }
    return null
  }
}
```

## Métodos

### push(item: T)
Adiciona um elemento ao topo da pilha.

### pop(): T?
Remove e retorna o elemento do topo da pilha. Retorna null se a pilha estiver vazia.

### peek(): T?
Retorna o elemento do topo da pilha sem removê-lo. Retorna null se a pilha estiver vazia.

## Exemplo de Uso

```kotlin
fun main() {
  val nameStack = Stack<String>()
  nameStack.push("Ramon")
  nameStack.push("Ayane")

  val popped = nameStack.pop()
  println("$popped foi removido")

  println("Elementos restante $nameStack")

  nameStack.peek()
  println("Elementos restantes $nameStack")
}
```

## Complexidade de Tempo

- Push: O(1)
- Pop: O(1)
- Peek: O(1)

## Casos de Uso

- Gerenciamento de chamadas de funções (call stack)
- Desfazer/Refazer operações em editores
- Avaliação de expressões matemáticas
- Navegação entre páginas web (histórico)
- Verificação de parênteses em expressões