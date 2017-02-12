
//takes in some numbers, returns a list of only even
//numbers.
function getEvens(){
	var evens = [];
	for (var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] == "number")
			if (arguments[i] % 2 == 0) {
				evens.push(arguments[i]);
		};
	};
	return evens
}


function isLeapYear(year){
	//TODO: Write a function that returns "leap year" if
	//the given year is a leap year, and "common year"
	//otherwise, according to the given pseudocode:
	//
	// if (year is not divisible by 4) then (it is a common year)
	// else if (year is not divisible by 100) then (it is a leap year)
	// else if (year is not divisible by 400) then (it is a common year)
	// else (it is a leap year)



}

function assert(test) {
	if (!test) throw "Assertion error";
}

function arraysEqual(a1,a2) {
	return JSON.stringify(a1)==JSON.stringify(a2);
}

function testLeapYear(){
	//TODO: Write some test cases
}

function testGetEvens(){
	//TODO: Write some test cases
}

function testAll(){
	//TODO: Run your tests
	console.log("all tests passed!");
}
/*
function main(){
	test
}*/