// Your code here

//map

sourceArray=[1,2,3,4,5,6,7]

function mapToNegativize(sourceArray){
    let y= [];
    for(const element of sourceArray){
       y.push(element*-1)
    }
    return y;
}

console.log(mapToNegativize(sourceArray))

function mapToNoChange(sourceArray){
    let y= [];
    for(const element of sourceArray){
       y.push(element)
    }
    return y;
}
console.log( mapToNoChange(sourceArray))

function mapToDouble(sourceArray){
    let y= [];
    for(const element of sourceArray){
       y.push(element*2)
    }
    return y;
}

console.log( mapToDouble(sourceArray))

function mapToSquare(sourceArray){
    let y= [];
    for(const element of sourceArray){
       y.push(element**2)
    }
    return y;
}

console.log(mapToSquare(sourceArray))


// reduce


function reduceToTotal(sourceArray, startingPoint=0){

    for( const element of sourceArray){
        startingPoint+= element;
    }
    return startingPoint;
}

console.log(reduceToTotal(sourceArray));

sourceArray = [ 8, true, true, "me"] //all true


function reduceToAllTrue(sourceArray){

    let startingPoint= true;
  
      for( const element of sourceArray){
        //  console.log(startingPoint && Boolean(element));
        startingPoint = startingPoint && Boolean(element);
      } 
      return startingPoint;
  }

 //console.log(reduceToAllTrue(sourceArray));

function reduceToAnyTrue(sourceArray){

    let startingPoint= false;
  
      for( const element of sourceArray){
        //  console.log(startingPoint || Boolean(element));
        startingPoint = startingPoint || Boolean(element);
       
      }
      return startingPoint;
  }
//console.log(reduceToAnyTrue(sourceArray));
