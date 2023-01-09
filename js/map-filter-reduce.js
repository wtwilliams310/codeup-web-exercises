"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// yellow 2 

// const threeLanguages = users.filter(user => user.languages.length >= 3)


// console.table(threeLanguages);

// yellow 3

// const allEmails = users.map(user => user.email)

// console.log(allEmails);

// yellow 4

// const average = obj => {
//     const totalYears = obj.reduce((total, current) => {
//         return total + current.yearsOfExperience
//     }, 0)
//     return totalYears/users.length
// }

// console.log(average(users));



// yellow 5

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


//yellow 6

// function answer(obj) {
//    const emails = obj.reduce((total, current, index) => {
//         return index == 0 ? obj : total + ", " obj.email;
//     }, "")
//     return emails
// }
//  console.log(answer(users));



// const authorString = users.reduce(function(prevVal,currVal,idx){
//     return idx == 0 ? currVal.name : prevVal + ', ' + currVal.name;
// }, '')

// let message = `Your instructors are ${authorString}.`

// console.log(message);


//yellow Bonus 
const allLanguages = users.reduce((total, current, index) => {
    return index == 0 ? current.languages : total + "," + current.languages
}, '')

let splitString = allLanguages.split(",")

console.log([...new Set(splitString)])






















