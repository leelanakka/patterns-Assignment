const assert=require("assert");
const lib = require('../src/closureLib.js');
const compose = lib.compose;

const lengthOf=function(collection) {return collection.length};
const decrement=function(number){return number-1};
const isNotZero=function(x) {return x!=0};
const removeZeroes=function(array) {return array.filter(isNotZero)};
const concatWith=function(arrayToConcatWith,anotherArray) {
  return arrayToConcatWith.concat(anotherArray);
};

const testComposeTwoFunctionsThatTakesOneArg = function() {
  let lastPosition=compose(decrement,lengthOf);
  assert.equal(0,lastPosition([1]));
  assert.equal(1,lastPosition([1,2]));
  assert.equal(2,lastPosition([1,2,3]));
  assert.equal(4,lastPosition("abcde"));
  assert.equal(4,lastPosition("leela"));
};

const testComposeTwoFunctionsThatTakesTwoArgs = function() {
  let concatNonZeroValues=compose(removeZeroes,concatWith);
  assert.deepEqual([1],concatNonZeroValues([1],[0]));
  assert.deepEqual([1],concatNonZeroValues([0],[1]));
  assert.deepEqual([1,1],concatNonZeroValues([1,0],[1,0]));
};


let runTests = function() {
  if(!compose) {
    console.log("Function 'compose' in not implemented yet. Not running tests.");
    return;
  }

  testComposeTwoFunctionsThatTakesOneArg();
  console.log("testComposeTwoFunctionsThatTakesOneArg passed");

  testComposeTwoFunctionsThatTakesTwoArgs();
  console.log("testComposeTwoFunctionsThatTakesTwoArgs passed");
};

runTests();

const curry = lib.curry;

const sum=function(a,b) { return a+b };
const isBetween=function(number,lowerLimit,upperLimit) {
  return lowerLimit<=number && number<=upperLimit;
};

const paintCar=function(color,make,model) {
  return {color,make,model};
};

const testCreatingPartialFunctionWithOneArgument = function() {
  let addTwo=curry(sum,2);
  assert.equal(3,addTwo(1));
  assert.equal(7,addTwo(5));
  assert.equal(-1,addTwo(-3));
};

const testCreatingPartialFunctionWithArrayAsAnArgument = function() {
  let concatWith123=curry(concatWith,[1,2,3]);
  assert.deepEqual([1,2,3,4,5,6],concatWith123([4,5,6]));
  assert.deepEqual([1,2,3],concatWith123([]));
};

const testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs = function() {
  let isTenBetween=curry(isBetween,10);
  assert.equal(true,isTenBetween(5,15));
  assert.equal(false,isTenBetween(12,15));

  let paintYellow=curry(paintCar,"yellow");
  assert.deepEqual({color:"yellow", make:"maruti", model:"swift" },paintYellow("maruti","swift"));
  assert.deepEqual({color:"yellow", make:"ferrari", model:"GTC4" },paintYellow("ferrari","GTC4"));
};

runTests = function() {
  if(!curry) {
    console.log("Function 'curry' in not implemented yet. Not running tests.");
    return;
  }

  testCreatingPartialFunctionWithOneArgument();
  console.log("testCreatingPartialFunctionWithOneArgument passed");

  testCreatingPartialFunctionWithArrayAsAnArgument();
  console.log("testCreatingPartialFunctionWithArrayAsAnArgument passed");

  testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs();
  console.log("testCreatingPartialFunctionThatWillLaterBeSuppliedWithTwoArgs passed");
};

runTests();

const makeConstant = lib.makeConstant;

const testMakeConstantWithNoArgs = function() {
  let constantlyReturnTwo = makeConstant(2);
  let constantlyReturnString = makeConstant('hello');
  let constantlyReturnArray = makeConstant([1, 2, 3]);
  let constantlyReturnObject = makeConstant({a: 1, b: 2});
  assert.equal(2, constantlyReturnTwo());
  assert.equal('hello', constantlyReturnString());
  assert.deepEqual([1, 2, 3], constantlyReturnArray());
  assert.deepEqual({a: 1, b: 2}, constantlyReturnObject());
};

const testMakeConstantWithUselessArg = function() {
  let constantlyReturnTwo = makeConstant(2);
  let constantlyReturnString = makeConstant('hello');
  let constantlyReturnArray = makeConstant([1, 2, 3]);
  let constantlyReturnObject = makeConstant({a: 1, b: 2});
  assert.equal(2, constantlyReturnTwo(1));
  assert.equal('hello', constantlyReturnString(1));
  assert.deepEqual([1, 2, 3], constantlyReturnArray(1));
  assert.deepEqual({a: 1, b: 2}, constantlyReturnObject(1));
};

runTests = function() {
  if(!makeConstant) {
    console.log("Function 'makeConstant' in not implemented yet. Not running tests.");
    return;
  }

  testMakeConstantWithNoArgs();
  console.log("testMakeConstantWithNoArgs passed");

  testMakeConstantWithUselessArg();
  console.log("testMakeConstantWithUselessArg passed");
};

runTests();

const makeCounterFromN = lib.makeCounterFromN;

const testCounterBeginsCountingFromGivenNumber = function() {
  let countApples = makeCounterFromN(2);
  assert.equal(2, countApples());
};

const testCounterIncrementsCountForEveryCall = function() {
  let countMangos = makeCounterFromN(1);
  assert.equal(1, countMangos());
  assert.equal(2, countMangos());
  assert.equal(3, countMangos());
};

const testMultipleCounters = function() {
  let countOranges = makeCounterFromN(2);
  let countGrapes = makeCounterFromN(3);
  assert.equal(2, countOranges());
  assert.equal(3, countOranges());
  assert.equal(3, countGrapes());
  assert.equal(4, countGrapes());
  assert.equal(4, countOranges());
};

const testCounterWithNegativeNumber = function() {
  let countBananas = makeCounterFromN(-1);
  assert.equal(-1, countBananas());
  assert.equal(0, countBananas());
  assert.equal(1, countBananas());
};

runTests = function() {
  if(!makeCounterFromN) {
    console.log("Function 'makeCounterFromN' in not implemented yet. Not running tests.");
    return;
  }

  testCounterBeginsCountingFromGivenNumber();
  console.log("testCounterBeginsCountingFromGivenNumber passed");

  testCounterIncrementsCountForEveryCall();
  console.log("testCounterIncrementsCountForEveryCall passed");

  testMultipleCounters();
  console.log("testMultipleCounters passed");

  testCounterWithNegativeNumber();
  console.log("testCounterWithNegativeNumber passed");
};

runTests();

const makeCounterFromZero = lib.makeCounterFromZero;

const testCounterBeginsCountingFromZero = function() {
  let countCats = makeCounterFromZero();
  assert.equal(0, countCats());
};

const testCounterIncrementsCountForEveryCall_1 = function() {
  let countDogs = makeCounterFromZero();
  assert.equal(0, countDogs());
  assert.equal(1, countDogs());
  assert.equal(2, countDogs());
};

const testMultipleCounters_1 = function() {
  let countLions = makeCounterFromZero();
  let countTigers = makeCounterFromZero();
  assert.equal(0, countLions());
  assert.equal(1, countLions());
  assert.equal(0, countTigers());
  assert.equal(1, countTigers());
  assert.equal(2, countLions());
};

runTests = function() {
  if(!makeCounterFromZero) {
    console.log("Function 'makeCounterFromZero' in not implemented yet. Not running tests.");
    return;
  }

  testCounterBeginsCountingFromZero();
  console.log("testCounterBeginsCountingFromZero passed");

  testCounterIncrementsCountForEveryCall_1();
  console.log("testCounterIncrementsCountForEveryCall passed");

  testMultipleCounters_1();
  console.log("testMultipleCounters passed");
};

runTests()

const makeCycler = lib.makeCycler;

const testCyclerThatCanCycleOneElement = function() {
  let cycleOne = makeCycler([1]);
  assert.equal(1,cycleOne());
  assert.equal(1,cycleOne());
  assert.equal(1,cycleOne());
};

const testCycleTwoElements = function() {
  let cycleColours=makeCycler(["black","white"]);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
};

const testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater = function() {
  let colours = ["black","white","red"];
  let cycleColours=makeCycler(colours);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  assert.equal("red",cycleColours());
  colours.push("yellow");
  assert.equal("black",cycleColours());
};

const testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater = function() {
  let colours = ["black","white"];
  let cycleColours=makeCycler(colours);
  assert.equal("black",cycleColours());
  assert.equal("white",cycleColours());
  colours[0] = "yellow";
  assert.equal("black",cycleColours());
};

runTests = function() {
  if(!makeCycler) {
    console.log("Function 'makeCycler' in not implemented yet. Not running tests.");
    return;
  }

  testCyclerThatCanCycleOneElement();
  console.log("testCyclerThatCanCycleOneElement passed");

  testCycleTwoElements();
  console.log("testCycleTwoElements passed");

  testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater();
  console.log("testCycleOnlyElementsGivenInitiallyEvenIfAnElementAddedLater passed");

  testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater();
  console.log("testCycleOnlyElementsGivenInitiallyEvenIfModifiedLater passed");
};

runTests();

const makeDeltaTracker = lib.makeDeltaTracker;

const testTrackerWithDefaultDeltaZero = function() {
  let trackDelta = makeDeltaTracker(2);
  assert.deepEqual({old: 2, delta: 0, new: 2}, trackDelta());
};

const testTrackerWithSameDeltaValue = function() {
  let trackDelta = makeDeltaTracker(3);
  let result = trackDelta(1);
  assert.deepEqual({old: 3, delta: 1, new: 4}, result);
  trackDelta(3)
  assert.deepEqual({old: 3, delta: 1, new: 4}, result);
}

const testTrackerWithPositiveDeltaValue = function() {
  let trackDelta = makeDeltaTracker(3);
  assert.deepEqual({old: 3, delta: 1, new: 4}, trackDelta(1));
  assert.deepEqual({old: 4, delta: 3, new: 7}, trackDelta(3));
};

const testTrackerWithNegativeDeltaValue = function() {
  let trackDelta = makeDeltaTracker(1);
  assert.deepEqual({old: 1, delta: -1, new: 0}, trackDelta(-1));
  assert.deepEqual({old: 0, delta: -2, new: -2}, trackDelta(-2));
};
runTests = function() {
  if(!makeDeltaTracker) {
    console.log("Function 'makeDeltaTracker' in not implemented yet. Not running tests.");
    return;
  }
  testTrackerWithSameDeltaValue();
  console.log("testTracker passed")

  testTrackerWithDefaultDeltaZero();
  console.log("testTrackerWithDefaultDeltaZero passed");

  testTrackerWithPositiveDeltaValue();
  console.log("testTrackerWithPositiveDeltaValue passed");

  testTrackerWithNegativeDeltaValue();
  console.log("testTrackerWithNegativeDeltaValue passed");
};

runTests();

const makeFiboGenerator = lib.makeFiboGenerator;

const testFiboGeneratorWithDefaultArgs = function() {
  let getNextFiboNumber = makeFiboGenerator();
  assert.equal(0,getNextFiboNumber());
  assert.equal(1,getNextFiboNumber());
  assert.equal(1,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(3,getNextFiboNumber());
  assert.equal(5,getNextFiboNumber());
};

const testFiboGeneratorWithASingleArg = function() {
  let getNextFiboNumber = makeFiboGenerator(2);
  assert.equal(0,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(2,getNextFiboNumber());
  assert.equal(4,getNextFiboNumber());
  assert.equal(6,getNextFiboNumber());
  assert.equal(10,getNextFiboNumber());
};

const testFiboGeneratorWithTwoArgs = function() {
  let getNextFiboNumber = makeFiboGenerator(1,3);
  assert.equal(1,getNextFiboNumber());
  assert.equal(3,getNextFiboNumber());
  assert.equal(4,getNextFiboNumber());
  assert.equal(7,getNextFiboNumber());
  assert.equal(11,getNextFiboNumber());
};

const testMultipleFiboGenerators = function() {
  let getNextFiboNum_1 = makeFiboGenerator(1,3);
  let getNextFiboNum_2 = makeFiboGenerator(2);
  assert.equal(1,getNextFiboNum_1());
  assert.equal(3,getNextFiboNum_1());
  assert.equal(4,getNextFiboNum_1());
  assert.equal(7,getNextFiboNum_1());
  assert.equal(11,getNextFiboNum_1());
  assert.equal(0,getNextFiboNum_2());
  assert.equal(2,getNextFiboNum_2());
  assert.equal(2,getNextFiboNum_2());
  assert.equal(4,getNextFiboNum_2());
  assert.equal(6,getNextFiboNum_2());
  assert.equal(10,getNextFiboNum_2());
};

runTests = function() {
  if(!makeFiboGenerator) {
    console.log("Function 'fiboGenerator' in not implemented yet. Not running tests.");
    return;
  }

  testFiboGeneratorWithDefaultArgs();
  console.log("testFiboGeneratorWithDefaultArgs passed");

  testFiboGeneratorWithASingleArg();
  console.log("testFiboGeneratorWithASingleArg passed");

  testFiboGeneratorWithTwoArgs();
  console.log("testFiboGeneratorWithTwoArgs passed");

  testMultipleFiboGenerators();
  console.log("testMultipleFiboGenerators passed");
};

runTests();
