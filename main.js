'use strict';
//Questions
const STORE= {
   questions: [
   {
       question:'Which character said: \'I don’t know how many years I got left on this planet, I’m going to get real weird with it\'',
       answers: ['Frank',
       'Mac',
       'The Waitress',
       'Dennis'
       ],
       correctAnswer: 'Frank',
 
   },
   {
       question:'What was Dee\'s nickname in high school?',
       answers: ['Dumb Dee Dee',
       'Toothpick',
       'Aluminum Monster',
       'Peaches'
       ],
       correctAnswer: 'Aluminum Monster',
 
   },
   {
       question: 'What restaurant does Mac repeatedly try to use his Dave and Buster\'s power card at?',
       answers: ['TGI Fridays',
       'Denny\’s',
       'Ihop',
       'Red Robin'
        ],
       correctAnswer: 'TGI Fridays',
 
   },
   {
       question: 'Which character said: \'I\’m not fat, I’m cultivating mass\'',
       answers: [
           'Charlie',
           'Frank',
           'Dee',
           'Mac'
       ],
       correctAnswer: 'Mac',
 
   },
   {
       question:'What does Frank claim his nickname was back when he was a boxer?',
       answers: [
           'Frank the Tank',
           'Frankie Ali',
           'Frankie Fast Hands',
           'Butterfly Hands'
       ],
       correctAnswer: 'Frankie Fast Hands',
 
   },
   {
       question:'Which of these does Charlie consider one of his dislikes?',
       answers: [
           'People’s knees',
           'Lobster tails',
           'Helmets',
           'Egg Shells'
       ],
       correctAnswer: 'People’s knees',
 
   },
   {
       question:'What names do Dennis and Mac give themselves when they\'re posing as realtors?',
       answers: [
           'Sugar and Spice',
           'Jekyll and Hide',
           'Honey and Vinegar',
           'Lemon and Lime'
       ],
       correctAnswer:  'Honey and Vinegar',
 
   }
   ],
  
   questionNumber: 0,
   numQuestions: 10,
   score: 0,
   correctAnswers: 0,
}
 
 
 
function generateQuestion(question=STORE.questionNumber){
    if (questionNumber < STORE.questions.length) {
        return questionsHtml(questionNumber); 
    } 
    else
        finalScore();
}
 
function questionNumber(){
 
}
 
function generateAnswers(){
 
}
 
function generateCorrectAnswer(){
 
}
 
function renderPage(){
    if(STORE.questionNumber === 0){
        startPage();
        return;
    }

    if(STORE.questionNumber > STORE.numQuestions){
        finalScore();
        return;
    }

    else if{
        generateCurrentScore();
    }

    else if{
    generateAllQuestions();
    }
 
}
 
function startPage(){
    startHtml();

    $('.startButton').on('click', function(event){
        event.preventDefault();
        STORE.questionNumber++;
        renderPage();
    });
}
 
function generateAllQuestions(){
    let questions = questionsHtml();
    $('.questions').html(questions);

    
}
 
function submitAnswer(){
 
}
 
function generateCurrentScore(){
    let scores = getScoreHtml()
    $('.scores').html(scores);
}
 
function getScoreHtml(){
    return `<h2>Your current score is ${STORE.correctAnswer}/${STORE.numQuestions}</h2>` 
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
   //console.log('hello');
}
 
function questionsHtml(questionNumber=STORE.questionNumber){
    console.log("here");
   let options = generateAllQuestions().map.on((ansValue, ansIndex) => {
       return `<li class='ansVal>
                   <input class="radio" type="radio" id="${ansIndex +1}" value="${ansValue}" name="answer" required>
                   <label class="sizeMe" for="${ansIndex}"></label>
               </li>`
   });
   options = options.toString();
 
   let questionsHtml2 =
   `<h2 class='question-number'>Question ${questionNumber} / ${STORE.questions.length}</h2>
    <form>
    <fieldset>
       <h3>${generateQuestion()}</h3>
       <ul> $(options)</ul>
    <fieldset>
    <button type="submit" class="submitButton button">Submit</button>
    </form>`;
    return questionsHtml2;
}
 
function correctAnswerHtml(){
   return `<h3>Correct!!</h3>
       <img src="https://preview.redd.it/ttsrz526zi811.jpg?auto=webp&s=8e82aac0eec65d8ab81dcc724552c6b8db39e7ff" alt="Happy Charlie" class="images" width="200px">
         <p class="sizeMe">You're a true fan!</p>
         <button type="button" class="nextButton button">Next</button>`
}
 
function wrongAnswerHtml(questionNumber=STORE.questionNumber){
   `<h3>Incorrect!</h3>
       <img src="https://pbs.twimg.com/media/C1yMJ0AUAAA-PZO.jpg:large" alt="Frank dissapointed" class="images" width="200px">
       <p class="sizeMe">The correct response is:</p>
       <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
       <button type="button" class="nextButton button">Next</button>`
 
}
 
function finalScoreHtml(){
 
}
 
function startQuiz(){
   renderPage();
}
 
$(startQuiz);
