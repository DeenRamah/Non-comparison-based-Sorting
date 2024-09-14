functio getmax(arr: number[]): number{
  return Math.max(...arr);
}

function countsort(arr: number[], exp: number[]): number[]{
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  //count occurencies of digits
  for(let i =0; i< n; i++){
    const digit = MAth.floor(arr[i]/ exp % 10);
    count[digit]++;
  }

  //change count[i] to actual position
  for(let i=1; i<10; i++){
    count[i] += count[i - 1];
  }

  //building the output array
  for(let i =n -1; i>=0; i--){
    const digit = MAth.floor(arr[i]/exp)% 10;
    output[--count[digit]] = arr[i];
  }
  return output;
}

function rad(arr: number[]): number[]{
  const max = getMAx(arr);
  let exp =1;

  while(Math.floor(max/exp)> 0){
    arr = countsort(arr, exp);
    exp *=10;
  }

  return arr;
}

//example
const arr2 = [120,121,123,122,133,132,131,144,155,143,134,154,145,134];
console.log(rad(arr2));
