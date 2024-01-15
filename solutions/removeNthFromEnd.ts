function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p1 = head;
  let p2 = head;
  let count = n;

  while(count > 0) {
    p1 = p1.next;
    count--;
  }

  let pastElement = p2;
  while(p1) {
    p1 = p1.next;
    p2 = p2.next;
    pastElement = p2;
  }

  pastElement.next = p2.next;

  return head;
};