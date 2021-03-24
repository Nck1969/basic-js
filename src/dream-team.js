const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (members == []) return false;
  let temp = 0;
  let str = '';
  for ( let i = 0; i < members.length; i++){
    if ( typeof(members[i]) == 'string'){
      str += members[i].substr(0,1);
      temp++;
    }
  }
    if ( temp == 0 ) return false;
    return str.split('').sort().join('');;
};
