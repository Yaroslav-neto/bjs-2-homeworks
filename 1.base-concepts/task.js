"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = (percent / 100) / 12;
	let loanBody = amount - contribution;
	if (loanBody <= 0) {
		return 0;
	}
	let monthlyPayment = loanBody * (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
	let totalAmount = monthlyPayment * countMonths;
	return Math.round(totalAmount * 100) / 100;
}