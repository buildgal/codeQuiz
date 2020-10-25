//the next question displays when next button is selected 
let Q1 = document.querySelector("#Q1");
let btns= document.querySelector("body > div");
let nextBtns = document.querySelector("#nextBtn");
let startBtn= document.querySelector("#StaBtn");
let instruction= document.querySelector("body > p");
let check= document.querySelector("#correct");


let elA= document.querySelector("#elA");
let elB= document.querySelector("#elB");
let elc= document.querySelector("#elC");
let elD= document.querySelector("#elD");

let minDisplay= document.querySelector("#minutes");
let secDisplay= document.querySelector("#seconds")

let totalTime= 300;







//start button selected display the first question with options
startBtn.addEventListener("click", function(){
    question1();
    })


//create a function for question  

function question1 (){
    Q1.textContent="1.What is JavaScript not used for";
    startBtn.style.display="none";
    instruction.style.display="none";

        //setting the text for each buttoton in question 1
        elA.textContent="A. Inputs";
        elB.textContent="B. Animate elements"; 
        elC.textContent="C. Do laundry";
        elD.textContent="D. Change a webpage";

        elC.addEventListener("click", function (){
            check.textContent="Correct!"
        })

        elA.addEventListener("click", function (){
            check.textContent="Wrong!"
            totalTime-10;

        })

        elB.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elD.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        nextBtns.addEventListener("click", function(){
            question2();
        })
     
     
        


        
}

function question2 () {
    Q1.textContent="2.Console.log() is an expression that";
        //setting the text for each button in question 1
        elA.textContent="A. Prints to the debugger ";
        elB.textContent="B. Prints to my local printer "; 
        elC.textContent="C. Prints the scope";
        elD.textContent="D. Prints the webpage";
        check.textContent="";

        elA.addEventListener("click", function (){
            check.textContent="Correct!"
        })

        elC.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elB.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elD.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        nextBtns.addEventListener("click", function(){
            question3();
        })
}
        



function question3 () {
    Q1.textContent="3.Arrays in JavaScript";
    check.textContent="";

        //setting the text for each button in question 1
        elA.textContent="A. Only have and index in a for loop";
        elB.textContent="B. Begin with an index of 1 "; 
        elC.textContent="C. Do not have an index ";
        elD.textContent="D. Begin with an index of 0";


        elD.addEventListener("click", function (){
            check.textContent="Correct!"
        })

        elC.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elB.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elA.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        nextBtns.addEventListener("click", function(){
            question4();
        })
    }

function question4 () {
    Q1.textContent="4.Specific data in JavaScript is best formatted in which object form?";
    check.textContent="";

        elA.textContent="A. Punch cards";
        elB.textContent="B. Properties and values";
        elC.textContent="C. JSON";
        elD.textContent="D. Floppy Disk";

        elB.addEventListener("click", function (){
            check.textContent="Correct!"
        })

        elC.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elD.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elA.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        nextBtns.addEventListener("click", function(){
            question5();
        })
}

function question5 () {
    Q1.textContent="5.How do you declare a variable in JavaScript?";
    check.textContent="";

        elA.textContent="A. Let=";
        elB.textContent="B. Use your voice";
        elC.textContent="C. Declare=";
        elD.textContent="D. Variable=";

        elA.addEventListener("click", function (){
            check.textContent="Correct!"
        })

        elC.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elD.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elB.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        nextBtns.addEventListener("click", function(){
            quizResults();
        })
}

function quizResults() {
    Q1.textContent="RESULTS";
    check.textContent="";
        elA.style.display= "none";
        elB.style.display= "none";
        elC.style.display= "none";
        elD.style.display= "none";
 
}