const CustomError = require("../extensions/custom-error");

 let z = 0;
  let citpher = '';
  let str = '';
  

class VigenereCipheringMachine{
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();

      for( let i = 0; i < message.length; i++){
        if (z == key.length){
          z = 0;
        }
      
        if( (message[i].charCodeAt(0) >=0 && message[i].charCodeAt(0) <=47) || (message[i].charCodeAt(0) >=58 && message[i].charCodeAt(0) <=64) || (message[i].charCodeAt(0) >= 91 && message[i].charCodeAt(0) <= 96) || (message[i].charCodeAt(0) >=123 && message[i].charCodeAt(0) <= 191)  ){
          citpher = citpher.concat(message[i]);
          continue;
        }
        str = String.fromCharCode(((message[i].charCodeAt(0) + key[z].charCodeAt(0) - 194) % 26) + 97);
        citpher = citpher.concat(str)
        z++;

      if(this.type === false) {
        return citpher.split('').reverse().join('');
      }
      return citpher;
    }
  }
  decrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
   
      for( let i = 0; i < message.length; i++){
        if (z == key.length){
          z = 0;
        }
      
        if( (message[i].charCodeAt(0) >=0 && message[i].charCodeAt(0) <=47) || (message[i].charCodeAt(0) >=58 && message[i].charCodeAt(0) <=64) || (message[i].charCodeAt(0) >= 91 && message[i].charCodeAt(0) <= 96) || (message[i].charCodeAt(0) >=123 && message[i].charCodeAt(0) <= 191)  ){
          citpher = citpher.concat(message[i]);
          continue;
        }
        if(message[i].charCodeAt(0) - key[z].charCodeAt(0) < 0){
        str = String.fromCharCode(((message[i].charCodeAt(0) +26) - key[z].charCodeAt(0))+97);
        citpher = citpher.concat(str)
        }else{
        str = String.fromCharCode((message[i].charCodeAt(0) - key[z].charCodeAt(0))+97);
        citpher = citpher.concat(str)  
        }
        z++;
   
      if(this.type === false) {
        return citpher.split('').reverse().join('');
      }
      return citpher;
    }
  }
}

module.exports = VigenereCipheringMachine;
