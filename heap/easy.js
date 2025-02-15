const { pq, ExtMaxHeap }  = require('./comp-max');

const frequencySort = (nums = []) => {

    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }

    let arr = [];

    Object.keys(hash).forEach(key => {
        arr.push({ key: hash[key], value: key });
    });

    let heap = pq.buildHeap(arr);

    let ans = [];
    let pq1 = new ExtMaxHeap(heap);

    while(pq1.heap.length > 0) {

        const {key, value } = pq1.remove();

        for (let i = 0; i < key; i++) {
            ans.push(value);
        }
    }

    return ans;
}

let ans = frequencySort([2,2,1,1,1,3,4,5,5]);
// console.log(ans);

