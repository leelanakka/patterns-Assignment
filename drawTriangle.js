const createTriangle = require('./src/patternsLib.js').createTriangle;

const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];
  console.log(createTriangle(type,height));
}

main()
