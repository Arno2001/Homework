let arr = [12,65,-45,-7,8,-36,7,9,-6,94];
let num;
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        for(let j = arr.length ; j > i; j--){
            if(arr[j] > 0){
                num = arr[j];
                arr[j] = arr[i];
                arr[i] = num;
                break;
            }
        }
    }
}
console.log(arr);