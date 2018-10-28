const makeCycler = require('./lib.js').makeCycler;

const repeatSpaces = function(length){
  return repeatCharacter(length," ");
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = Array(numberOfTimes).fill(character).join("");
  return characterLine;
}

const generateDiamondUpperPart = function(height,firstCharacter,lastCharacter,character) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.floor(height/2);
  for(let index = 1; index <= height-4; index+=2) {
    spacesRequired--; 
    upperPart += repeatSpaces(spacesRequired)+ firstCharacter+repeatCharacter(index,character)+lastCharacter+repeatSpaces(spacesRequired);
    upperPart += delimiter;
  }
  return edgeLineOfDiamond(height)+delimiter+upperPart;
}

const generateLowerPart = function(height,firstCharacter,lastCharacter,character){
  let lowerPart = "";
  let spacesRequired = 1;
  let delimiter = "\n";
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacter(1,"*");
  for(let index = height-4; index >=1 ; index-=2) {
    lowerPart += repeatSpaces( spacesRequired )+ firstCharacter+repeatCharacter(index,character)+lastCharacter+repeatSpaces(spacesRequired);
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart+edgeLineOfDiamond(height);
}

const line = function(height) {
  return repeatSpaces(Math.ceil(height/2))+"*"+repeatSpaces(Math.ceil(height/2));
}

const edgeLineOfDiamond = function(height) {
  return line(height-1);
}

const middlePart = function(width,character){
  let spaces = repeatCharacter(width-2,character);
  return "*"+spaces+"*";
}

const joinLines = function(upper,middle,lower){
  return upper+middle+"\n"+lower;
}

const generateHollowDiamond = function(height) {
  let hollowDiamond = "";
  let delimiter = "\n";
  let upper = generateDiamondUpperPart(height,"*","*"," ");
  let middle = middlePart(height," ")
  let lower = generateLowerPart(height,"*","*"," ");
  return joinLines(upper,middle,lower);
}

const generateAngledDiamond = function(height) {
  let hollow = "";
  let delimiter = "\n";
  let upper = generateDiamondUpperPart(height,"/","\\"," ");
  let middle = middlePart(height," ");
  let lower = generateLowerPart(height,"\\","/",    " ");
  return joinLines(upper,middle,lower);
}

const generateFilledDiamond = function(height) {
  let diamond = "";
  let upper= generateDiamondUpperPart(height,"*","*","*");
  let lower= generateLowerPart(height,"*","*","*");
  let middle= middlePart(height,"*");
  return joinLines(upper,middle,lower);
}

const createDiamond = function(type,height){
  if(height%2 == 0){
    height ++;
  }
  let diamond = {filled : generateFilledDiamond, hollow : generateHollowDiamond , angled : generateAngledDiamond}
  return diamond[type](height);
}

const createLeftAligned = function(baseWidth){
  let triangle=[];
  for(let index=0; index<baseWidth; index++){
    rows = repeatCharacter(index+1,"*");
    triangle.push(rows)
  }
  return triangle;
}

const createRightAligned = function(baseWidth){
  let triangle = [];
  for (let index = 0; index < baseWidth; index++) {
    spaces = repeatCharacter(baseWidth-index-1," ");
    stars = repeatCharacter(index+1,"*");
    triangle.push(spaces+stars);
  }
  return triangle;
}

const createReverseRightAligned = function(baseWidth){
  return createRightAligned(baseWidth).reverse();
}

const createReverseLeftAligned = function(baseWidth){
  return createLeftAligned(baseWidth).reverse();
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
  let column = repeatCharacter(length,"*");
  rectangle = Array(breadth).fill(column).join("\n");
  return rectangle;
}

const createRectangle = function(type,length,breadth){
  let rectangle = {filled: createFilledRectangle, empty:createEmptyRectangle, alternating:createAlternateRectangle};
  return rectangle[type](length,breadth);
}

const createTriangle = function(type,baseWidth){
  let triangle = {right : createRightAligned, 
    left : createLeftAligned,
    rightReverse : createReverseRightAligned,
    leftReverse : createReverseLeftAligned };
  return triangle[type](baseWidth).join("\n");
}

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;
