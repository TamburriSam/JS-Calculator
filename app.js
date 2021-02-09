let oneButton = document.querySelector('.one');
let twoButton = document.querySelector('.two');
let threeButton = document.querySelector('.three');
let fourButton = document.querySelector('.four');
let fiveButton = document.querySelector('.five');
let sixButton = document.querySelector('.six');
let sevenButton = document.querySelector('.seven');
let eightButton = document.querySelector('.eight');
let nineButton = document.querySelector('.nine');
let zeroButton = document.querySelector('.zero')

let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');

let decButton = document.querySelector('.decimal');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equals');

let displayScreen = document.querySelector('.screen')

//number events
oneButton.addEventListener('click', populateDisplay);
twoButton.addEventListener('click', populateDisplay)
threeButton.addEventListener('click', populateDisplay)
fourButton.addEventListener('click', populateDisplay)
fiveButton.addEventListener('click', populateDisplay)
sixButton.addEventListener('click', populateDisplay)
sevenButton.addEventListener('click', populateDisplay)
eightButton.addEventListener('click', populateDisplay)
nineButton.addEventListener('click', populateDisplay)
zeroButton.addEventListener('click', populateDisplay)

//operator events
addButton.addEventListener('click', populateDisplay);
subtractButton.addEventListener('click', populateDisplay)
multiplyButton.addEventListener('click', populateDisplay)
divideButton.addEventListener('click', populateDisplay)

//special char events
decButton.addEventListener('click', populateDisplay)


let displayValueTotal = '';

let displayValueOne = 0;
let displayValueTwo = 0;
let operatorValue = '';

let newTotal = ''




function populateDisplay(e){
    
    let selectedNum = e.target.textContent;

    displayValueTotal+=selectedNum;
    
    displayScreen.innerHTML += selectedNum;

  
    let splitValue = displayValueTotal.split(' ');

    displayValueOne = splitValue[0];
    operatorValue = splitValue[1];
    displayValueTwo = splitValue[2];


  if(splitValue.length>=5){

    
        sum(); 

        operatorValue = e.target.textContent

        displayScreen.innerHTML = displayValueOne + operatorValue// + e.target.textContent;

      return  displayValueTotal = displayScreen.innerHTML

 }

}

function clearDisplay(){
    displayScreen.innerHTML = '';
    displayValueTotal = 0;
    displayValueOne = 0;
    displayValueTwo = 0;
    operatorValue = '';
    total = 0;
}


clearButton.addEventListener('click', clearDisplay)

function add(num1,num2){
    return Math.abs(num1+num2)
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}


let backBtn = document.querySelector('.backbutton');
backBtn.addEventListener('click', function(){
    displayValueTotal = displayValueTotal.slice(0,-1);
   displayScreen.innerText = displayScreen.innerText.slice(0, -1);
})


function operate(displayValueOne, operatorValue, displayValueTwo){
    if(operatorValue === '+'){
      return  add(displayValueOne, displayValueTwo)
    } else if (operatorValue === '-'){
        return subtract(displayValueOne,displayValueTwo)
    } else if (operatorValue === '*'){
        return multiply(displayValueOne,displayValueTwo)
    } else {
        return divide(displayValueOne,displayValueTwo);   
    }
}

function sum(){

   total = operate(parseFloat(displayValueOne), operatorValue, parseFloat(displayValueTwo));
    displayValueTotal = total;
    displayValueOne = total;

    if (displayScreen.innerHTML === 'Infinity' || displayScreen.innerHTML === 'NaN'){
     return displayScreen.innerHTML = 'ERROR! YA DUN GOOFED';

    }

   return displayScreen.innerHTML = total;
}

let total = '';



equalsButton.addEventListener('click', sum);

