// https://www.spoj.com/problems/ARRANGE/

const arrangeAmplifiers = (arr = []) => {
  
  let ones = [];
  let two = false;
  let three = false;
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ones.push(1);
    }

    else if (!two && arr[i] === 2) {
      two = true;
    }

    else if (!three && arr[i] === 3) {
      three = true;
    }

    else {
      ans.push(arr[i]);
    }
  }

  ans.sort((a,b) => a > b ? -1 : 1);

  if (two) ans.push(2);
  if (three) ans.push(3);

  console.log([...ones, ...ans]);
}

// console.log(arrangeAmplifiers([1,2,4,5,6,3,2,2,3,1,1]));


// https://www.spoj.com/problems/GERGOVIA/

const wineTrading = (arr = []) => {

  const buy = [];
  const sell = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      buy.push({ index: i, value: arr[i]});
    } else {
      sell.push({ index: i, value: arr[i]});
    }
  }

  let i = 0;
  let j = 0;
  let ans = 0;

  while (i < buy.length && j < sell.length) {

    let x = Math.min(buy[i].value, -sell[j].value);

    buy[i].value-=x;
    sell[j].value+=x;


    let distance = Math.abs(buy[i].index - sell[j].index);
    ans = ans + (x*distance);

    if (buy[i].value === 0) {
      i++;
    }

    if (sell[j].value === 0) {
      j++;
    }
  }

  console.log(ans);
};

// wineTrading([5, -4, 1, -3, 1]);
// wineTrading([-1000, -1000, -1000, 1000, 1000, 1000]);

