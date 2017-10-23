var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var equals = document.getElementById('equals');
var clears = document.getElementById('clear');
var screen = document.getElementById('screen');
var numVar = [];



clears.addEventListener('click', function(){
	  screen.innerHTML = "";
	  numVar=[];
    })

function numbersGo() {
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
		var num = this.dataset.value;
		numSet = screen.innerHTML += num;
		numVar.push(num)
	   }); 
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
            console.log(realFinal.toString().length);
    		screen.innerHTML = parseFloat(realFinal);
    		numVar = [];
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
    	}
    })
}

numbersGo();
operationSave();
operation();
