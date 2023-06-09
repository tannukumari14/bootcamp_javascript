"use strict";
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let number=[...odd,...even];
number.forEach(function(element){
	console.log(element)
});
