//FOR LOOPS
//# 2


//***Solution 1***
// function showMultiplicationTable(number) {
// 	for (let i = 1; i < 11; i++) {
// 		let product = number * i;
// 		let expression = `${number} x ${i} = ${product}`;
// 		console.log(expression);
// 	}
// }
// console.log(showMultiplicationTable(7));

//***Solution 2***
// function showMultiplicationTable(number) {
// 	let i = 1;
// 	let product;
// 	let expression;

// 	while (i < 11) {
// 		let product = number * i
// 		let expression = `${number} x ${i} = ${product}`;
// 		console.log(expression);

// 		i++

// 	}
//}
// showMultiplicationTable(7);


//# 3

//****Note: randomNumber generator needs to be inside the for loop to generate multiple ranNumbers.

// for (let i = 1; i < 11; i++) {
// 	let randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
// 	if (randomNumber % 2 === 0) {
// 		console.log(`${randomNumber} is even`)
// 	} else {
// 		console.log(`${randomNumber} is odd`)
// 	}
// }

//Class solution:
// for (let i = 1; i < 11; i++) {
// 	let randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//  let isEven = randomNumber % 2 === 0;
//  let answer = `${randomNumber} is ${isEven ? 'even':'odd'};
//  console.log(answer);

//# 4
// let n = 9;
// let string = "";
// for(let i = 1; i <= n; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		string += i;
// 	}
// 	string += "\n"
// }

// console.log(string)

//*****CLASS SOLUTION*******
// for (let i = 0; i < 9; i++) {
//     let number = i + 1;
//     let result = number.toString();
//     for (let j = 1; j <= i; j++) {
//         result += number;
//     }
//     console.log(result)
// }

//******OR
// for (let i = 0; i < 9; i++) {
//     let answer = String(i + 1).repeat(i + 1);
//     console.log(answer);
// }





//# 5
// for (let i = 100; i >= 5; i -= 5) {
// 	console.log(i);
// }



