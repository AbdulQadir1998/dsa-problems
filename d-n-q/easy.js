// Find minimum in rotated sorted array

const findMin = function(nums) {
    
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] <= nums[end]) {
            return nums[start];
        }
        let mid = start + parseInt((end-start)/2);

        let prev = (mid + nums.length - 1) % nums.length;
        let next = (mid+1) % nums.length;

        if (nums[mid] < nums[prev] && nums[mid] < nums[next]) {
            return nums[mid];
        }

        if (nums[mid] >= nums[start]) {
            start = mid+1;
        }
        else {
            end = mid - 1;
        }
    }
};

// console.log(findMin([4,5,6,7,8,0,1]));


// Search element in nearly sorted array


const nearlySorted = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);

        if (nums[mid] === target) {
            index = mid;
            break;
        }

        if (nums[mid-1] === target) {
            index = mid - 1;
            break;
        }

        if (nums[mid+1] === target) {
            index = mid+1;
            break;
        }
        
        if (nums[mid] < target) {
            start = mid+2;
        }
        else if (nums[mid] > target) {
            end = mid - 2;
        }
    }
    return index;
};

// console.log(nearlySorted([5,10,30,20,40], 20));


const findFloor = (nums, target) => {
    // Greatest Element smaller than target. 5 -> (4)
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);
        
        if (target >= nums[mid]) {
            ans = nums[mid];
            start = mid+1;
        }

        else if (target < nums[mid]) {
            end = mid - 1;
        }
    }
    return ans;
}

// console.log(findFloor([1,2,3,4,8,10,12,19,20], 5));


const findCeil = (nums, target) => {
    // Smallest Element greater than target. 8 -> (9)

    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);
        
        if (target > nums[mid]) {
            start = mid+1;
        }

        else if (target <= nums[mid]) {
            ans = nums[mid];
            end = mid - 1;
        }
    }
    return ans;
}

// console.log(findCeil([1,2,3,4,8,9,12,19,20], 11));


// Find position of an element in an infinte sorted array

const infinteSorted = (arr = [], key) => {

    let start = 0;
    let end = 1;

    while (key > arr[end]) {
        start = end;
        end = end * 2;
    }

    let ans = -1;
    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);
        
        if (key === arr[mid]) {
            ans = mid;
            break;
        }

        else if (key < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return ans;
}

// console.log(infinteSorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 12))


// Find First 1 in an infinte sorted array

const fristOne = (arr = [], key) => {
    let start = 0;
    let end = 1;

    while (key > arr[end]) {
        start = end;
        end = end * 2;
    }

    let ans = -1;

    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);
        
        if (key === arr[mid]) {
            ans = mid;
            end = mid -1;
        }

        else if (key < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return ans;
}

// console.log(infinteSorted([0,0,0,0,0,0,0,0,1,1,1,1,1], 1))


// Minimum difference element in a sorted array

const minDiff = (arr = [], key) => {
    let start = 0;
    let end = arr.length;

    while (start <= end) {
       
        let mid = start + parseInt((end-start)/2);
        if (key === arr[mid]) {
            return arr[mid];
        }

        else if (key < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    let diff1 = Math.abs(arr[start] - key);
    let diff2 = Math.abs(arr[end] - key);

    return diff1 > diff2 ? arr[end] : arr[start];
}

// console.log(minDiff([1,3,8,10,15], 12));

