let arr = Array.from(String(13578),Number);
let check = false;
for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[i-1]){
        check = true;
    }else{
        check = false;
        break;
    }
}
if(check == true){
    console.log("Drakan");
}else{
    console.log("Bacasakan");
}