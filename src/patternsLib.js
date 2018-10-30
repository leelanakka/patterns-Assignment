const {
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
  createRightAlignedTriangle 
} = require('./patternsUtil.js')

const createRectangle = function(type,length,breadth){
  let generateRectangle = {filled: createFilledRectangle,
    empty:createEmptyRectangle,
    alternating:createAlternateRectangle};
  return generateRectangle[type](length,breadth).join("\n");
}

const createTriangle = function(type,baseWidth){
  let generateTriangle = {right : createRightAlignedTriangle, 
    left : createLeftAlignedTriangle,
    rightReverse : createReverseRightAligned,
    leftReverse : createReverseLeftAligned };
  return generateTriangle[type](baseWidth);
}

const createDiamond = function(type,height){
  if(height%2 == 0){
    height ++;
  }
  let generateDiamond = {filled : generateFilledDiamond,
    hollow : generateHollowDiamond,
    angled : generateAngledDiamond};
  return generateDiamond[type](height);
}

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;
