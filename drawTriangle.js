const createTriangle = require('./src/patternsLib.js').createTriangle;
const extractInputs = require('./src/patternsUtil.js').extractInputs;

const main = function(type,height){
  console.log(createTriangle(type,height));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height);
