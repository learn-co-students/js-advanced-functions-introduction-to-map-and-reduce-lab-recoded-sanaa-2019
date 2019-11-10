// Your code here
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i]) // Unique work
  }
  return r
}
 
function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i]) // Unique work
  }
  return r
}
 
function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i]) // Unique work
  }
  return r
}
 
function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i]) // Unique work
  }
  return r
}
function reduceToTotal(sourceArray, startingPoint=0){
  for(let i=0;i<sourceArray.length;i++){
    startingPoint = startingPoint +sourceArray[i] ;
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray){
 for(let i=0;i<sourceArray.length;i++){
    if(sourceArray[i] ===false){
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray){
 for(let i=0;i<sourceArray.length;i++) {
    if(sourceArray[i] ===true){
      return true;
    }
  }
  return false;
}

