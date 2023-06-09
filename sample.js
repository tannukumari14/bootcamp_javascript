/*if ( true){
	var abc = "hii";
}
console.log (abc)*/

// going to work now i want you to be with me 



coust ar =[1,3,4,5,6]
arr for each (function (d)}
 console.log(d);
 });


let dog={
	breed:"golden retive",
	height:12,
	weight:67,
	display:function(){
		console.log(this.breed)
}
	};
	
//##### dot opertor
console.log(dog.breed);
//## to give new property
dog.age=32;
console.log(dog.age)
console.log(dog["breed"])


let dog={
	breed:"golden retive",
	height:12,
	weight:67,
	display:function(){
		console.log(this.breed)
}
	};
	
//##### dot opertor
console.log(dog.breed);

//with new Object create object
let dog= new Object();

dog.breed:'golden retriver';
dog.height:'7ft';
dog.age:2;
display.function(){
	console.log(this.breed)
};

///with constructer create object
function Car(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	//this.a=function(){
		//console.log(this.make+this.model+this.year)
	//};
}
let car1=new Car("hyundai", "120", 2014);
console.log(car1)

//construter
function Car(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	this.a=function(){
		console.log(this.make+this.model+this.year)
	};
}
console.log(Car("hyundai", "120", 2014));


"use strict"
class Car{
	constructer(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	}
	display(){
					console.log(this.make+this.model+this.year);
	};
};
let car1=new Car("hyundai","i20",2015);
let car2=new Car("honda","city",2005);
let car3=new Car("tata","nano",2012);
for (let prop in car1){
	console.log(prop+":"+car1[prop]+"<br>");
}
console.log(car1)
