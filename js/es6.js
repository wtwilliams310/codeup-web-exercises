/*
 * Complete the TODO items below
 */
const users = [
  {
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
  },
  {
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
  },
  {
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
  },
  {
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
  },
  {
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
  },
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

// yellow

// let user = {"name": "Titus", "email": "wtwilliams310@yahoo.com", "languages": ["javascript", "css", "html", "bootstrap"]};

// users.push(user);
// console.table(users)

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

//yellow

// const name = 'your_name_here';
// const email = '';
// const languages = [];

// name = "Titus"

// console.log(name);

// TODO: rewrite the object literal using object property shorthand

//yellow

// let name = "Titus"
// let email = "wtw@ygmail.com"
// let languages = ["js"]

// users.push({
//   name,
//   email,
//   languages
// });

// console.table(users);

// TODO: replace `var` with `let` in the following variable declarations

//yellow

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions

// users.forEach(function(user) {
//   return emails.push(user.email);
// });

//yellow

// users.forEach(user => emails.push(user.email))

// console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });

// console.log(names);

//yellow

// users.forEach(user => names.push(user.name))

// console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function (user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // yellow

  const { name, email, languages } = user;

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(
    `${name}'s' email is ${email}. ${name} knows ${languages.join(", ")}`
  );
});

// console.log(developers);

// TODO: Use `let` for the following variable
let list = "<ul>";

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

//yellow

for (let developer of developers) {
  list += `
            <ul>  
              <li>${developer}</li>
            </ul>`;
}

// TODO: rewrite the assignment below to use template strings
// list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
for (let developer of developers) {
  list += `
            <ul>  
              <li>${developer}</li>
            </ul>`;
}
