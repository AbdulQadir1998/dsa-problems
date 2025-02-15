// Merge Sort
// https://www.geeksforgeeks.org/merge-sort/

const merge = (arr, l, m, r) => {

    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

const mergeSort = (arr, l, r) => {
    
    if (l >= r) {
        return;
    }

    let mid = l + parseInt((r-l)/2);

    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);
    console.log(arr);
    merge(arr, l, mid, r);
}

var arr = [ 38,27, 43, 3, 9, 82, 10 ];
var arr_size = arr.length;

// mergeSort(arr, 0, arr_size - 1);
// console.log('final', arr);


// https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/

const power = (x, n) => {

    if (n === 1) {
        return x;
    }

    let ans = power(x, n-1);
    console.log('y', ans);
    return x * ans;
}

// console.log(power(5, 3));


// Quick Sort
// https://www.geeksforgeeks.org/quick-sort/

const quickSort = (arr, s, e) => {

    function swap(ar, i, j) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
        return;
    }    

    const partition = (temp, start, end) => {

        let pivot = temp[end];
        let j = start;  
        
        for (let i = start; i <= end-1; i++) {
            if (temp[i] < pivot) {
                swap(arr, i, j);
                j++;
            }
        }
        swap(arr, j, end);
        return j;
    };

    const sort = (arr, s, e) => {
        if (s >= e) {
            return;
        }

        let p = partition(arr, s, e);

        sort(arr, s, p-1);
        sort(arr, p+1, e);
    }

    sort(arr, s, e);
}

var arr = [ 38,27, 43, 3, 9, 82, 10 ];
quickSort(arr, 0, arr.length-1);
console.log('final', arr);