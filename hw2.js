let arr = Array.from(String(8547), Number);
let num = arr[0];
arr[0] = arr[arr.length-1];
arr[arr.length-1] = num;
console.log(arr);