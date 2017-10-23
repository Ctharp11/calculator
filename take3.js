// var carFord = ['fordtruck', 'fordsuv', 'fordvan', 'fordcar'];
// var carChevy = ['chevytruck', 'chevysuv', 'chevyvan', 'chevycar'];
// var trucks = [];

// //loop over both, extract trucks, put into new array;

// //loop over template
// function looping(array) {
//   for(var i = 0; i < array.length; i++) {
//   	// console.log(array[i])
//   	var holder = array[i].split('y').pop()
//   	console.log(holder);
//     if(holder.indexOf('trucks') === -1) {
//      trucks.push(holder);
//     }

//   }
// }

// looping(carChevy)

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
  this.doSomething = function(){
  	console.log("done something");
  }
};

var myCar = new Car();
myCar.nickname = 'poop';
console.log(myCar.doSomething());


