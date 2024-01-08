def findMidle(head): 
    slow = head
    fast = head.next

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def mergeTwoLists(l1, l2): 
    head = ListNode()
    tail = head

    while l1 and l2: 
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return head.next
  

class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
    
        middle = findMidle(head)
        afterMiddle = middle.next
        middle.next = None
    
        left = self.sortList(head)
        right = self.sortList(afterMiddle)
    
        sortedList = mergeTwoLists(left, right)
    
        return sortedList
        