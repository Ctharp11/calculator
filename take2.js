//File in use for the calculator! 

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var equals = document.getElementById('equals');
var clears = document.getElementById('clear');
var screen = document.getElementById('screen');
var firstVar = [];
var operatorVar = [];
var secondVar = [];
var answer = false;
var runCalc = false;
var lengthCheck = [];

clears.addEventListener('click', function(){
	  runCalc = false;
	  screen.innerHTML = "";
	  firstVar = [];
	  operatorVar = [];
      secondVar = [];
      answer = false;
})

firstNum();
secondNum();
operationSave();
operate();

function firstNum() {
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
	    if (runCalc) {return};
	    if (answer === true) {
        screen.innerHTML = ''
        answer = false;
        secondVar = [];
        firstVar = [];
        }
		var num = this.dataset.value;
		lengthCheck.push(num)
		if (lengthCheck.length <= 9) {
		firstVar += num;
		screen.innerHTML += num;
	    }
	    });
	}
}

function secondNum() {
	 screen.innerHTML = "";
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
	    if (runCalc === false) {return};
		var num = this.dataset.value;
		lengthCheck.push(num)
		if (lengthCheck.length <= 9) {
		secondVar += num;
		screen.innerHTML += num;
	    }
	    });
	}
}

function operationSave() {
	for (var i = 0; i < operators.length; i++) {
		operators[i].addEventListener('click', function(){
			operatorVar = this.dataset.value;
			screen.innerHTML = "";
			runCalc = true;
			lengthCheck = [];
		})
	}
}

function operate() {
   equals.addEventListener('click', function() {
       var snap;  
   	if (operatorVar === "+") {
   		calculate = parseFloat(firstVar) + parseFloat(secondVar);
         snap =  calculate.toString()
   		if (snap.length <= 9) {
   		    screen.innerHTML = Number((calculate).toFixed(5));
   		    answer = true;
   		    lengthCheck = [];
   	    } else {
   	    	var exponent = calculate.toExponential();
   	    	var parseparse = parseFloat(exponent);
   	    	var final = parseparse.toPrecision(6);
   	    	screen.innerHTML = parseparse;
   	    	answer = true;
   	    	lengthCheck = [];
   	    }
   	} else if (operatorVar === "-") {
   		var calculate = parseFloat(firstVar) - parseFloat(secondVar);
         snap =  calculate.toString()
   		if (snap.length <= 9) {
   		    screen.innerHTML = Number((calculate).toFixed(5));
   		    answer = true;
   		    lengthCheck = [];
   	    } else {
   	    	var exponent = calculate.toExponential();
   	    	var parseparse = parseFloat(exponent);
   	    	var final = parseparse.toPrecision(6);
   	    	screen.innerHTML = final;
   	    	answer = true;
   	    	lengthCheck = [];
   	    }
   	} else if (operatorVar === "**") {
   		var calculate = parseFloat(firstVar) ** parseFloat(secondVar);
         snap =  calculate.toString()
   		if (snap.length <= 9) {
   		    screen.innerHTML = Number((calculate).toFixed(5));
   		    answer = true;
   		    lengthCheck = [];
   	    } else {
   	    	var exponent = calculate.toExponential();
   	    	var parseparse = parseFloat(exponent);
   	    	var final = parseparse.toPrecision(6);
   	    	screen.innerHTML = final;
   	    	answer = true;
   	    	lengthCheck = [];
   	    }
   	}
   	else if (operatorVar === "*") {
   		var calculate = parseFloat(firstVar) * parseFloat(secondVar);
         snap =  calculate.toString()
   		if (snap.length <= 9) {
   		    screen.innerHTML = Number((calculate).toFixed(5));
   		    answer = true;
   		    lengthCheck = [];
   	    } else {
   	    	var exponent = calculate.toExponential();
   	    	var parseparse = parseFloat(exponent);
   	    	var final = parseparse.toPrecision(6);
   	    	screen.innerHTML = final;
   	    	answer = true;
   	    	lengthCheck = [];
   	    }
   	}
   	else if (operatorVar === "/") {
   		var calculate = parseFloat(firstVar) / parseFloat(secondVar);
         snap =  calculate.toString()
   		if (snap.length <= 9) {
   		    screen.innerHTML = Number((calculate).toFixed(5));
   		    answer = true;
   		    lengthCheck = [];
   	    } else {
   	    	var exponent = calculate.toExponential();
   	    	var parseparse = parseFloat(exponent);
   	    	var final = parseparse.toPrecision(6);
   	    	screen.innerHTML = final;
   	    	answer = true;
   	    	lengthCheck = [];
   	    }
   	}
    runCalc = false;
   })
}

