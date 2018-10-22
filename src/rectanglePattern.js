const createAlternateRectangle = function(length,breadth){
  let firstRow = repeatCharacter(length,"*");
  let alternateLines = repeatCharacter(length,"-");
  let rectangle="";
  let delimitor="";
  for(let index = 1; index <= breadth; index++){
    if(index%2 == 0){
      rectangle+=delimitor+alternateLines;
    }
    else{
      rectangle += delimitor+firstRow;
    }
    delimitor="\n";
  }
  return rectangle;
}

const repeatSpaces = function(length){
  return repeatCharacter(length," ");
}

const repeatCharacter = function(numberOfTimes,character) {
  let characterLine = "";
  for (let loopIndex = 0; loopIndex < numberOfTimes; loopIndex++ ) {
    characterLine += character;
  }
  return characterLine;
}

const createEmptyRectangle = function(length,breadth){
  let firstColumn = repeatCharacter(length,"*");
  let delimitor = "";
  let space = "";
  let rectangle = "";
  for(let index=0; index<breadth; index++){
    let  row=firstColumn;
    if(index<breadth-1 && index>0){
      space += repeatSpaces(length-2);
      row="*"+space+"*";
      space="";
    }
    rectangle += delimitor+row;
    delimitor="\n";
  }
  return rectangle;
}

const createFilledRectangle = function(length,breadth){
  let rectangle = "";
  let delimitor = "";
  let column = repeatCharacter(length,"*")
  for(let index = 0; index < breadth; index++){
    rectangle += delimitor+column;
    delimitor = "\n";
  }
  return rectangle;
}

const main = function(){
  let type = process.argv[2];
  let length = process.argv[3];
  let breadth = process.argv[4];
  let rectangle = "";
  let delimitor = "";
  if(type == "alternating"){
    rectangle = createAlternateRectangle(length,breadth);
  }

  if(type == "empty"){
    rectangle = createEmptyRectangle(length,breadth);
  }

  if(type == "filled"){
    rectangle = createFilledRectangle(length,breadth);
  }
  console.log(rectangle);
}

main();
