const repeatSpaces = function(length){
  return repeatCharacter(length," ");
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = "";
  for (let loopIndex = 0; loopIndex < numberOfTimes; loopIndex++ ) {
    characterLine += character;
  }
  return characterLine;
}

const generateUpperFilledPart = function(height) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.floor(height/2);
  for(let index = 1; index <= height; index+=2) {
    upperPart += repeatSpaces( spacesRequired )+ repeatCharacter(index,"*"); 
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
    lowerPart += repeatSpaces( spacesRequired )+ repeatCharacter(index,"*");
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
  return repeatSpaces(Math.ceil(height/2))+repeatCharacter(1,"*");
}

const edgeLineOfDiamond = function(height) {
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
  return edgeLineOfDiamond(height)+delimiter+upperPart;
}  

const generateLowerPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 1;
  let delimiter = "\n";
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacter(1,"*");
  for(let index = height-4; index >=1 ; index-=2) {
    lowerPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart+edgeLineOfDiamond(height);
}  

const generateHollowDiamond = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperPart(height) + generateLowerPart(height);
  return hollow;
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
  return edgeLineOfDiamond(height)+delimiter+upperPart;
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
  return lowerPart+edgeLineOfDiamond(height);
}  

const generateAngledDiamond = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperAngledPart(height) + generateLowerAngledPart(height);
  return hollow;
}

const createDiamond = function(type,height){
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
  return diamond;
}

const createLeftAligned = function(baseWidth){
  let triangle="";
  let delimiter="";
  for(let index=0; index<baseWidth; index++){
    rows = repeatCharacter(index+1,"*")
    triangle = triangle+delimiter+rows;
    delimiter = "\n";
  }
  return triangle;
}

const createRightAligned = function(baseWidth){
  let triangle = "";
  let delimiter = "";
  for (let index = 0; index < baseWidth; index++) {
    spaces = repeatCharacter(baseWidth-index-1," ");
    stars = repeatCharacter(index+1,"*")
    triangle += delimiter + spaces + stars;
    delimiter = "\n";
  }
  return triangle;
}

const createTriangle = function(type,baseWidth){
  if(type == "right"){
    triangle = createRightAligned(baseWidth);
  }
  if(type == "left"){
    triangle = createLeftAligned(baseWidth);
  }
  return triangle;
}

const createEmptyRectangle = function(length,breadth){
  let firstColumn = repeatCharacter(length,"*");
  let delimitor = "";
  let rectangle = "";
  for(let index=0; index<breadth; index++){
    let  row=firstColumn;
    if(index<breadth-1 && index>0){
      space = repeatSpaces(length-2);
      row="*"+space+"*";
      space="";
    }
    rectangle += delimitor+row;
    delimitor="\n";
  }
  return rectangle;
}

const createAlternateRectangle = function(length,breadth){
  let firstRow = repeatCharacter(length,"*");
  let alternateLines = repeatCharacter(length,"-");
  let rectangle="";
  let delimitor="";
  for(let index = 1; index <= breadth; index++){
    if(index%2 == 0){
      rectangle+=delimitor+alternateLines;
    }
    else{
      rectangle += delimitor+firstRow;
    }
    delimitor="\n";
  }
  return rectangle;
}

const createFilledRectangle = function(length,breadth){
  let rectangle = "";
  let delimitor = "";
  let column = repeatCharacter(length,"*")
  for(let index = 0; index < breadth; index++){
    rectangle += delimitor+column;
    delimitor = "\n";
  }
  return rectangle;
}

const createRectangle = function(type,length,breadth){
  switch (type){
    case "alternating":
      rectangle = createAlternateRectangle(length,breadth)
      break;
    case "empty":
      rectangle = createEmptyRectangle(length,breadth);
      break;
    case "filled":
      rectangle = createFilledRectangle(length,breadth);
      break;
    default :
      rectangle = "please enter correct typeOfRectangle";
  }
  return rectangle;
}

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;
