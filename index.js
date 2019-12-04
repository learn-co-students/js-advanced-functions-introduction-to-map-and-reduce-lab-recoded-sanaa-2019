// Your code here

  function mapToNoChange(sourceArray){
    let myArray = sourceArray;
    return myArray;
  }
  

  function mapToNegativize(sourceArray){
    let myArray = [];
    for (let item of sourceArray) {
      myArray.push(item * -1);
    }
    return myArray;
  }
  
  function mapToSquare(sourceArray) {
    let myArray = [];
    for (let item of sourceArray) {
      myArray.push(item * item);
    }
    return myArray;
  }
  
    function mapToDouble(sourceArray){
    let myArray = [];
    for (let item of sourceArray) {
      myArray.push(item * 2);
    }
    return myArray;
  }
  function reduceToTotal(sourceArray, startingPoint=0){
    for (let item of sourceArray) {
      startingPoint = startingPoint + item;
    }
    return startingPoint;
  }
  
  function reduceToAllTrue(sourceArray){
    for (let item of sourceArray) {
      if(item === false){
        return false;
      }
    }
    return true;
  }
  
  function reduceToAnyTrue(sourceArray){
    for (let item of sourceArray) {
      if(item === true){
        return true;
      }
    }
    return false;
  }