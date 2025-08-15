const calcButtons = document.querySelectorAll(".button");
let displayNum = document.getElementById("displayNum");
function add(a,b) {
    let totalAdd = a + b;
    displayNum.value = totalAdd;
    return totalAdd;
}

function subtract(a,b) {
    let totalSub = a - b;
    displayNum.value = totalSub;
    return totalSub;
}

function multiply(a,b){
    let totalMulti = a * b;
    displayNum.value = totalMulti;
    return totalMulti;
}

function divide(a,b) {
    let totalDiv = a / b;
    displayNum.value = totalDiv;
    return totalDiv; 
}

let firstNumber = "";
let operator = '';
let secondNumber = "";

function operate(a,operator, b) {
    if(operator === '+') {
        return add(a,b);
    }
    else if(operator === '-') {
        return subtract(a,b);
    }
    else if(operator === '*') {
        return multiply(a,b);
    }
    else if (operator === '/') {
        return divide(a,b);
    }
}

calcButtons.forEach(calcButton => {
    calcButton.addEventListener("click", (e) => {
        if(operator === '') {
            if(!isNaN(e.target.textContent)) {
                firstNumber += e.target.textContent;
                console.log(firstNumber);
                displayNum.value = firstNumber;
                }
        }
        if(operator !== '') {
            if(!isNaN(e.target.textContent)) {
                secondNumber += e.target.textContent;
                console.log(secondNumber);
                displayNum.value = secondNumber;
                }
        }
        if(e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/') {
            if(secondNumber !== "") {
                let result = String(operate(Number(firstNumber), operator, Number(secondNumber)));
                firstNumber = result;
                secondNumber = "";
                displayNum.value = firstNumber;
            }
            
            operator = e.target.textContent;
        }
        if(e.target.textContent === '=') {
            let result = String(operate(Number(firstNumber), operator, Number(secondNumber)));
            firstNumber = result;
            secondNumber = "";
            displayNum.value = firstNumber;
            
        }
        if(e.target.textContent === 'C') {
            firstNumber = "";
            operator = '';
            secondNumber = "";
            displayNum.value = 0;
        }
        if(e.target.textContent === 'CE') {
            secondNumber = "";
            displayNum.value = 0;
        }
        
    });
});



