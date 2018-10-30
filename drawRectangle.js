const createRectangle = require('./src/patternsLib.js').createRectangle;
const extractInputs = require('./src/patternsUtil.js').extractInputs;

const main = function(type,height,breadth){
  console.log(createRectangle(type,height,breadth));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height,inputs.breadth)
