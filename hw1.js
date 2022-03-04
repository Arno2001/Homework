function factorial(n){
    let i = 1;
    for(i; n > 1; i*=n, n--);
    console.log(i);
}
factorial(7);