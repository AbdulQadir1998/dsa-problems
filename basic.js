
function maxCost(cost, labels, dailyCount) {
    // Write your code here
    let max = -1; 
    let cos = 0;
    let i = 0;
    let legal = 0;
    let j;
    let flag = false;
    
    while (i < cost.length) {
        j = i;
        cos = 0;
        legal = 0;
        flag = false;
        
        while (j < cost.length) {
            
            cos = cos + cost[j];
            if (labels[j] === 'legal') {
                legal++;
            }
            if (legal === dailyCount) {
                flag = true
                break;
            }
            j++;
        }
        
        if (flag) {
            max = Math.max(max, cos);
        }
        i = i+ legal+1;
    }
    return max;
}

let a = maxCost([
    34, 60, 10, 81, 28,  2, 49, 64, 59, 61, 85,
    82, 77, 14, 81,  6, 76, 37, 86, 99, 11, 92,
    85, 95, 78, 13, 57, 59, 46, 93, 38, 35, 22,
    68, 92, 17, 61, 34, 53, 87, 57, 89, 32, 74,
    70, 42, 28, 35, 24, 14
  ] , [  'illegal', 'legal',   'legal',   'legal',
'legal',   'legal',   'legal',   'legal',
'legal',   'legal',   'legal',   'legal',
'legal',   'legal',   'illegal', 'illegal',
'legal',   'legal',   'illegal', 'legal',
'legal',   'legal',   'legal',   'illegal',
'legal',   'illegal', 'legal',   'legal',
'legal',   'legal',   'legal',   'illegal',
'illegal', 'legal',   'legal',   'legal',
'legal',   'illegal', 'legal',   'illegal',
'illegal', 'legal',   'legal',   'legal',
'legal',   'legal',   'legal',   'legal',
'legal',   'legal'
], 7)

// console.log(a);


// Sort obj1 and obj2 on the basis of Keys And
// If keys are equal then Sort on the basis of value

const obj1 = { 1: 2, 4: 5, 5: 5, 6: 7 };
const obj2 = { 2: 1, 3: 5, 4: 3, 5: 4, 7: 8 };

let ans = [];

const keys = [...Object.keys(obj1), ...Object.keys(obj2)].sort((a,b) => Number(a) > Number(b) ? 1 : -1);

const newKeys = new Set(keys) 

for (let key of newKeys) {
    if (key in obj1 && key in obj2 === false) {
        ans.push( { [key]: obj1[key] } )
    }

    else if (key in obj2 && key in obj1 === false) {
        ans.push( { [key]: obj2[key]} )
    }

    else if (obj1[key] && obj2[key]) {
        if (obj1[key] < obj2[key]) {
            ans.push( { [key]: obj1[key]} )
            ans.push( { [key]: obj2[key]} )
        } else {
            ans.push( { [key]: obj2[key]} )
            ans.push( { [key]: obj1[key]} )
        }
    }
}

// console.log(ans);

