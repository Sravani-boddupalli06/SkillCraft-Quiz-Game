const questions = [

{
    question:"What does HTML stand for?",
    answers:[
        {text:"Hyper Text Markup Language", correct:true},
        {text:"High Transfer Machine Language", correct:false},
        {text:"Home Tool Markup Language", correct:false},
        {text:"Hyperlinks and Text Mark Language", correct:false}
    ]
},

{
    question:"Which language is used for styling web pages?",
    answers:[
        {text:"HTML", correct:false},
        {text:"CSS", correct:true},
        {text:"Python", correct:false},
        {text:"Java", correct:false}
    ]
},

{
    question:"Which language is used for web functionality?",
    answers:[
        {text:"CSS", correct:false},
        {text:"C", correct:false},
        {text:"JavaScript", correct:true},
        {text:"SQL", correct:false}
    ]
}

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion(){

    resetState();

    let q = questions[currentQuestion];

    questionElement.innerText = q.question;

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("answer-btn");

        answersElement.appendChild(button);

        button.addEventListener("click", function(){

            // disable all buttons after selection
            let allButtons = answersElement.querySelectorAll("button");
            allButtons.forEach(btn => btn.disabled = true);

            if(answer.correct){
                score++;
                button.style.background = "green";
                button.style.color = "white";
            } else {
                button.style.background = "red";
                button.style.color = "white";
            }

            nextBtn.style.display = "block";
        });

    });

}

function resetState(){
    nextBtn.style.display = "none";
    answersElement.innerHTML = "";
}

nextBtn.addEventListener("click", function(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        showScore();
    }

});

function showScore(){

    questionElement.innerText = "Quiz Completed!";
    answersElement.innerHTML = "";
    nextBtn.style.display = "none";

    scoreElement.innerText =
        "Your Score: " + score + "/" + questions.length;
}

showQuestion();