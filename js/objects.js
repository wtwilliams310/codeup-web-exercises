// "use strict";

(function() {
    "use strict";

    /**yellow
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    //*****blue My Solution

    // let person = {
    // 	firstName: "Titus",
    // 	lastName: "Williams"
    // };

    // console.log(person.firstName)
    // console.log(person.lastName)

    /**yellow
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //*****blue My Solution

    // person.sayHello = function(){
    // 	return `Hello from ${this.firstName} ${person.lastName}!`; //<--can use this. instead of person.
    // };

    // console.log(person.sayHello());


    /**yellow TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    

    //***Solution***


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    //*****blue My Solution

    // for(let i = 0; i < shoppers.length; i++) {
    // 	if (shoppers[i].amount > 200) {
    // 		let discountedPrice = shoppers[i].amount * (1 - 0.12);
    // 		console.log(`${shoppers[i].name}'s' bill was $${shoppers[i].amount} before a discount of 12%. ${shoppers[i].name}'s final bill after the applied discount is $${discountedPrice}`);
    // 	} else {
    // 		console.log(`${shoppers[i].name}'s' bill was $${shoppers[i].amount} before a discount of 0%. ${shoppers[i].name}'s final bill after the applied discount is $${shoppers[i].amount}`);
    // 	}
    // }
    
    //***lime Class Solution***

    //<---funciton(element, index, array) the three parameters always
    // shoppers.forEach(function (shopper) {
    //     if(shopper.amount > 200) {
    //         //shoppers that get the discount
    //         let savings = shopper.amount * 0.12;
    //         let total = shopper.amount - savings;
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and received a 12% discount.\n${shopper.name}'s discounted total is ${total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
    //     } else {
    //         let remaining = (200 - parseFloat(shopper.amount)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and did not`)
    //     }
    // })


    /**yellow TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    //does not have to be declared separately
    

    let books = [
    	{
    		title: "SeinLanguage",
    		author: {
    			firstName: "Jerry",
    			lastName: "Seinfeld"
    		}
    	},
    	{
    		title: "Seinfeld: The Official Cookbook",
    		author: {
    			firstName: "Insight",
    			lastName: "Editions"
    		}
    	},
    	{
    		title: "Seinfeldia: How a Show About Nothing Changed Everything",
    		author: {
    			firstName: "Jennifer",
    			lastName: "Armstrong"
    		}
    	},
    	{
    		title: "Seinfeld, Master of Its Domain: Revisiting Television's Greatest Sitcom",
    		author: {
    			firstName: "Sara",
    			lastName: "Lewis"
    		}
    	},
		{
    		title: "My Seinfeld Year",
    		author: {
    			firstName: "Fred",
    			lastName: "Stroller"
    		}
    	}

    ];


    //*****blue My Solution

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    // console.log(books[0]);


    /**yellow
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //*****blue My Solution

    //     let answer = [];

    //     for(let i = 0; i < books.length; i++) {
    //      let bookObject = {
    //          number: `Book # ${i + 1}`,
    //          title: books[i].title,
    //          author: `${books[i].author.firstName} ${books[i].author.lastName}`
    //      };
    //      answer.push(bookObject);
    //     }

    //     console.log(answer);

    //     let formattedAnswer = ``;

    //     for(let i = 0; i < answer.length; i++) {
    //      let result = `${answer[i].number} \nTitle: ${answer[i].title}\nAuthor: ${answer[i].author}\n---\n`;
    //      formattedAnswer += result;
    //     }
    // console.log(formattedAnswer);




    //***lime Class Solution***

    //***<----function(element, index, array) below
    books.forEach(function(book, index){
        let booknumber = index + 1;
        let fullName = `${book.author.firstName} + ${book.author.lastName}`
        let message = `Book # ${booknumber}\nTitle: ${book.title}\nAuthor: ${fullName}\n---`;
        console.log(message);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();































//***LESSON EXAMPLES***

// var car = new Object();

// console.log(typeof car);
// "object"


// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];

// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");

// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

// var car = {};
// car.make = "Toyota";
// car.model = "Camry";

// // create a honk method on the car object
// car.honk = function () {
//     alert("Honk! Honk!");
// };

// // honk the horn
// car.honk();

// var car = {};
// car.make = "Toyota";
// car.model = "Camry";

// // create a logMakeModel method on the car object
// car.logMakeModel = function () {
//     console.log("Car make/model is: " + this.make + " " + this.model);
// };

// // log the make/model
// car.logMakeModel();