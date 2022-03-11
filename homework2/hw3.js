let arr = [10,8486,-54,-25,65,12,-45,-5,78,32113,-5646546,10];
let result = arr[0] , index;
for (let i = 1; i < arr.length; i++){
    if(arr[i] > result){
        result = arr[i];
        index = i;
    }
}
console.log("Index " + index + " Max Number " + result);