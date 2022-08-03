
const operatordArr = ["+","-","*","/"];

// Select one Operator randomly
const operator = operatordArr[Math.floor((Math.random() * operatordArr.length))];

// select two random numbers
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

// Read DOM elements by element id
const operand1El = document.getElementById("operand1");
const operand2El = document.getElementById("operand2");
const operatorEl = document.getElementById('operator');
const formEl = document.getElementById('mathForm');
const answerEl = document.getElementById('inAnswer');
const scoreEl = document.getElementById('totalScore');
const wrongAnsEl = document.getElementById('wrongScore');

// display the question into the DOM elements
operand1El.innerText = num1;
operand2El.innerText = num2;
operatorEl.innerHTML = operator;

// get the wrong-answer and correct answer counts
let wrongAnsCount = JSON.parse(localStorage.getItem('wrongAnsCount'));
let totalScore =JSON.parse(localStorage.getItem('totalScore'));

// set the correct and wrong answer count to 0 if they are null.
if(!totalScore){totalScore=0;}
if(!wrongAnsCount){wrongAnsCount=0;}

// display the wrong answer and correc answer counts.
scoreEl.innerText = totalScore;
wrongAnsEl.innerText = wrongAnsCount;

// calculate the correct answer based on the selected operator
const corretAns = operator=="+"?num1+num2: 
                    operator=="-"?num1-num2: 
                    operator=="*"?num1*num2: 
                    num1/num2;


// add an event listener to the forms submit event, so that it can act as expected
formEl.addEventListener("submit",()=>{
    const userAns = +answerEl.value;    // the + will convert the entered value to number type
    // const userAns = answerEl.value;
    // console.log("user ans: ",userAns,typeof userAns);
    if(userAns===corretAns){
        totalScore++;
        updateLocalStorage();
    }
    else{
        totalScore--;
        wrongAnsCount++;
        updateLocalStorage();
    }

})

// store the count of wrong and correct answer to a local storage, 
// so that it will not lose its value when refreshing the browser.
function updateLocalStorage() {
    localStorage.setItem("totalScore",JSON.stringify(totalScore));
    localStorage.setItem("wrongAnsCount",JSON.stringify(wrongAnsCount));
}

