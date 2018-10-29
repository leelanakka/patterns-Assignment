const assert = require ('assert');
const {createRectangle,createTriangle,createDiamond} = require ('../src/patternsLib.js');

let filled_10_7 = '**********\n**********\n**********\n**********\n**********\n**********\n**********';
assert.deepEqual(createRectangle("filled",10,7),filled_10_7);
let filled_1_2 = '*\n*';
assert.deepEqual(createRectangle("filled",1,2),filled_1_2);
let filled_2_2 = '**\n**';
assert.deepEqual(createRectangle("filled",2,2),filled_2_2);
let empty_10_7 = '**********\n*        *\n*        *\n*        *\n*        *\n*        *\n**********';
assert.deepEqual(createRectangle("empty",10,7),empty_10_7);
let empty_1_2 = '*\n*'
assert.deepEqual(createRectangle("empty",1,2),empty_1_2);
let empty_2_2 = '**\n**'
assert.deepEqual(createRectangle("empty",2,2),empty_2_2);
let alternating_10_7 = '**********\n----------\n**********\n----------\n**********\n----------\n**********';
assert.deepEqual(createRectangle("alternating",10,7),alternating_10_7);
let alternating_1_2 = '*\n-';
assert.deepEqual(createRectangle("alternating",1,2),alternating_1_2);
let alternating_2_2 = '**\n--';
assert.deepEqual(createRectangle("alternating",2,2),alternating_2_2);

let left_2 = '* \n**';
assert.deepEqual(createTriangle("left",2),left_2);
let left_3 = '*  \n** \n***';
assert.deepEqual(createTriangle("left",3),left_3);
let right_2 = ' *\n**';
assert.deepEqual(createTriangle("right",2),right_2);
let right_3 = '  *\n **\n***';
assert.deepEqual(createTriangle("right",3),right_3);

let filled_2 = ' * \n***\n * ';
assert.deepEqual(createDiamond("filled",2),filled_2);
let filled_3 = ' * \n***\n * ';
assert.deepEqual(createDiamond("filled",3),filled_3);
let filled_4 = '  *  \n *** \n*****\n *** \n  *  ';
assert.deepEqual(createDiamond("filled",4),filled_4);
let hollow_2 = ' * \n* *\n * ';
assert.deepEqual(createDiamond("hollow",2),hollow_2);
let hollow_3 = ' * \n* *\n * ';
assert.deepEqual(createDiamond("hollow",3),hollow_3);
let hollow_4 = '  *  \n * * \n*   *\n * * \n  *  ';
assert.deepEqual(createDiamond("hollow",4),hollow_4);
let angled_2 = ' * \n* *\n * ';
assert.deepEqual(createDiamond("angled",2),angled_2);
let angled_3 = ' * \n* *\n * ';
assert.deepEqual(createDiamond("angled",3),angled_3);
let angled_4 = '  *  \n / \\ \n*   *\n \\ / \n  *  ';
assert.deepEqual(createDiamond("angled",4),angled_4);

console.log('all tests are passed');
