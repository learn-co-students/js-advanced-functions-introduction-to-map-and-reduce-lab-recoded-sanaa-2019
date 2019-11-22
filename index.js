// Your code here
const arr=[1, 2, 0, -9];
function mapToNegativize(arr){
    let array=[];
    for(let i=0;i<arr.length;i++){
        array[i]=((arr[i])*(-1));
    }
    return array;
}
console.log(mapToNegativize(arr));

function mapToNoChange(arr){
    let array=[];
    for(let i=0;i<arr.length;i++){
        array.push(arr[i]);
    }
    return array;
}
console.log(mapToNoChange(arr));

function mapToDouble(arr){
    let array=[];
    for(let i=0;i<arr.length;i++){
        array.push(arr[i]*2);
    }
    return array;
}
console.log(mapToDouble(arr));

function mapToSquare(arr){
    let array=[];
    for(let i=0;i<arr.length;i++){
        array.push(arr[i]**2);
    }
    return array;
}
console.log(mapToSquare(arr));

function reduceToTotal(arr,start){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    if(start==undefined){
        return total;
    }
    else{
        return total+start;
    }
}
console.log(reduceToTotal(arr,50));

function reduceToAllTrue(arr){
    for(let i=0;i<arr.length;i++){
        if(!arr[i]){
            return false;
        }
    }
    return true;
}
console.log(reduceToAllTrue(arr));

function reduceToAnyTrue(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            return true;
        }
    }
    return false;
}
console.log(reduceToAnyTrue(arr));