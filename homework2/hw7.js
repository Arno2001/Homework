let arr = [2,6,7,5,2,9,3,7,2,7,2,6,3,2];
let obj = {};
for(let i of arr){
    if(obj[i]){
        obj[i]++;
    }else{
        obj[i] = 1;
    }
}
console.log(obj);
let prop = Object.keys(obj);
let result = prop[0];
for(let i = 0; i < prop.length; i++){
    if(obj[prop[i]] > obj[result]){
        result = prop[i];
    }
}
console.log(result);