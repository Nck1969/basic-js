/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  if (members.length === 0) return false;

  members = members.filter(item => typeof (item) === 'string');
  members = members.map(item => item.trim().toUpperCase());
  members.sort();

  return members.reduce((acc, item) => acc + item[0], '');
}

module.exports = {
  createDreamTeam
};
