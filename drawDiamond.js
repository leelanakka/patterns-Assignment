const createDiamond = require('./src/patternsLib.js').createDiamond;
const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];
  console.log(createDiamond(type,height));
}

main()
