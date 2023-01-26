"use strict";

const users = [
  {
    id: 1,
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
    yearsOfExperience: 5,
  },
  {
    id: 2,
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
    yearsOfExperience: 6,
  },
  {
    id: 3,
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
    yearsOfExperience: 7,
  },
  {
    id: 4,
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
    yearsOfExperience: 8,
  },
  {
    id: 5,
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
    yearsOfExperience: 9,
  },
];

// MY-SOLUTION 2
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// const threeLanguages = users.filter(user => user.languages.length >= 3)

// console.table(threeLanguages);

// 2ND ATTEMPT

// const threeLanguages = users.filter((user) => user.languages.length >= 3);

// console.log(threeLanguages);

// MY-SOLUTION 3
// Use .map to create an array of strings where each element is a user's email address

// const allEmails = users.map(user => user.email)

// console.log(allEmails);

// 2nd Attempt

// const array = users.map((user) => {
//   return user.email;
// });

// console.log(array);

// MY-SOLUTION 4
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// const average = obj => {
//     const totalYears = obj.reduce((total, current) => {
//         return total + current.yearsOfExperience
//     }, 0)
//     return totalYears/users.length
// }

// console.log(average(users));

// 2nd attempt

// const average = users.reduce((total, current) => {
//   return total + current.yearsOfExperience / users.length;
// }, 0);

// console.log(average);

// MY-SOLUTION 5
// Use .reduce to get the longest email from the list of users.

// solution using ternary operator
// const longestEmail = (arr) => {
//     let result = allEmails.reduce((a, b) => a.length > b.length ? a : b)
//     return result
// }

//solution with if else
// const longestEmail = (arr) => {
//     let result = allEmails.reduce((a, b) => {
//         if(a.length > b.length) {
//             return a
//         }
//             return b

//         })
//     return result
// }

// console.log(longestEmail(allEmails));

// 2nd attempt

// const longestEmail = users.reduce((total, current) => {
//   return total.length < current.email.length ? current.email : total;
// }, "");

// console.log(longestEmail);

// MY-SOLUTION 6

// const authorString = users.reduce(function (prevVal, currVal, idx) {
//   return idx == 0 ? currVal.name : prevVal + ", " + currVal.name;
// }, "");

// let message = `Your instructors are ${authorString}.`;

// console.log(authorString);

// 2nd attempt
// const usersNames = users.reduce

// MY-SOLUTION Bonus
// Use .reduce to get the unique list of languages from the list of users.
// const allLanguages = users.reduce((total, current, index) => {
//   return index == 0 ? current.languages : total + "," + current.languages;
// }, "");

// console.log(allLanguages);
// let splitString = allLanguages.split(",");

// console.log(splitString);

// console.log([...new Set(splitString)]);

// reduce practice
/*
const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];

let result;

// count

result = people.reduce((acc, person) => {
  return acc + 1;
}, 0);

console.log(result);

// Sum ages

result = people.reduce((acc, person) => {
  return acc + person.age;
}, 0);

console.log(result);

// array of name using reduce and (map)

result = people.reduce((acc, person) => {
  return [...acc, person.name];
}, []);

console.log(result);

result = people.map((person) => person.name);

console.log(result);

// convert to id => person lookup (dictionary)

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

console.log(result);

// max age

result = people.reduce((acc, person) => {
  return acc > person.age ? acc : person.age;
}, null);

console.log(result);

// min age

result = people.reduce((acc, person) => {
  return acc < person.age ? acc : person.age;
});

console.log(result);

result = people.reduce((acc, person) => {
  if (acc == null || person.age < acc) return person.age;
}, null);

console.log(result);

// find name

result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Leigh") return person;
  return null;
}, null);

console.log(result);

// all over 18

result = people.reduce((acc, person) => {
  if (!acc) return true;
  return person.age > 18;
}, true);

console.log(result);

*/
