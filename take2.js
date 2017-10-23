var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var equals = document.getElementById('equals');
var clears = document.getElementById('clear');
var screen = document.getElementById('screen');
var firstVar;
var operatorVar;
var secondVar;
var runCalc = false;

clears.addEventListener('click', function(){
	  runCalc = false;
	  screen.innerHTML = "";
	  firstVar;
	  operatorVar;
      secondVar;
})

firstNum();
secondNum();
operationSave();
operate();

function firstNum() {
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
	    if (runCalc) {return};
		var num = this.dataset.value;
		letterParse = parseInt(num)
		firstVar = screen.innerHTML += num;
	    });
	}
}

function secondNum() {
	 screen.innerHTML = "";
	for(var i = 0; i < numbers.length; i++) {
	    numbers[i].addEventListener('click', function() {
	    if (runCalc === false) {return};
		var num = this.dataset.value;
		letterParse = parseInt(num)
		secondVar = screen.innerHTML += num;
	    });
	}
}

function operationSave() {
	for (var i = 0; i < operators.length; i++) {
		operators[i].addEventListener('click', function(){
			operatorVar = this.dataset.value;
			screen.innerHTML = "";
			runCalc = true;
		})
	}
}

function operate() {
   equals.addEventListener('click', function() {
   	console.log("firstVar", firstVar);
    console.log("secondVar", secondVar);
   	if (operatorVar === "+") {
   		var calculate = parseFloat(firstVar) + parseFloat(secondVar);
   		screen.innerHTML = calculate;
   	} else if (operatorVar === "-") {
   		var calculate = parseFloat(firstVar) - parseFloat(secondVar);
   		screen.innerHTML = calculate;
   	} else if (operatorVar === "**") {
   		var calculate = parseFloat(firstVar) ** parseFloat(secondVar);
   		screen.innerHTML = parseFloat(calculate);
   	}
   	else if (operatorVar === "*") {
   		var calculate = parseFloat(firstVar) * parseFloat(secondVar);
   		screen.innerHTML = parseFloat(calculate);
   	}
   	else if (operatorVar === "/") {
   		var calculate = parseFloat(firstVar) / parseFloat(secondVar);
   		screen.innerHTML = parseInt(calculate);
   	}
    runCalc = false;
   })
}

