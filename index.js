// Your code here
const mapToNegativize = function(sourceArray){
  let arr = sourceArray.map(e=>-e);
  return arr;
}
const mapToNoChange = function(sourceArray){
   let arr = sourceArray.map(e=>e);
  return arr;
}
const mapToDouble = function(sourceArray){
   let arr = sourceArray.map(e=>2*e);
  return arr;
}
const mapToSquare = function(sourceArray){
   let arr = sourceArray.map(e=>e*e);
  return arr;
}

const reduceToTotal= function(sourceArray, startingPoint=0){
  //return sourceArray.reduce(function(total , e){return e+total},startingPoint=0);
  let result = startingPoint;
  for(const i of sourceArray){
    result += i;
  }
  return result;
}
const reduceToAllTrue= function(sourceArray){
  let result= true;
  sourceArray.forEach(e=>{
    if(e===false){
      result = false;
    }
  });
  return result;
}
const reduceToAnyTrue= function(sourceArray){
  let result= false;
  sourceArray.forEach(e=>{
    if(e===true){
      result = true;
    }
  });
  return result;
}