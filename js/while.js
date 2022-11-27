"use strict";



//***WHILE LOOPS***

// let i = 1;
// while (i <= 16) {
// 	let power = 2 ** i;
// 	console.log(power);
// 	i++;
// }

//***Same result using for loop***

// for (let i = 1; i <= 16; i++) {
// 	let power = 2 ** i;
// 	console.log(power);
// }



//***DO WHILE LOOP***

// function iceCream() {
// 	let allCones = Math.floor(Math.random() * 51) + 50;
// 	let i = allCones;
// 	let finalConesReq;

// 	do {
// 		let conesPerCustomer = Math.floor(Math.random() * 5) + 1;
// 		let conesLeft = i - conesPerCustomer;
// 		i = conesLeft;
// 		finalConesReq = conesPerCustomer;
// 		console.log(`${conesPerCustomer} sold, there are ${i} cones left to sell.`);
// 	} while (i > 5) {
// 		if (i < finalConesReq) {
// 			console.log(`Cannot sell you ${finalConesReq}, I only have ${i}...`);
// 	} else {
// 			console.log(`Yay! I sold them all!`);

// 		}
// 	}
// }

// console.log(iceCream());