const mapToNegativize  = function(arr){
        let array = [];
        arr.forEach(element => {
            array.push(element*-1);
        });
        return array;
    }
const mapToNoChange = function (arr){
       let array = [];
        arr.forEach(element => {
            array.push(element);
        });
        return array;
    
    }
const mapToDouble = function (arr){
        let array = [];
        arr.forEach(element => {
            array.push(element*2);
        });
        return array;
    }
const mapToSquare = function(arr){
        let array = [];
        arr.forEach(element => {
            array.push(element**2);
        });
        return array;
    }
    
    
const reduceToTotal = function(arr,index= 0 ){
        let res = index ;
        for ( let i = 0 ; i < arr.length; i++) {
           res += arr[i];
            
        }
        return res ;
    }
const reduceToAllTrue = function(arr){
        let res ;
        arr.forEach(element => {
            if (element ==false) {
                
                res=false ; 
            }
            else{
                res = true;
            }
        });
        return res ; 
    }
const reduceToAnyTrue = function(arr){
        let res ;
        arr.forEach(element => {
            if (element == true) {
                res = true;
        
            }
            else{
                res = false;
            }
        });
        return res ; 
    }