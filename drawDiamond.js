const createDiamond = require('./src/patternsLib.js').createDiamond;
const main = function(){
  type = process.argv[2];
  height = process.argv[3];
  console.log(createDiamond(type,height));
}

main()
