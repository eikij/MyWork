
//*********************************************************/

// Algo permettant d'indiquer si le nombre est Premier. 


function num(nbr){ 

 if(nbr % 2 === 0) 
    return false;
    return nbr > 1;
}

console.log(num(5))


//********************************************************/

// Algo permettant d'obtenir le nombre Premier suivant. 


function nbrPremier(nbr){
    for( i = 2; i< nbr; i++){
        if(nbr%i === 0){
             return false; 
        }
    }
    return nbr !== 0;
}

function nbrPremierSuivant(premier){
    for( j = premier; ;j++){
        if(nbrPremier(j)){ 
            break
        }
    }
    return j;
}
console.log(nbrPremierSuivant(9))


//*******************************************************/