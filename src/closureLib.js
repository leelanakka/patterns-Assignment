const makeConstant = function(input){
  return function(){
    return input;
  }
}

const makeCounterFromN = function(counter){
  return function(){
    return counter++; 
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(oldValue){
  return function(deltaValue){
    if(!deltaValue){
      deltaValue = 0;
    }
    return {old:oldValue,delta:deltaValue, new:oldValue=(oldValue+deltaValue)}; 
  }
}

const makeFiboGenerator = function(firstNumber,secondNumber){
  let fibonacciSeries = [0,1];
  if(firstNumber && !secondNumber){
    fibonacciSeries[1] = firstNumber;
  }
  if(firstNumber && secondNumber){
    fibonacciSeries[0] = firstNumber;
    fibonacciSeries[1] = secondNumber;
  }
  let counter = 0;
  return function(){
    if(counter == 0 || counter == 1){
      return fibonacciSeries[counter++];
    }
    fibonacciSeries[counter] = fibonacciSeries[counter-1]+fibonacciSeries[counter-2];
    return fibonacciSeries[counter++];
  }
}

const returnSameArgument = function(argument){
  return argument;
}

const makeCycler = function(array){
  let index = 0;
  let newArray = array.map(returnSameArgument);
  return function(){
    result = newArray[index%newArray.length];
    index++;
    return result;
  }
}

const curry = function(func,arguement1){
  return function(arguement2,arguement3){
    return func(arguement1,arguement2,arguement3);
  }
}

const compose =function(outerFunction,innerFunction){
  return function(arguement1,arguement2){
    return outerFunction(innerFunction(arguement1,arguement2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
