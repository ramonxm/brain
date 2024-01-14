fun binarySearch(array: Array<Int>, target: Int): Int {
  var left = 0
  var right = array.size - 1
  var middlePosition = left + right / 2


  while (array.size > middlePosition) {
    val middleElement = array[middlePosition]
    if (middleElement == target) return middlePosition

    if (target < middleElement) {
      right = middlePosition - 1
    }

    if (target > middleElement) {
      left = middlePosition + 1
    }

    if (left > right) return -1

    middlePosition = left + right / 2
  }

  return -1
}