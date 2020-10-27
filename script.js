//the next question displays when next button is selected 
let Q1 = document.querySelector("#Q1");
let btns= document.getElementsByClassName("choices");
let nextBtns = document.querySelector("#nextBtn");
let startBtn= document.querySelector("#StaBtn");
let instruction= document.querySelector("body > p");
let check= document.querySelector("#correct");
let result= document.querySelector("#resultPg");
let timer= document.querySelector("#timer");

//defining the variables for the answer choices 
let emlA= document.querySelector("#elA");
let elB= document.querySelector("#elB");
let elc= document.querySelector("#elC");
let elD= document.querySelector("#elD");

//defining variables for the total score 
result.style.display="none";
let score= document.querySelector("#totalScore");
score.style.display="none";
let total=1; // total question 

//making sure the buttons do not display 
elA.style.display="none";
elB.style.display="none";
elC.style.display="none";
elD.style.display="none";
elE.style.display="none";


let minDisplay= document.querySelector("#minutes");
let secDisplay= document.querySelector("#seconds")

let totalSeconds = 300;
let secondsElapsed = 0;
let status = "Working";
let interval;


//defining variables for timer 

function getFormattedMinutes(){
    let secondsLeft = totalSeconds - secondsElapsed;
    let minutesLeft = Math.floor(secondsLeft / 60);
    let formattedMinutes;
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
    return formattedMinutes;

}

function getFormattedSeconds(){
    let secondsLeft = (totalSeconds - secondsElapsed) % 60;
    let formattedSeconds;
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
}

function setTime() {
    let minutes;
  
    if (status === "Working") {
      minutes = 5;
    }
  
    clearInterval(interval);
    totalSeconds = minutes * 60;
  }

function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minDisplay.textContent = getFormattedMinutes();
    secDisplay.textContent = getFormattedSeconds();
  
   // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) {
      if (status === "Working") {
        alert("Time for a break!");
      } else {
        alert("Time to get back to work!");
      }
  
      stopTimer();
    }
}

function startTimer() {
    setTime();
  
    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
      /* The "interval" variable here using "setInterval()" begins the recurring increment of the
         secondsElapsed variable which is used to check if the time is up */
        interval = setInterval(function() {
          secondsElapsed++;
  
          // So renderTime() is called here once every second.
          renderTime();
        }, 1000);
    } else {
      alert("Minutes of work/rest must be greater than 0.")
    }
  }


//start button selected display the first question with options
startBtn.addEventListener("click", function(){
    startTimer();
    question1();
    timer.textContent="Timer";
    

    })


//create a function for question  

function question1 (){
    Q1.textContent="1.What is JavaScript not used for";
    
    //this block of code hides the start button and instructions, then displays all the options
    startBtn.style.display="none";
    instruction.style.display="none";
    elA.style.display="block";
    elB.style.display="block";
    elC.style.display="block";
    elD.style.display="block";
    
    
        //setting the text for each buttoton in question 1
        elA.textContent="A. Inputs";
        elB.textContent="B. Animate elements"; 
        elC.textContent="C. Do laundry";
        elD.textContent="D. Change a webpage";

        elC.addEventListener("click", function (){
            check.textContent="Correct!"; 
            totalResult();           
        })

        elA.addEventListener("click", function (){
            check.textContent="Wrong!";
           
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
            totalResult();
    
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
            check.textContent="Correct!";
            totalResult();
            
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
            check.textContent="Correct!";
            totalResult();
            
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
        elE.style.display="block";
        elA.textContent="A. Make=";
        elB.textContent="B. Use your voice";
        elC.textContent="C. Declare=";
        elD.textContent="D. Variable=";
        elE.textContent="E. Let=";

        elE.addEventListener("click", function (){
            check.textContent="Correct!"
            totalResult();
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

        elA.addEventListener("click", function (){
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
        elE.style.display= "none";

        nextBtns.style.display="none";
        result.style.display="block";
        score.style.display="block";
        score.textContent=result;
    
        
}


function totalResult(){
    score.style.display="block";
    let result=total++;
    score.textContent=result; 

    //should only increase when correct is selected 

}

