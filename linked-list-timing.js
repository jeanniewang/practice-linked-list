const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

// Construct a timing test to verify the time complexities of
// `addToHead` and `addToTail` for both single and doubly
// linked lists

const nodeNumber = 1000000;

let linkedListAddToHeadStartTime = Date.now();
let linkedList = new LinkedList()
for (let i = 1; i <= nodeNumber; i ++) {
    linkedList.addToHead(i);
}
let linkedListAddToHeadEndTime = Date.now();
console.log(`Add ${nodeNumber} nodes into linkedList head: ${linkedListAddToHeadEndTime - linkedListAddToHeadStartTime} ms`);

linkedListAddToTailStartTime = Date.now();
linkedList = new LinkedList()
for (let i = 1; i <= nodeNumber; i ++) {
    linkedList.addToTail(i);
}
linkedListAddToTailEndTime = Date.now();
console.log(`Add ${nodeNumber} nodes into linkedList tail: ${linkedListAddToTailEndTime - linkedListAddToTailStartTime} ms`);

let doublyLinkedListAddToHeadStartTime = Date.now();
let doublyLinkedList = new DoublyLinkedList()
for (let i = 1; i <= nodeNumber; i ++) {
    doublyLinkedList.addToHead(i);
}
let doublyLinkedListAddToTailEndTime = Date.now();
console.log(`Add ${nodeNumber} nodes into doublyLinkedList head: ${doublyLinkedListAddToTailEndTime - doublyLinkedListAddToHeadStartTime} ms`);


doublyLinkedListAddToTailStartTime = Date.now();
doublyLinkedList = new DoublyLinkedList()
for (let i = 1; i <= nodeNumber; i ++) {
    doublyLinkedList.addToTail(i);
}
doublyLinkedListAddToTailEndTime = Date.now();
console.log(`Add ${nodeNumber} nodes into doublyLinkedList tail: ${doublyLinkedListAddToTailEndTime - doublyLinkedListAddToHeadStartTime} ms`);