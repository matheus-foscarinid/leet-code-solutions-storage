class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;

    while (curr) {
      const next = curr.next; 
      curr.next = prev;

      prev = curr;
      curr = next;
    }

    return prev;
};