class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function findMiddle(head: ListNode): ListNode {
  let slow: ListNode = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  
  return slow;
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode = new ListNode();
  let tail: ListNode = head;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 !== null ? l1 : l2;

  return head.next;
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const middle: ListNode = findMiddle(head);
  const afterMiddle: ListNode | null = middle.next;
  middle.next = null;

  const left: ListNode | null = sortList(head);
  const right: ListNode | null = sortList(afterMiddle);

  const sortedList: ListNode | null = mergeTwoLists(left, right);

  return sortedList;
}
