const createTriangle = require('./src/patternsLib.js').createTriangle;

const main = function(){
  type = process.argv[2];
  height = process.argv[3];
  console.log(createTriangle(type,height));
}

main()