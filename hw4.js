let arr = Array.from(String(1368),Number);
let check = true, check2 = true;
for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i+1] && check == true){
        check = true;
    }else{
        check = false;
    }
    if(arr[i] == 3){
        check = true;
        break;
    }else if(arr[i] != 5 && check2 == true){
        check2 = true;
    }else{
        check2 = false;
    }
}
if(check == true || check2 == true){
    console.log("YES");
}else{
    console.log("NO");
}