function count(arr: number[]: number[]){
  const max = Matth.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = new Array(range).fill(0);
  const output = new Array(arr.legth);

  //step 1: count the occurances
  arr.forEach(num => count[num - min]==);

  

  //step 2: modify count by adding the previous counts()cummulative sum
  for(let i =1; i< count.length; i++){
    count[i] += count[i-1];
  }
  /
  for (let i = arr.length -1 ; i>=0; i--){
    out[ut[...count[array[]1]min]]
  }
}
