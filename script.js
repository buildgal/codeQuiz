//the next question displays when next button is selected 
let Q1 = document.querySelector("#Q1");
let btns= document.querySelector("body > div");
let nextBtns = document.querySelector("#nextBtn");
let startBtn= document.querySelector("#StaBtn");
let prevBtn= document.querySelector("#prevBtn");
let nextCount= 0;   
let prevCount=0;




//start button selected display the first question with options
startBtn.addEventListener("click", function(){
    question1();
})


//create a function for question  

function question1 (){
    Q1.textContent="1.What is JavaScript not used for";
    startBtn.style.display="none";

    //creating the answer buttons 
    let AnsA= document.createElement("BUTTON");
    let AnsB= document.createElement("BUTTON");
    let AnsC= document.createElement("BUTTON");
    let AnsD= document.createElement("BUTTON");

    //adding a class attribute 
    AnsA.setAttribute("class", "buttons");
    AnsB.setAttribute("class", "buttons");
    AnsC.setAttribute("class", "buttons");
    AnsD.setAttribute("class", "buttons");

    //adding an ID attribute 
    AnsA.setAttribute("id", "button1");
    AnsB.setAttribute("id", "button2");
    AnsC.setAttribute("id", "button3");
    AnsD.setAttribute("id", "button4");

    //this allows the element to display text 
    btns.appendChild(AnsA);
    btns.appendChild(AnsB);
    btns.appendChild(AnsC);  
    btns.appendChild(AnsD);

    //setting the text for each button 
    AnsA.textContent="A. Could be close";
    AnsB.textContent="B. correct answer"; 
    AnsC.textContent="C. C's get degrees";
    AnsD.textContent="D. never D!";
}

function question2 () {
    Q1.textContent="2.Console.log() is an expression that";

        let choiceBtn=document.querySelector(".buttons")

        let AnsA= document.querySelector("#button1");
        let AnsB= document.querySelector("#button2");
        let AnsC= document.querySelector("#button3");
        let AnsD= document.querySelector("#button4");
        
        btns.appendChild(AnsA);
        btns.appendChild(AnsB);
        btns.appendChild(AnsC);  
        btns.appendChild(AnsD);
    
        AnsA.textContent="A. second question";
        AnsB.textContent="B. second question";
        AnsC.textContent="C. correct answer";
        AnsD.textContent="D. second question";

        //when button is selected highlight it 

       choiceBtn.addEventListener("click", event => {
           choiceBtn.style.color="red";
       })



}

function question3 () {
    Q1.textContent="3.Arrays in JavaScript";

        let AnsA= document.querySelector("#button1");
        let AnsB= document.querySelector("#button2");
        let AnsC= document.querySelector("#button3");
        let AnsD= document.querySelector("#button4");
        
        btns.appendChild(AnsA);
        btns.appendChild(AnsB);
        btns.appendChild(AnsC);  
        btns.appendChild(AnsD);
    
        AnsA.textContent="A. 3 question";
        AnsB.textContent="B. 3 question";
        AnsC.textContent="C. 3 question";
        AnsD.textContent="D. 3 question";
}

function question4 () {
    Q1.textContent="4.Specific data in JavaScript is best formatted in which object form?";

        let AnsA= document.querySelector("#button1");
        let AnsB= document.querySelector("#button2");
        let AnsC= document.querySelector("#button3");
        let AnsD= document.querySelector("#button4");
        
        btns.appendChild(AnsA);
        btns.appendChild(AnsB);
        btns.appendChild(AnsC);  
        btns.appendChild(AnsD);
    
        AnsA.textContent="A. 4 question";
        AnsB.textContent="B. 4 question";
        AnsC.textContent="C. 4 question";
        AnsD.textContent="D. 4 question";
}

function question5 () {
    Q1.textContent="5.How do you declare a variable in JavaScript?";

        let AnsA= document.querySelector("#button1");
        let AnsB= document.querySelector("#button2");
        let AnsC= document.querySelector("#button3");
        let AnsD= document.querySelector("#button4");
        
        btns.appendChild(AnsA);
        btns.appendChild(AnsB);
        btns.appendChild(AnsC);  
        btns.appendChild(AnsD);
    
        AnsA.textContent="A. 5 question";
        AnsB.textContent="B. 5 question";
        AnsC.textContent="C. 5 question";
        AnsD.textContent="D. 5 question";
}

function quizResults() {
    Q1.textContent="RESULTS";

        let AnsA= document.querySelector("#button1");
        let AnsB= document.querySelector("#button2");
        let AnsC= document.querySelector("#button3");
        let AnsD= document.querySelector("#button4");
        
        btns.appendChild(AnsA);
        btns.appendChild(AnsB);
        btns.appendChild(AnsC);  
        btns.appendChild(AnsD);
    
        AnsA.style.display= "none";
        AnsB.style.display= "none";
        AnsC.style.display= "none";
        AnsD.style.display= "none";

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