function isPalindrome(head: ListNode | null): boolean {
  let p1 = head;
  let p2 = head;

  // find the middle using fast n slow
  while (p2 && p2.next) {
    p1 = p1.next!;
    p2 = p2.next.next!;
  }


  // reverse list second half  
  let prev = null;
  while (p1) {
    const next = p1.next;
    p1.next = prev;
    prev = p1;
    p1 = next; 
  }

  // compare the halves   
  p1 = head;
  p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};