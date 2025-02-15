class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(index) {
        return (index*2)+1;
    }
  
    getRightChildIndex(index) {
        return (index*2)+2;
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

    add(item) {

        let current = this.heap.length;
        this.heap[current] = item;

        // Heapify Up

        while (this.hasParent(current)) {
            let parentIndex = this.getParentIndex(current);
            
            if (this.heap[current] < this.heap[parentIndex]) {
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

        if (left < size && arr[left] < arr[smallest]) {
            smallest = left
        }

        if (right < size && arr[right] < arr[smallest]) {
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
        for (let i = parseInt(size/2)-1; i >=0; i--) {
            this.heapify(arr, size, i);
        }

        return arr;
    }

    heapSort(arr = []) {
        let size = arr.length-1;

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


let pq = new MinHeap();

pq.add(3);
pq.add(4);
pq.add(5);
pq.add(2);

// pq.print();
// pq.remove();
// pq.print();

let heap = pq.buildHeap([7,4,2,5,6,3,1]);
// console.log(heap);

let sorted = pq.heapSort(heap);
// console.log(sorted);

module.exports = { MinHeap };

