const arr=[12,34,56,78,90]
let sum=arr.reduce(function(r,x){
	return r+x;
});
console.log(sum)

const arr=[12,34,56,78,90]
let sum=arr.reduce(function(r,x){
	return r+x;
},0);
console.log(sum)

const arr=[10,12,14,90,87]
let sum=arr.reduce(
	(r,x)=>r+x
);
console.log(sum)

