// This representation of the Stack structure in Kotlin was made based on a video for members of the Lucas Montano channel.

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

fun main() {
  val nameStack = Stack<String>()
  nameStack.push("Ramon")
  nameStack.push("Ayane")

  val popped = nameStack.pop()

  println("$popped foi removido")

  println("Elementos restante $nameStack")

  nameStack.peek()

  println("Elementos restantes $nameStack")

  println(nameStack.toString())
}