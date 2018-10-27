const makeCycler = require('./lib.js').makeCycler;

const repeatSpaces = function(length){
  return repeatCharacter(length," ");
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = Array(numberOfTimes).fill(character).join("");
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
  for(let index = height-2; index >= 1 ; index -= 2) {
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
  let hollowDiamond = "";
  let delimiter = "\n";
  hollowDiamond = generateUpperPart(height) + generateLowerPart(height);
  return hollowDiamond;
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

const emptyLine = function(breadth){
  let spaces = repeatSpaces(breadth-2); 
  return "*"+spaces+"*";
}

const createEmptyRectangle = function(length,breadth){
  let rectangle = "";
  let row = repeatCharacter(length,"*");
  if(breadth>2){
    let emptyRow = emptyLine(length);
    rectangle = Array(breadth-2).fill(emptyRow).join("\n");
    return row+"\n"+rectangle+"\n"+row;
  }
  return row+"\n"+row;
}

const createAlternateRectangle = function(length,breadth){
  let firstRow = repeatCharacter(length,"*");
  let alternateLines = repeatCharacter(length,"-");
  let cycleRows = makeCycler([firstRow,alternateLines]);
  let randomArray = Array(breadth).fill("9");
  let rectangle = randomArray.map(cycleRows).join("\n");
  return rectangle;
}

const createFilledRectangle = function(length,breadth){
  let rectangle = "";
  let column = repeatCharacter(length,"*")
  rectangle = Array(breadth).fill(column).join("\n");
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
