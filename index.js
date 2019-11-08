// Your code here(
// function mapToNegativize(array,func){
//   let arr = [];
  
//   array.forEach(element =>{
//     console.log(element)
//     arr.push(func(element))
//   })

//   return arr
// }


    function mapToNegativize(array) {
      let arr = []
      for (let i = 0; i < array.length; i++ ) {
        arr.push(-1 * array[i]) // Unique work
      }
      return arr
    }
     
    function mapToNoChange(array) {
      let arr = []
      for (let i = 0; i < array.length; i++ ) {
        arr.push(array[i]) // Unique work
      }
      return arr
    }
     
    function mapToDouble(array) {
      let arr = []
      for (let i = 0; i < array.length; i++ ) {
        arr.push(2 * array[i]) // Unique work
      }
      return arr
    }
     
    function mapToSquare(array) {
      let arr = []
      for (let i = 0; i < array.length; i++ ) {
        arr.push(array[i] * array[i]) // Unique work
      }
      return arr
    }
    
    
    function reduceToTotal(array, counter = 0){
      array.forEach(element =>{
        counter = counter + element
      })
      return counter
      
    }
    
    
    // function reduceToAllTrue(array){
    // let bools = true;
    //   array.forEach(element=>{
    //     if(Boolean(element) == true){
    //       bools == true
    //   }else if(Boolean(element)== false){
    //     bools == false
    //       }})
    //   return bools
    // }
    
    
    // function reduceToAnyTrue(array){
    // let bools = true;
    //   array.forEach(element=>{
    //   if(Boolean(element) == true || Boolean(element) == false ){
    //       bools == true;
    //     }
    //   })
    //   return bools
    // }
    
    
    
    function reduceToAllTrue(array){

    let bools= true;
  
      array.forEach(element=>{
        bools = bools && Boolean(element);
      } )
      return bools;
  }


function reduceToAnyTrue(array){

    let bools= false;
  
     
      array.forEach(element=>{
        bools = bools || Boolean(element);
      } )
      return bools;
  }
    
    
 





