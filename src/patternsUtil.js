const makeCycler = require('./lib.js').makeCycler;

const repeatSpaces = function(length){
  return repeatCharacter(length," ");
}

const fillNewArray = function(length,element) {
  return new Array(length).fill(element);
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = fillNewArray(numberOfTimes,character).join("");
  return characterLine;
}

const generateDiamondUpperPart = function(height,firstCharacter,lastCharacter,character) {
  let upperPart = "";
  let delimiter = "\n";
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
  let delimiter = "\n";
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

const line = function(height) {
  return repeatSpaces(Math.ceil(height/2))+"*"+repeatSpaces(Math.ceil(height/2));
}

const edgeLineOfDiamond = function(height) {
  return line(height-1);
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

const createLeftAligned = function(baseWidth){
  let triangle=[];
  for(let index=0; index<baseWidth; index++){
    rows = repeatCharacter(index+1,"*")+repeatSpaces(baseWidth-(index+1));
    triangle.push(rows);
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

const createRightAlignedTriangle = function(baseWidth){
  return createRightAligned(baseWidth).join("\n");
}

const createLeftAlignedTriangle = function(baseWidth){
  return createLeftAligned(baseWidth).join("\n");
}

const createReverseRightAligned = function(baseWidth){
  return createRightAligned(baseWidth).reverse().join("\n");
}

const createReverseLeftAligned = function(baseWidth){
  return createLeftAligned(baseWidth).reverse().join("\n");
}

const emptyLine = function(breadth){
  let spaces = repeatSpaces(breadth-2); 
  return "*"+spaces+"*";
}

const createEmptyRectangle = function(length,breadth){
  let rectangle = [];;
  let row = repeatCharacter(length,"*");
  rectangle = [row];
  if(breadth>2){
    let emptyRow = emptyLine(length);
    rectangle = rectangle.concat(fillNewArray(breadth-2,emptyRow));
  }
  if(breadth>1){
    rectangle.push(row);
  }
  return rectangle;
}

const createAlternateRectangle = function(length,breadth){
  let firstRow = repeatCharacter(length,"*");
  let alternateLines = repeatCharacter(length,"-");
  let cycleRows = makeCycler([firstRow,alternateLines]);
  let randomArray = fillNewArray(breadth,9);
  let rectangle = randomArray.map(cycleRows);
  return rectangle;
}

const createFilledRectangle = function(length,breadth){
  let rectangle = "";
  let column = repeatCharacter(length,"*");
  rectangle = fillNewArray(breadth,column);
  return rectangle;
}

module.exports ={repeatSpaces,
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
  fillNewArray};
