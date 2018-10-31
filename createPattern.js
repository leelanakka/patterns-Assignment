const extractInputs = require('./src/patternsUtil.js').extractInputs;
const createDiamond = require('./src/patternsLib.js').createDiamond;
const createTriangle = require('./src/patternsLib.js').createTriangle;
const createRectangle = require('./src/patternsLib.js').createRectangle;

const main = function(type,height){
  console.log(createDiamond(type,height));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height)

const main = function(type,height,breadth){
  console.log(createRectangle(type,height,breadth));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height,inputs.breadth)

const main = function(type,height){
  console.log(createTriangle(type,height));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height);
