const createRectangle = require('./patternsLib.js').createRectangle;
const main = function(){
  let type = process.argv[2];
  let length = process.argv[3];
  let breadth = process.argv[4];
  console.log( createRectangle(type,length,breadth));
}
main();
