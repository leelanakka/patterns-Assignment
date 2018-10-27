const repeatCharacter = function(character, numberOfTimes) {
  let line = "";
  for(let index = 1; index <= numberOfTimes; index ++) {
    line += character;
  }
  return line;
}

const repeatSpaces = function(numberOfTimes) {
  return repeatCharacter(" ",numberOfTimes);
}

const generateUpperFilledPart = function(height) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.floor(height/2);
  for(let index = 1; index <= height; index+=2) {
    upperPart += repeatSpaces( spacesRequired )+ repeatCharacter("*",index); 
    upperPart += delimiter;
    spacesRequired--; 
  }
  return upperPart;
}  

const generateLowerFilledPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 1;
  let delimiter = "\n";
  for( let index = height-2; index >= 1 ; index -= 2 ) {
    lowerPart += repeatSpaces( spacesRequired )+ repeatCharacter("*",index);
    if(index == 1){
      delimiter = ""
    }
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart;
}  

const generateFilledDiamond = function(height) {
  let diamond = "";
  let upperPart = generateUpperFilledPart(height);
  let lowerPart = generateLowerFilledPart(height);
  diamond = upperPart + lowerPart; 
  return diamond;
}


const line = function(height) {
  return repeatSpaces(Math.ceil(height/2))+repeatCharacter("*",1);
}

const topLineOfHollow = function(height) {
  return line(height-1); 
}

const bottomLineOfHollow = function(height) {
  return line(height-1); 
}

const generateUpperPart = function(height) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.floor(height/2);
  for(let index = 1; index <= height-2; index+=2) {
    spacesRequired--; 
    upperPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    upperPart += delimiter;
  }
  return topLineOfHollow(height)+delimiter+upperPart;
}  

const generateLowerPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 1;
  let delimiter = "\n";
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacter("*",1);
  for(let index = height-4; index >=1 ; index-=2) {
    lowerPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart+bottomLineOfHollow(height);
}  

const generateHollowDiamond = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperPart(height) + generateLowerPart(height);
  return hollow;
}

const upperLineOfAngled = function(height) {
  return line(height-1); 
}

const bottomLineOfAngled = function(height) {
  return line(height-1); 
}

const generateUpperAngledPart = function(height) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.floor(height/2);
  for(let index = 1; index <= height-4; index+=2) {
    spacesRequired--; 
    upperPart += repeatSpaces( spacesRequired )+ "/"+repeatSpaces(index)+"\\";
    upperPart += delimiter;
  }
  spacesRequired--;
  upperPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(height-2)+"*";
  upperPart += delimiter;
  return upperLineOfAngled(height)+delimiter+upperPart;
}  

const generateLowerAngledPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 1;
  let delimiter = "\n";
  for(let index = height - 4; index >= 1 ; index -= 2) {
    lowerPart += repeatSpaces( spacesRequired )+  "\\"+repeatSpaces(index)+"/";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart+bottomLineOfAngled(height);
}  

const generateAngledDiamond = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperAngledPart(height) + generateLowerAngledPart(height);
  return hollow;
}

const main = function(){
  let type= process.argv[2];
  let height = process.argv[3];
  if(height%2 == 0){
    height ++
  }
  switch(type){
    case "filled":
      diamond = generateFilledDiamond(height);
      break;
    case "hollow":
      diamond = generateHollowDiamond(height);
      break;
    case "angled":
      diamond = generateAngledDiamond(height);
      break;
  }
  console.log(diamond);
}
main();
