
//***********************************************************************************/


// Fonction permettant de recupérer le dernier mot en suppriment les espaces.


const str ="Je veux le dernier mot    ";


 function lastWord(str){

  let i = 0;
  let str2 = str.length-1;
  let newWord = " ";

  while(i < str2) 
  { 
     i++

  }while(str[i] === " "){
     i--

  }while(str[i] !== " "){
     i--
  }

  i++
  while(str[i] !== " "){
     newWord = newWord + str[i];
     i++
  }
     console.log(newWord)
}

lastWord(str)


   //*******************************************************************************************/