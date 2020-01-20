function pairElement(str) {
  //Create an array from the given string
  let arrArgument = str.split("");
  //Declare new array to return
  let arrReturn = [];
  arrReturn = arrArgument.map(item => {
    switch(item){
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
        break;
      case "C":
        return ["C", "G"];
        break;
      case "G":
        return ["G", "C"];
        break;
    }
  })
  return arrReturn;
}

console.log(pairElement("AGCG"));