let input = [];
const createRectangle = require('./src/patternsLib.js').createRectangle;

process.argv.forEach(function (val) {
  input.push(val);
})

const main = function(){
  console.log(createRectangle(input[2],+input[3],+input[4]));
}

main()
