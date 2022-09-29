  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
  "Accumilator:", acc,
  "Current value:", curr,
  "Total:", acc + curr)
  return acc + curr;
}, 10); // select a number to choose where the starting number of the accumilator will be

console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Sam',
    profession: 'Builder',
    yrsExperience: 12
  }

];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // you have to specify the number you want
                                                                                      // or wrong output will appear
                                                                                      // as the first item in the array is an object 
 

console.log(totalExperience);


// Grouping by a property, and totaling it too

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;

}, {});

console.log(experienceByProfession);

let nameByProfession = teamMembers.reduce((acc, curr) => {
  let firstName = curr.name;
  if (!acc[firstName]) {
    acc[firstName] = curr.yrsExperience;
  } else {
    acc[firstName] = curr.yrsExperience;
  }
  return acc;
}, {});

console.log(nameByProfession);