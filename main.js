'use strict'
//Questions
// const STORE= {
//     questions: [ 
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     },
//     {
//         question:,
//         answers: ,
//         correctAnswer: ,

//     }
//     ],
    
//     questionNumber: 0,
//     numQuestions: 10,
//     score: 0,
// }



// function generateQuestion(){
//     if (questionNumber < STORE.questions.length) {
//         return questionsHtml(questionNumber);
//     } else
// }

function questionNumber(){
}

function generateAnswers(){

}

function correctAnswer(){

}

function renderPage(){

}

function startPage(){

}

//function generate questions

function submitAnswer(){

}

function generateCurrentScore(){

}

function finalScore(){

}
//HTML
function startHtml(){
    let start=$('.start-container');
    start.html(`
    <section role="region" class="theBar">
        <section class="startQuiz box">
            <h1>How well do you know The Gang?</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/IASIPTC.svg" alt="It's always sunny in philadelphia banner" class="images">
            <div id="sizeImage">
                <button type="button" id= "start-button" class="startButton button">Start</button>
            </div> 
        </section>
    </section>`)
    console.log('hello');
}

function questionsHtml(){
    

}

function correctAnswerHtml(){

}

function wrongAnswerHtml(){

}

function finalScoreHtml(){

}

function startQuiz(){
    startHtml();
}

$(startQuiz);



