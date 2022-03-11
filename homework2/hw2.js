let arr = [-5,55,7,-8,-36,9,45,84,-36,3,1,-29,64,87,90,-10,5];
let count = 0, countKent = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        count++;
    }
    if(arr[i] % 2 != 0){
        countKent++;
    }
}
console.log("Drakan - " + count);
console.log("Bacasakan - " + countKent);