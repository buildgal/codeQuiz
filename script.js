//the next question displays when next button is selected 
let Q1 = document.querySelector("#Q1");
let btns= document.querySelector("body > div");
let nextBtns = document.querySelector("#nextBtn");
let startBtn= document.querySelector("#StaBtn");
let prevBtn= document.querySelector("#prevBtn");
let nextCount= 0;   
let prevCount=0;

let elA= document.querySelector("#elA");
let elB= document.querySelector("#elB");
let elc= document.querySelector("#elC");
let elD= document.querySelector("#elD");

let check= document.querySelector("#correct");

//start button selected display the first question with options
startBtn.addEventListener("click", function(){
    question1();
    })


//create a function for question  

function question1 (){
    Q1.textContent="1.What is JavaScript not used for";
    startBtn.style.display="none";

        //setting the text for each button in question 1
        elA.textContent="A. Inputs";
        elB.textContent="B. Animate elements"; 
        elC.textContent="C. Do laundry";
        elD.textContent="D. Change a webpage";

        elC.addEventListener("click", function (){
            check.textContent="Correct!"
            question2();        })

        elA.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elB.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        elD.addEventListener("click", function (){
            check.textContent="Wrong!"
        })

        
     
        


        
}

function question2 () {
    Q1.textContent="2.Console.log() is an expression that";
        //setting the text for each button in question 1
        elA.textContent="A. Prints to the debugger ";
        elB.textContent="B. Prints to my local printer "; 
        elC.textContent="C. Prints the scope";
        elD.textContent="D. Prints the webpage";
}
        



function question3 () {
    Q1.textContent="3.Arrays in JavaScript";

        //setting the text for each button in question 1
        elA.textContent="A. Only have and index in a for loop";
        elB.textContent="B. Begin with an index of 1 "; 
        elC.textContent="C. Do not have an index ";
        elD.textContent="D. Begin with an index of 0";
    }

function question4 () {
    Q1.textContent="4.Specific data in JavaScript is best formatted in which object form?";

        elA.textContent="A. Punch cards";
        elB.textContent="B. Properties and values";
        elC.textContent="C. JSON";
        elD.textContent="D. Floppy Disk";
}

function question5 () {
    Q1.textContent="5.How do you declare a variable in JavaScript?";

        elA.textContent="A. Let=";
        elB.textContent="B. Use your voice";
        elC.textContent="C. Declare=";
        elD.textContent="D. Variable=";
}

function quizResults() {
    Q1.textContent="RESULTS";
        elA.style.display= "none";
        elB.style.display= "none";
        elC.style.display= "none";
        elD.style.display= "none";

        //also take away all the questions 
        //display which ks were wrong 
        //add links that will show the correct answers 
}




//navigates through the questions 
nextBtns.addEventListener("click", function(){
    nextCount++;
    if (nextCount === 1){
        question2();
    }

    else if (nextCount === 2){
        question3();
    }

    else if (nextCount === 3){
        question4();
    }

    else if (nextCount === 4){
        question5();
    }

    else if (nextCount === 5){
        quizResults();
    }
    
    else if (nextCount >5){
        question1();
    }

})




        //need to know which question I am on so that when click the next button it shows me the correct questions 

        //click 1= quest 1 
        //click 2= quest 2 and so on






//the previous question and answer displays when previous is selected 


//count the number of correct questions 
//when a button is selected highlight the button and store the answer 
//if a different button is selected then store that answer 
//check if the button is answer is correct 


/*
prevBtn.addEventListener("click", function(){
    prevCount++;
    
    if (prevCount === 1){
        question4();
    }

    else if (prevCount === 2){
        question3();
    }

    else if (prevCount === 3){
        question2();
    }

    else if (prevCount ===4){
        question1();
    }
*/

/*refactor the code 
you would need loop less than five then create this 
each time it moves up add 1 to ID 
also loop through the list to give it a different name 
 */