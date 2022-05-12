function cachingFuncs(func){
    const m = new Map();
    return function(arg, ...rest){
        if(rest != ""){
            let arr = [arg].concat(...rest);
            let res1;
            for(let val of arr){
                if(m.has(val)){
                    return m.get(val);
               }
                res1 = func(val);
                m.set(val,res1);
            }
            return res1
        }
        if(m.has(arg)){
            return m.get(arg);
        }
        let res = func.apply(obj) ? func.apply(obj,arg) : func(arg);
        m.set(arg,res);
        return res;
    }
}
// let obj = {
//     name : "John",
//     moo : function (){
//         return this.name;
//     }
// }
// function foo(a){
//     return a*a;
// }
// function foo1(n){
//     return n/2;
// }
// const caching = cachingFuncs(foo);
// console.log(caching(1,2,5,4,3));
// console.log(caching(8));
// console.log(caching(2));
// const caching1 = cachingFuncs(obj.moo);
// console.log(caching1());
// const caching2 = cachingFuncs(foo1);
// console.log(caching2(12));