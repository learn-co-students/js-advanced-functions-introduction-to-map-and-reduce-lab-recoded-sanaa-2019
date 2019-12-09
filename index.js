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
    r.push(2 * src[i]) 
  }
  return r
}
 
function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i]) 
  }
  return r
}
function reduceToTotal (array,start = 0 ){
    let sum = start ;
    for ( let i = 0 ; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum ;
}
 function reduceToAllTrue (array){
    let t ;
    array.forEach(element => {
        if (element === false) {
            t = false;
            return t ; 
        }
        else{
            t = true;
        }
    });
    return t ; 
}
function reduceToAnyTrue(array){
    let t ;
    array.forEach(element => {
        if (element == true) {
            t = true;
            return t ; 
        }
        else{
            t = false;
        }
    });
    return t ; 
}