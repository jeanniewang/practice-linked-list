// Do not change this
class LinkedListNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = undefined;
		this.length = 0;
	}

	addToHead(val) {
		const newNode = new LinkedListNode(val);
		this.length += 1;
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		newNode.next = this.head;
		this.head = newNode;
	}

	addToTail(val) {
		const newNode = new LinkedListNode(val);
		this.length += 1;

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		this.tail.next = newNode;
		this.tail = newNode;
	}

	// You can use this function to help debug
	print() {
		let current = this.head;

		while (current) {
			process.stdout.write(`${current.value} -> `);
			current = current.next;
		}

		console.log("NULL");
	}
}

module.exports = LinkedList;