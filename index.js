// Your code here


function mapToNegativize(src){
    let array=[]
for(let i=0;i<src.length;i++){
 
    array.push(-1 *src[i])
}
return array
}

function mapToNoChange(src){

    let array=[]
  for(let i=0; i<src.length;i++){
      array.push(src[i])
  }  
  return array
}

function mapToDouble(src){

    let array=[]
    for(let i=0; i<src.length; i++){
        array.push(2*src[i])
    }
    return array
}

function mapToSquare(src){
    let array=[]
    for(let i=0;i<src.length;i++){
        array.push(src[i]*src[i])

    }
    return array
}



function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }