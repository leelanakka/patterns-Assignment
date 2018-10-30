const extractInputs = require('./src/patternsUtil.js').extractInputs;
const createDiamond = require('./src/patternsLib.js').createDiamond;

const main = function(type,height){
  console.log(createDiamond(type,height));
}

let inputs = extractInputs(process.argv);
main(inputs.type,inputs.height)
