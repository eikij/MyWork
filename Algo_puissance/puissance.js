
//***********************************************************/

// Algo permettant de calculer la puissance d'un nombre. 


function num (nbr, power){
 
    let total = 1;
    for( i = 1; i <= power; i++)
     total *= nbr;
     return total
}

console.log(num(5, 3))


//*********************************************************/
