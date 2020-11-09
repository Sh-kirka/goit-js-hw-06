// Write code under this line
const getSortedUniqueSkills = (array) =>
  [...array]
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
