
let number=[1,2,3,4,5,6]
let even=number.filter(function(x){
	if(x%2==0){
		console.log(true);
		return true
	}
	else{
		console.log(false);
		return false
	}
	
});
console.log(even)
