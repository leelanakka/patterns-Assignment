const assert = require('assert');

const {repeatSpaces,
  makeCycler,
  repeatCharacter,
  generateDiamondUpperPart,
  generateLowerPart,
  line,
  edgeLineOfDiamond,
  middlePart,
  joinLines,
  generateHollowDiamond,
  generateAngledDiamond,
  generateFilledDiamond,
  createLeftAligned,
  createRightAligned,
  createReverseRightAligned,
  createReverseLeftAligned,
  emptyLine,
  createEmptyRectangle,
  createAlternateRectangle,
  createFilledRectangle,
  createLeftAlignedTriangle,
  createRightAlignedTriangle} = require('../src/patternsUtil.js');

assert.equal(repeatSpaces(2),"  ");
assert.equal(repeatSpaces(1)," ");

assert.equal(repeatCharacter(1,"*"),"*");  
assert.equal(repeatCharacter(2,"*"),"**");  
assert.equal(repeatCharacter(2,"#"),"##");  

assert.equal(generateDiamondUpperPart(4,"*","*","*"),'  *  \n');
assert.equal(generateDiamondUpperPart(1,"*","*","*"),'*\n');
assert.equal(generateDiamondUpperPart(2,"*","*","*"),' * \n');
assert.equal(generateDiamondUpperPart(6,"*","*","*"),'   *   \n  ***  \n');
assert.equal(generateDiamondUpperPart(6,"*"," ","*"),'   *   \n  **   \n');
assert.equal(generateDiamondUpperPart(7,"*"," ","*"),'   *   \n  **   \n ****  \n');
assert.equal(generateDiamondUpperPart(7,"*","*"," "),'   *   \n  * *  \n *   * \n');
assert.equal(generateDiamondUpperPart(7,"/","\\"," "),'   *   \n  / \\  \n /   \\ \n');

assert.equal(generateLowerPart(4,"*","*","*"),'  *  ');
assert.equal(generateLowerPart(1,"*","*","*"),'*');
assert.equal(generateLowerPart(7,"*","*","*"),' ***** \n  ***  \n   *   ');
assert.equal(generateLowerPart(7,"\\","/"," "),' \\   / \n  \\ /  \n   *   ');
assert.equal(generateLowerPart(7,"*","*"," "),' *   * \n  * *  \n   *   ');

assert.equal(line(3),'  *  ');
assert.equal(line(2),' * ');
assert.equal(line(4),'  *  ');
assert.equal(line(5),'   *   ');

assert.equal(edgeLineOfDiamond(7),'   *   ');
assert.equal(edgeLineOfDiamond(6),'   *   ');
assert.equal(edgeLineOfDiamond(1),'*');

assert.equal(middlePart(5,"*"),'*****');
assert.equal(middlePart(5," "),'*   *');
assert.equal(middlePart(5,"$"),'*$$$*');
assert.equal(middlePart(2,"$"),'**');

assert.deepEqual(joinLines("***","***","***"),"******\n***");
assert.deepEqual(joinLines("*","*","*"),"**\n*");
assert.deepEqual(joinLines("/","*","\\"),"/*\n\\");
assert.deepEqual(joinLines(" ","*","  ")," *\n  ");

assert.deepEqual(generateHollowDiamond(2),' * \n**\n * ');
assert.deepEqual(generateHollowDiamond(5),'  *  \n * * \n*   *\n * * \n  *  ');
assert.deepEqual(generateHollowDiamond(4),'  *  \n*  *\n  *  ');

assert.deepEqual(generateAngledDiamond(2),' * \n**\n * ');
assert.deepEqual(generateAngledDiamond(5),'  *  \n / \\ \n*   *\n \\ / \n  *  ');
assert.deepEqual(generateAngledDiamond(4),'  *  \n*  *\n  *  ');

assert.deepEqual(generateFilledDiamond(3),' * \n***\n * ');
assert.deepEqual(generateFilledDiamond(5),'  *  \n *** \n*****\n *** \n  *  ');
assert.deepEqual(generateFilledDiamond(7),'   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ');

assert.deepEqual(createLeftAligned(1),["*"]);
assert.deepEqual(createLeftAligned(2),["* ","**"]);
assert.deepEqual(createLeftAligned(5),["*    ","**   ","***  ","**** ","*****"]);

assert.deepEqual(createRightAligned(1),["*"]);
assert.deepEqual(createRightAligned(2),[" *","**"]);
assert.deepEqual(createRightAligned(3),["  *"," **","***"]);
assert.deepEqual(createRightAligned(4),["   *","  **"," ***","****"]);

assert.deepEqual(createReverseRightAligned(1),"*");
assert.deepEqual(createReverseRightAligned(2),"**\n *");
assert.deepEqual(createReverseRightAligned(5),"*****\n ****\n  ***\n   **\n    *");

assert.deepEqual(createReverseLeftAligned(1),"*");
assert.deepEqual(createReverseLeftAligned(2),"**\n* ");
assert.deepEqual(createReverseLeftAligned(5),"*****\n**** \n***  \n**   \n*    ");

assert.equal(emptyLine(2),"**")
assert.equal(emptyLine(3),"* *")
assert.equal(emptyLine(5),"*   *")
assert.equal(emptyLine(9),"*       *")

assert.equal(createEmptyRectangle(1,2),"*\n*");
assert.equal(createEmptyRectangle(2,2),"**\n**");
assert.equal(createEmptyRectangle(3,2),"***\n***");
assert.equal(createEmptyRectangle(3,3),"***\n* *\n***");
assert.equal(createEmptyRectangle(3,4),"***\n* *\n* *\n***");
assert.equal(createEmptyRectangle(4,3),"****\n*  *\n****");

assert.equal(createAlternateRectangle(1,1),"*")
assert.equal(createAlternateRectangle(1,2),"*\n-")
assert.equal(createAlternateRectangle(2,2),"**\n--")
assert.equal(createAlternateRectangle(3,3),"***\n---\n***")

assert.equal(createFilledRectangle(1,1),"*");
assert.equal(createFilledRectangle(2,1),"**");
assert.equal(createFilledRectangle(2,2),"**\n**");
assert.equal(createFilledRectangle(10,4),"**********\n**********\n**********\n**********");

assert.equal(createLeftAlignedTriangle(1),"*");
assert.equal(createLeftAlignedTriangle(2),"* \n**");
assert.equal(createLeftAlignedTriangle(5),"*    \n**   \n***  \n**** \n*****");
assert.equal(createLeftAlignedTriangle(4),"*   \n**  \n*** \n****");

assert.equal(createRightAlignedTriangle(1),"*");
assert.equal(createRightAlignedTriangle(2)," *\n**");
assert.equal(createRightAlignedTriangle(5),"    *\n   **\n  ***\n ****\n*****");

console.log("all tests passed");
