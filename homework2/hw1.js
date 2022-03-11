let str = "hElLo woRLD";
let lowStr = str.toLocaleLowerCase();
let newStr = "";
for(let i = 0; i < str.length; i++){
    if(str[i] == lowStr[i] && str[i] != " "){
        newStr+=str[i];
    }
}
console.log(newStr);