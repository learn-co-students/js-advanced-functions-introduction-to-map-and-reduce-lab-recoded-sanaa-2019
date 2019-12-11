// Your code here
function mapToNegativize(Array){
let arr = Array.map(function (Array) {
  return Array *-1
});
return arr
}
function mapToNoChange(Array){
  let arr = Array.map(function (Array) {
  return Array
});
return arr
}
function mapToDouble(Array){
  let arr = Array.map(function (Array) {
  return Array*2
});
return arr
}
function mapToSquare(Array){
    let arr = Array.map(function (Array) {
  return Array*Array
});
return arr
}
function reduceToTotal(Array,accumulator=0){
  let arr=Array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, accumulator);
return arr;
}
function reduceToAllTrue(Array){
   let arr=Array.reduce(function (accumulator, currentValue) {
     if(currentValue==false){
  return accumulator + 1;
     }
},0);
if(typeof(arr)=='undefined'){return true}


}