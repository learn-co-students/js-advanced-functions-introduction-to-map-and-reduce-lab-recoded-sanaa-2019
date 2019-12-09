function mapToNegativize(arr){
    let newArr= [];
    arr.forEach(element => {
       newArr.push(element*-1);
    });
    return newArr;
}
function mapToNoChange(arr){
    let newArr = [];
    arr.forEach(element=>{
        newArr.push(element);
    });
    return newArr;

}
function mapToDouble (arr){
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element*2);
    });
    return newArr;
}
function mapToSquare (arr){
    let newArr = [];
    arr.forEach(element=>{
        newArr.push(element**2);
    });
    return newArr;
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