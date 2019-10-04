// Your code here
const mapToNegativize  = function(arr){
    let newArr= [];
    arr.forEach(element => {
       newArr.push(element*-1);
    });
    return newArr;
}
const mapToNoChange = function (arr){
    let newArr = [];
    arr.forEach(element=>{
        newArr.push(element);
    });
    return newArr;

}
const mapToDouble = function (arr){
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element*2);
    });
    return newArr;
}
const mapToSquare = function(arr){
    let newArr = [];
    arr.forEach(element=>{
        newArr.push(element**2);
    });
    return newArr;
}
const reduceToTotal = function(array,start = 0 ){
    let sum = start ;
    for ( let i = 0 ; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum ;
}
const reduceToAllTrue = function(array){
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
const reduceToAnyTrue = function(array){
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