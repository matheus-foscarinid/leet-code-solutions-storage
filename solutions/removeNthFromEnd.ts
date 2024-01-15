function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p1 = head;
  let p2 = head;
  let count = n;

  while(count > 0) {
    p1 = p1.next;
    count--;
  }

  if (!p1) return head.next;

  while(p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;
  return head;
};