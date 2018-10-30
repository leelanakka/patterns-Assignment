const {repeatSpaces,
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
  createRightAlignedTriangle } = require('./patternsUtil.js')

const createRectangle = function(type,length,breadth){
  let rectangle = {filled: createFilledRectangle,
    empty:createEmptyRectangle,
    alternating:createAlternateRectangle};
  return rectangle[type](length,breadth).join("\n");
}

const createTriangle = function(type,baseWidth){
  let triangle = {right : createRightAlignedTriangle, 
    left : createLeftAlignedTriangle,
    rightReverse : createReverseRightAligned,
    leftReverse : createReverseLeftAligned };
  return triangle[type](baseWidth);
}

const createDiamond = function(type,height){
  if(height%2 == 0){
    height ++;
  }
  let diamond = {filled : generateFilledDiamond,
    hollow : generateHollowDiamond,
    angled : generateAngledDiamond};
  return diamond[type](height);
}

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;
