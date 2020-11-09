// Write code under this line
const getUsersWithGender = (array, genderArr) =>
  array.filter(({ gender }) => gender === genderArr).map(({ name }) => name);
console.log(getUsersWithGender(users, "male"));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
