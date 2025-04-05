# Binary Tree (Árvore Binária)

Uma Binary Tree (Árvore Binária) é uma estrutura de dados hierárquica onde cada nó pode ter no máximo dois filhos, geralmente referidos como filho esquerdo e filho direito.

## Características Principais

- Cada nó tem no máximo dois filhos
- O primeiro nó é chamado de raiz (root)
- Nós sem filhos são chamados de folhas
- Cada nó contém um valor e referências para seus filhos
- Pode ser implementada de forma recursiva

## Implementação em Kotlin

```kotlin
class BinaryTree<T : Comparable<T>> {
  data class Node<T>(var value: T,
                     var left: Node<T>? = null,
                     var right: Node<T>? = null)

  private var root: Node<T>? = null

  fun insert(value: T) {
    root = insertRec(root, value)
  }

  private fun insertRec(node: Node<T>?, value: T): Node<T> {
    if (node == null) {
      return Node(value)
    }

    when {
      value < node.value -> node.left = insertRec(node.left, value)
      value > node.value -> node.right = insertRec(node.right, value)
      else -> return node // Valor já existe
    }

    return node
  }

  fun search(value: T): Boolean {
    return searchRec(root, value)
  }

  private fun searchRec(node: Node<T>?, value: T): Boolean {
    if (node == null) {
      return false
    }

    return when {
      value == node.value -> true
      value < node.value -> searchRec(node.left, value)
      else -> searchRec(node.right, value)
    }
  }

  fun inorderTraversal() {
    inorderRec(root)
    println()
  }

  private fun inorderRec(node: Node<T>?) {
    if (node != null) {
      inorderRec(node.left)
      print("${node.value} ")
      inorderRec(node.right)
    }
  }
}
```

## Métodos

### insert(value: T)
Insere um novo valor na árvore mantendo a propriedade de ordenação.

### search(value: T): Boolean
Procura um valor na árvore e retorna true se encontrado.

### inorderTraversal()
Percorre a árvore em ordem (esquerda, raiz, direita) e imprime os valores.

## Exemplo de Uso

```kotlin
fun main() {
  val tree = BinaryTree<Int>()
  
  // Inserindo valores
  tree.insert(5)
  tree.insert(3)
  tree.insert(7)
  tree.insert(1)
  tree.insert(9)

  // Percorrendo a árvore em ordem
  println("Valores em ordem:")
  tree.inorderTraversal()

  // Buscando valores
  println("Busca pelo valor 7: ${tree.search(7)}")
  println("Busca pelo valor 4: ${tree.search(4)}")
}
```

## Complexidade de Tempo

- Inserção: O(h) - onde h é a altura da árvore
- Busca: O(h)
- Percurso em ordem: O(n) - onde n é o número de nós

Para uma árvore balanceada, h = log(n), resultando em:
- Inserção: O(log n)
- Busca: O(log n)

## Casos de Uso

- Implementação de bancos de dados indexados
- Sistemas de arquivos
- Expressões matemáticas
- Compressão de dados (Árvores de Huffman)
- Implementação de conjuntos e mapas ordenados