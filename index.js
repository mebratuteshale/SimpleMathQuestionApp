const operatordArr = ["+","-","*","/"];
const operator = operatordArr[Math.floor((Math.random() * operatordArr.length))];
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const operand1El = document.getElementById("operand1");
const operand2El = document.getElementById("operand2");
const operatorEl = document.getElementById('operator');
const formEl = document.getElementById('mathForm');
const answerEl = document.getElementById('inAnswer');
const scoreEl = document.getElementById('totalScore');
const wrongAnsEl = document.getElementById('wrongScore');

operand1El.innerText = num1;
operand2El.innerText = num2;
operatorEl.innerHTML = operator;

let wrongAnsCount = JSON.parse(localStorage.getItem('wrongAnsCount'));
let totalScore =JSON.parse(localStorage.getItem('totalScore'));
if(!totalScore){totalScore=0;}
if(!wrongAnsCount){wrongAnsCount=0;}
scoreEl.innerText = totalScore;
wrongAnsEl.innerText = wrongAnsCount;

const corretAns = operator=="+"?num1+num2: operator=="-"?num1-num2: operator=="*"?num1*num2: num1/num2;

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


function updateLocalStorage() {
    localStorage.setItem("totalScore",JSON.stringify(totalScore));
    localStorage.setItem("wrongAnsCount",JSON.stringify(wrongAnsCount));
}

