//function calculatesum(...args){
//	let sum=0;
//	args.forEach(function(element){
//		sum+=element;
//	});
//	return sum;
//}
//let s= calculatesum(3,5,7,9);
//console.log(s);
//s=calculatesum(3,5,7,9,11);
//console.log(s);

function calculatesum(a,b,...args){
	let sum=a+b;
	args.forEach(function(element){
		sum+=element;
	});
	return sum;
}
let s= calculatesum(3,5,7,9);
console.log(s);
s=calculatesum(3,5,7,9,11);
console.log(s);
