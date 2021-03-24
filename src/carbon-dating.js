const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let regex = /[0-9]/;
  if(typeof(sampleActivity) != 'string') return false;
if ( sampleActivity.search(regex))  return false;

  sampleActivity = Number(sampleActivity);

  let year = 0;

  year = ( (Math.log(MODERN_ACTIVITY/sampleActivity)) / ( ( 0.693 / HALF_LIFE_PERIOD )))
  year = Math.ceil(year);
 return year;
};
