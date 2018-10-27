const createRectangle = require('./src/patternsLib.js').createRectangle;
const main = function(){
  type = process.argv[2];
  length = process.argv[3];
  breadth = process.argv[4];
  console.log(createRectangle(type,length,breadth));
}

main()
