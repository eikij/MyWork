
//**********************************************************************/

// algo permettant le calcul de la factorielle (methode iterative)

function factorielle(nbr){

    let i, nbr1, res =1;

    for(i = 1; i <= nbr; i++){
        res= res* i;
    }
    return res;
}
console.log(factorielle(5));


//*********************************************************************/

//Alog permettant le calcul de la factorielle ( methode recursive)

function facto(nbr){
    if (nbr <= 1){ 
    return 1
    }else{
    return nbr * facto(nbr-1)
}    
}
console.log(facto(5))

//********************************************************************/