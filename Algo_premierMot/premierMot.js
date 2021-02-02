
//****************************************************************************/

//Fonction permettant de recupérer le premier mot en suppriment les espaces.


str = "  Ce jour c'est du javascript"

function premierMot(str){
    let i = 0
  let newWord = "";

while(str[i] === " "){
    i++

}
while(str[i] !== " "){
    newWord = newWord + str[i];
    i++
    
}
console.log(newWord)
}

 premierMot(str)


 //**************************************************************************/