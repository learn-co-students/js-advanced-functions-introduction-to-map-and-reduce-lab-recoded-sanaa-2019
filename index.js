// Your code here
function mapToNegativize(arr){
  let newArr = [];
  for (const item of arr) {
    newArr.push(item * -1);
  }
  return newArr;
}

function mapToNoChange(arr){
  let newArr = arr;
  return newArr;
}

function mapToDouble(arr){
  let newArr = [];
  for (const item of arr) {
    newArr.push(item * 2);
  }
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  for (const item of arr) {
    newArr.push(item * item);
  }
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint=0){
  for (const item of sourceArray) {
    startingPoint = startingPoint + item;
  }
  return startingPoint;
}

function reduceToAllTrue(sourceArray){
  for (const item of sourceArray) {
    if(item == false){
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray){
  for (const item of sourceArray) {
    if(item == true){
      return true;
    }
  }
  return false;
}
