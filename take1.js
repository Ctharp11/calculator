//Didn't use this file for the calculator. Didn't seem that efficient so start over in take2.js

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var equals = document.getElementById('equals');
var clears = document.getElementById('clear');
var screen = document.getElementById('screen');
var numVar = [];
var answer = false;


//bugs: set calculator to only have 6 values at all times, parseInt rounding way too far at times

clears.addEventListener('click', function(){
	  screen.innerHTML = "";
	  numVar=[];
      answer=[];
    })

function numbersGo() {
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
        if (answer === true) {
        screen.innerHTML = ''
        answer = false;
        }
		var num = this.dataset.value;
		numSet = screen.innerHTML += num;
		numVar.push(num)
	   })
    }
}


function operationSave() {
	for (var i = 0; i < operators.length; i++) {
		operators[i].addEventListener('click', function(){
			op = this.dataset.value;
			numVar.push(op);
			screen.innerHTML = "";
		})
	}
}

function operation (){
    equals.addEventListener('click', function(){
    	var stringVar = numVar.toString();
    	var final =  stringVar.replace(/,/g, '');
    	if (final.includes('+') === true) {
    		var n = final.indexOf('+');
    		var x = final.slice(0, n);
    		var y = final.slice((n));
    		var xParse = parseFloat(x);
    		var yParse = parseFloat(y);
    		var realFinal = xParse + yParse;
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
            answer = true;
    	} 
    	else if (final.includes('-') === true) {
    		var n = final.indexOf('-');
    		var x = final.slice(0, n);
    		var y = final.slice((n));
    		var xParse = parseFloat(x);
    		var yParse = parseFloat(y);
    		var realFinal = xParse + yParse;
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
            answer = true;
    	}
    	else if (final.includes('**') === true) {
    		var n = final.indexOf('**');
    		var n = final.indexOf('-');
    		var x = final.slice(0, n);
    		var y = final.slice((n));
    		var xParse = parseFloat(x);
    		var yParse = parseFloat(y);
    		var realFinal = xParse ** yParse;
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
            answer = true;
    	}
    	else if (final.includes('/') === true) {
    		var n = final.indexOf('/');
    		var n = final.indexOf('-');
    		var x = final.slice(0, n);
    		var y = final.slice((n));
    		var xParse = parseFloat(x);
    		var yParse = parseFloat(y);
    		var realFinal = xParse / yParse;
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
            answer = true;
    	}
    	else if (final.includes('*') === true) {
    		var n = final.indexOf('*');
    		var n = final.indexOf('-');
    		var x = final.slice(0, n);
    		var y = final.slice((n));
    		var xParse = parseFloat(x);
    		var yParse = parseFloat(y);
    		var realFinal = xParse * yParse;
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
            answer = true;
    	}
    })
}

numbersGo();
operationSave();
operation();

