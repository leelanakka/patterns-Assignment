const createLeftAligned = function(baseWidth){
  let symbol="*";
  let rows="";
  let triangle="";
  let delimiter="";
  for(let index=0; index<baseWidth; index++){
    rows = rows+symbol;
    triangle = triangle+delimiter+rows;
    delimiter = "\n";
  }
  return triangle;
}

const createRightAligned = function(baseWidth){
  let spaces = "";
  let stars = "";
  let triangle = "";
  let delimiter = "";
  for (let index = 0; index < baseWidth; index++) {
    for (let j = 1; j < baseWidth-index; j++) {
      spaces += " ";
    }
    for (let k = 0; k < index+1; k++) {
      stars += "*";
    }
    triangle += delimiter + spaces + stars;
    stars = "";
    spaces = "";
    delimiter = "\n";
  }
  return triangle;
}

const main = function(type,baseWidth){
  if(type == "right"){
    console.log(createRightAligned(baseWidth));
  }
  if(type == "left"){
    console.log(createLeftAligned(baseWidth));
  }
}

main(process.argv[2],process.argv[3]);
