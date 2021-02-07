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




function populateDisplay(e){
    //access the text inside the screen.
let screenUpdate = displayScreen.innerHTML;


    //access the pressed numbers value
let selectedNum = e.target.textContent;

displayValueTotal+=selectedNum;
    //update the screen with selected number
displayScreen.innerHTML += selectedNum;

    //update the total value with the screens value
//displayValueTotal=screenUpdate;


let splitValue = displayValueTotal.split(' ');

 displayValueOne = splitValue[0];
 operatorValue = splitValue[1];
 displayValueTwo = splitValue[2];

if(splitValue.length >= 4){
    
    //clear the array
    splitValue = [ , , ];


    //call sum 
    total= operate(parseInt(displayValueOne), operatorValue, parseInt(displayValueTwo));

     //clear screen and update with newtotal
     displayScreen.textContent = ''
     //displayScreen.textContent = newTotal

    //display operand that made sum happen
    let newOperand = '';
    newOperand= e.target.textContent.trim()

    displayValueOne = total.toString();
    splitValue[0] = displayValueOne
    //operatorValue = newOperand
    //splitValue[0] = operatorValue
    splitValue[1] = displayValueTotal[displayValueTotal.length-3];
    operatorValue = displayValueTotal[displayValueTotal.length-3]
    

    //RIGHTHEREsplitValue.unshift(total)

    splitValue[2] = displayValueTotal[displayValueTotal.length-1]
    displayValueTwo = displayValueTotal[displayValueTotal.length-1]

    displayScreen.textContent = total+operatorValue

    
    
}

console.log(splitValue)

}

function clearDisplay(){
    displayScreen.innerHTML = '';
    displayValueTotal = 0;
    displayValueOne = 0;
    displayValueTwo = 0;
    operatorValue = '';
}


clearButton.addEventListener('click', clearDisplay)

function add(num1,num2){
    return num1+num2
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





function operate(displayValueOne, operatorValue, displayValueTwo){
    if(operatorValue === '+'){
      return  add(displayValueOne, displayValueTwo)
    } else if (operatorValue === '-'){
        return subtract(displayValueOne,displayValueTwo)
    } else if (operatorValue === '*'){
        return multiply(displayValueOne,displayValueTwo)
    } else {
        return divide(displayValueOne,displayValueTwo)
    }
}

function sum(){
   total= operate(parseInt(displayValueOne), operatorValue, parseInt(displayValueTwo));
    //displayValueOne = total;
    displayValueTotal = total;
    displayValueOne = total;
   return displayScreen.innerHTML = total;
}

let total = 0;



//equal/operate
//equalsButton.addEventListener('click', populateDisplay);

equalsButton.addEventListener('click', sum);





console.log(operate(6, '/', 5))

threeButton.addEventListener('click', tryevent)

function tryevent(e){
    console.log(e.target.textContent + 'hey')
}
