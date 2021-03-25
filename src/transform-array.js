const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if( typeof(arr) != 'object'){
    throw Error;
  }
  let arr2 = [];    
  
  let temp1 = '--double-next';
  let temp2 = '--double-prev';
  let temp3 = '--diskard-next';
  let temp4 = '--diskard-prev';
  
  for( let i = 0; i < arr.length; i++){
    if( arr[i] != temp1 && arr[i] != temp2 && arr[i] != temp3 && arr[i] != temp4){
      arr2.push(arr[i]);
    }
    else if( arr[i] == temp1){
      if( arr[i+1] != undefined ){
        arr2.push(arr[i+1]);
      }
    }
    else if( arr[i] == temp2){
      if( arr[i-1] != undefined ){
        arr2.push(arr[i-1]);
        arr2.push(arr[i-1]);
      }
    }
    else if( arr[i] == temp3){
    i++;
    }
    else if( arr[i] == temp4){
      arr2.pop();
    }
  }
  
  return arr2;
};
