class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class ExtMinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare || ((a, b) => a.key - b.key);
    }

    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }

    getRightChildIndex(index) {
        return (index * 2) + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(indexOne, indexTwo, arr) {
        const temp = arr[indexOne];
        arr[indexOne] = arr[indexTwo];
        arr[indexTwo] = temp;
    }

    getPeek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    add({ key, value }) {

        const node = new Node(key, value);
        this.heap.push(node);
        let current = this.heap.length-1;

        // Heapify Up

        while (this.hasParent(current)) {
            let parentIndex = this.getParentIndex(current);

            if (this.compare(this.heap[current], this.heap[parentIndex]) < 0) {
            
                this.swap(parentIndex, current, this.heap);
                current = parentIndex;
            } else {
                return;
            }
        }
    }

    heapify(arr, size, index) {
        // Heapify Down

        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);
        let smallest = index;

        if (left < size && this.compare(arr[left], arr[smallest]) < 0) {
            smallest = left
        }

        if (right < size && this.compare(arr[right], arr[smallest]) < 0) {
            smallest = right
        }

        if (smallest !== index) {
            this.swap(smallest, index, arr);
            this.heapify(arr, size, smallest)
        }
    }

    remove() {
        if (this.isEmpty()) {
            return null;
        }

        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapify(this.heap, this.heap.length, 0);
        return item;
    }

    buildHeap(arr = []) {
        let size = arr.length
        for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
            this.heapify(arr, size, i);
        }

        return arr;
    }

    heapSort(arr = []) {
        let size = arr.length - 1;

        while (size > 0) {
            this.swap(0, size, arr);
            this.heapify(arr, size, 0);
            size--;
        }

        return arr;
    }

    print() {
        console.log(this.heap);
    }
}


let pq = new ExtMinHeap();

pq.add({key: 3, value: 1 });
pq.add({key: 2, value: 2 });
pq.add({key: 1, value: 3 });
pq.add({key: 1, value: 4 });

// pq.print();
// pq.remove();
// pq.print();
// pq.remove();
// pq.print();

let heap = pq.buildHeap([
    {key: 7, value: 1},
    {key: 4, value: 2},
    {key: 2, value: 4},
    {key: 5, value: 3},
    {key: 6, value: 2},
    {key: 3, value: 1},
    {key: 1, value: 5},
]);
// console.log(heap);

let sorted = pq.heapSort(heap);
// console.log(sorted);

module.exports  = { pq, ExtMinHeap };