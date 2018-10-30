const makeCycler = require('./closureLib.js').makeCycler;

const repeatSpaces = function(height){
  return repeatCharacter(height," ");
}

const fillNewArray = function(height,element) {
  return new Array(height).fill(element);
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = fillNewArray(numberOfTimes,character).join("");
  return characterLine;
}

const generateDiamondUpperPart = function(height,firstCharacter,lastCharacter,character) {
  let upperPart = "";
  let spaces;
  let repeatString;
  let spacesRequired = Math.floor(height/2);
  let diamond = [];
  for(let index = 1; index <= height-4; index+=2) {
    spacesRequired--; 
    spaces = repeatSpaces(spacesRequired);
    repeatString = repeatCharacter(index,character);
    upperPart = spaces+firstCharacter+repeatString+lastCharacter+repeatSpaces(spacesRequired);
    diamond.push(upperPart);
  }
  diamond.unshift(edgeLineOfDiamond(height));
  return diamond;
}

const generateLowerPart = function(height,firstCharacter,lastCharacter,character){
  let lowerPart = "";
  let spacesRequired = 1;
  let spaces;
  let repeatString;
  let diamond = [];
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacter(1,"*");
  for(let index = height-4; index >=1 ; index-=2) {
    spaces = repeatSpaces(spacesRequired);
    repeatString = repeatCharacter(index,character);
    lowerPart = spaces+ firstCharacter+repeatString+lastCharacter+repeatSpaces(spacesRequired);
    diamond.push(lowerPart);
    spacesRequired++; 
  }
  return diamond.concat(edgeLineOfDiamond(height));
}

const line = function(width) {
  return repeatSpaces(Math.ceil(width/2))+"*"+repeatSpaces(Math.ceil(width/2));
}

const edgeLineOfDiamond = function(width) {
  return line(width-1);
}

const middlePart = function(width,character){
  let spaces = repeatCharacter(width-2,character);
  let diamond = [];
  middle =  "*"+spaces+"*";
  diamond.push(middle)
  return diamond;
}

const joinLines = function(upper,middle,lower){
  let diamond = upper.concat(middle);
  diamond = diamond.concat(lower);
  return diamond.join("\n");
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

const createLeftAligned = function(height){
  let triangle=[];
  for(let index=0; index<height; index++){
    rows = repeatCharacter(index+1,"*")+repeatSpaces(height-(index+1));
    triangle.push(rows);
  }
  return triangle;
}

const createRightAligned = function(height){
  let triangle = [];
  for (let index = 0; index < height; index++) {
    spaces = repeatCharacter(height-index-1," ");
    stars = repeatCharacter(index+1,"*");
    triangle.push(spaces+stars);
  }
  return triangle;
}

const createRightAlignedTriangle = function(height){
  return createRightAligned(height).join("\n");
}

const createLeftAlignedTriangle = function(height){
  return createLeftAligned(height).join("\n");
}

const createReverseRightAligned = function(height){
  return createRightAligned(height).reverse().join("\n");
}

const createReverseLeftAligned = function(height){
  return createLeftAligned(height).reverse().join("\n");
}

const emptyLine = function(breadth){
  let spaces = repeatSpaces(breadth-2); 
  return "*"+spaces+"*";
}

const createEmptyRectangle = function(height,breadth){
  let rectangle = [];;
  let row = repeatCharacter(height,"*");
  rectangle = [row];
  if(breadth>2){
    let emptyRow = emptyLine(height);
    rectangle = rectangle.concat(fillNewArray(breadth-2,emptyRow));
  }
  if(breadth>1){
    rectangle.push(row);
  }
  return rectangle;
}

const createAlternateRectangle = function(height,breadth){
  let firstRow = repeatCharacter(height,"*");
  let alternateLines = repeatCharacter(height,"-");
  let cycleRows = makeCycler([firstRow,alternateLines]);
  let randomArray = fillNewArray(breadth,9);
  let rectangle = randomArray.map(cycleRows);
  return rectangle;
}

const createFilledRectangle = function(height,breadth){
  let rectangle = "";
  let column = repeatCharacter(height,"*");
  rectangle = fillNewArray(breadth,column);
  return rectangle;
}

const extractInputs = function(inputs){
  let userInputs = {};
  userInputs.type = inputs[2];
  userInputs.height = +inputs[3];
  if(inputs[4]){
    userInputs.breadth = +inputs[4];
  }
  return userInputs;
}

module.exports ={
  repeatSpaces,
  makeCycler,
  repeatCharacter,
  generateDiamondUpperPart,
  generateLowerPart,
  line,
  edgeLineOfDiamond,
  middlePart,
  joinLines,
  generateHollowDiamond,
  generateAngledDiamond,
  generateFilledDiamond,
  createLeftAligned,
  createRightAligned,
  createReverseRightAligned,
  createReverseLeftAligned,
  emptyLine,
  createEmptyRectangle,
  createAlternateRectangle,
  createFilledRectangle,
  createLeftAlignedTriangle,
  createRightAlignedTriangle,
  fillNewArray,
  extractInputs
};
