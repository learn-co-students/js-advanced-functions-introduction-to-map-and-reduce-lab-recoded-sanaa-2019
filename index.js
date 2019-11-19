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



function reduceToTotal(sourceArray, startingPoint=0){

   for(const element of sourceArray){
       startingPoint+=element
   }
   return startingPoint
}

function reduceToAllTrue(sourceArray){
    let startingPoint=true

    for (const element of sourceArray){
        startingPoint=(startingPoint&&Boolean(element))
    }
    return startingPoint
}

function reduceToAnyTrue(sourceArray){
    let startingPoint=false

    for (const element of sourceArray){
        startingPoint=(startingPoint||Boolean(element))
    }
    
    return startingPoint
}
