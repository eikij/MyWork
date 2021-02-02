 
 //*************************************************************/

 // algo suite de Fibonacci (methode iterative)


function suiteFibonacci(nbr){

    let a = 0
    let b = 1
    let resu = 1

    for(i=2; i<=nbr; i++){
    resu = a + b;
    a = b;
    b = resu;
}
    return resu

 }
    console.log(suiteFibonacci(8))


  //***********************************************************/

    // algo suite de Fibonacci (methode recursive)


function suiteFibonacci(nbr){
    
    if (nbr <= 2){
    return 1

} else {

    return suiteFibonacci(nbr-1) + suiteFibonacci(nbr-2);
}
}
console.log(suiteFibonacci(8))


//************************************************************/