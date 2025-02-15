// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.size = 4;
//     }
// }

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');

// a.next = b;
// b.next = c;
// c.next = d;

// const print = (head) => {
//     let curr = head;
//     while (curr !== null) {
//         console.log(curr.val);
//         curr = curr.next;
//     }
// }

// // print(a);

// const reverse = (head) => {
//     if (head === null) {
//         return;
//     }
    
//     reverse(head.next);
//     console.log(head.val);
// }

// // reverse(a);


// const deleteNthLast = (head, n) => {
//     let curr = head;
//     let count = 1;
//     while (curr !== null) {
//         if (count === curr.size-n) {
//             console.log(count)
//             curr.next = curr.next.next;
//             return;
//         }
//         curr = curr.next;
//         count++;
//     }
// }

// deleteNthLast(a, 2);
// print(a);
