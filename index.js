//Question array
'use strict';
const STORE = {

content: [
    {
        questions: 'Which character said: \'I don’t know how many years I got left on this planet, I’m going to get real weird with it\'',
        answers: ['Frank Reynolds', 
        'Mac',
        'The Waitress',
        'Dennis'
        ],
        correctAnswer: 'Frank Reynolds',
    },
    {
        questions: 'What was Dee\'s nickname in high school?',
        answers: ['Dumb Dee Dee',
        'Toothpick',
        'Aluminum Monster',
        'Peaches'
        ],
        correctAnswer: 'Aluminum Monster',
    },
    {
        questions: 'The thunder of my vengeance will echo through these corridors like the gusts of a thousand winds!',
        answers: [
            'Artemis', 
            'Charlie’s mom', 
            'Frank', 
            'Dennis'
        ],
        correctAnswer: 'Dennis',
    },
    {
        questions: 'What restaurant does Mac repeatedly try to use his Dave and Buster\'s power card at?',
        answers: [
            'TGI Fridays', 
            'Denny\’s', 
            'Ihop', 
            'Red Robin'
        ],
        correctAnswer: 'TGI Fridays',

    },
    {
        questions: 'Which character said: \'I\’m not fat, I’m cultivating mass\'',
        answers: [
            'Charlie',
            'Frank', 
            'Dee', 
            'Mac'
        ],
        correctAnswer: 'Mac',
    },
    {
        questions: 'What does Frank claim his nickname was back when he was a boxer?',
        answers: [
            'Frank the Tank',
            'Frankie Ali', 
            'Frankie Fast Hands', 
            'Butterfly Hands'
        ],
        correctAnswer: 'Frankie Fast Hands',
    },
    {
        questions: 'Which character does not appear in season one?',
        answers: [
            'The waitress', 
            'Frank', 
            'Dee', 
            'Mac',
        ],
        correctAnswer: 'Frank',
    },
    {
        questions: 'Which of these does Charlie consider one of his dislikes?',
        answers: [
            'People’s knees',
            'Lobster tails', 
            'Helmets', 
            'Egg Shells'
        ],
        correctAnswer: 'People’s knees',

        
    },
    {
        questions: 'What is Mac’s first name?',
        answers: [
            'Conrad', 
            'Ronald',
            'Benjamin', 
            'Frank'
        ],
        correctAnswer: 'Ronald',

    },
    {
        questions: 'What names do Dennis and Mac give themselves when they\'re posing as realtors?',
        answers: [
            'Sugar and Spice', 
            'Jekyll and Hide',
            'Honey and Vinegar', 
            'Lemon and Lime'
        ],
        correctAnswer:  'Honey and Vinegar',
    }],
questionNumber: 0,
numQuestions: 10, 
score: 0
    
};

//Generate start screen
function startScreen(){
    let begin = $('#container');
    begin.html(`
    <main>
    <section>
    <a href="index.html">
        <img class="theGang" src="https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/jv6d2fdu0t6fn16vqpmu/always-sunny-in-philadelphia" alt="The characters of the show all together"/>
    </a>
</section>
<section>
    <ul>
        <li class="sizeMe">Question:
            <span class="questionNumber">0</span>/10</li>
        <li class="sizeMe">Score:
        <span class="score">0</span>
        </li>
    </ul>
</section>
</header>
<section role="region" class="theBar">
    <section class="startQuiz box">
        <h1>How well do you know The Gang?</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/IASIPTC.svg" alt="It's always sunny in philadelphia banner" class="images">
        <div id="sizeImage">
            <button type="button" id= "start-button" class="startButton button">Start</button>
        </div> 
    </section>
    <section class="questionBox box altBox"></section>
    <section class="response box altBox"></section>
    <section class="final box altBox"></section>
</section>
</main>`
)
startQuiz();
}




//creating HTML for form
function createHtml(questionIndex){

    //console.log(questionIndex);

    let formStruc = $(`<form>
        <fieldset> 
            <legend class ="questionText">${STORE.content[questionIndex].questions}</legend>
        <fieldset>
    </form>`)

    let fieldSelector = $(formStruc).find('fieldset');

    STORE.content[questionIndex].answers.forEach(function(ansValue, ansIndex){
        $(`<label class="sizeMe" for="${ansIndex}">
            <input class="radio" type="radio" 
            id="${ansIndex}" value="${ansValue}"
            name="answer" required>
            <span>${ansValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button">
    Submit</button>`).appendTo(fieldSelector);
    return formStruc;
}


//Generate each question
function generateQuestion(){
    if(STORE.questionNumber < STORE.content.length ){
        return STORE.questionNumber;
    }
    else { 
        finalScore();
    }
    
}


//Updating the current score
function updateScore(){
    STORE.score++;
    $('.score').text(STORE.score);
    console.log('hi');
}

//Updating question number
function updateQuestionNumber(){
    STORE.questionNumber++;
    $('.questionNumber').text
    (STORE.questionNumber +1);
}

//Reseting quizz
function resetStats(){
    STORE.score = 0;
    STORE.questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
}

function startQuiz() {
    $('.startQuiz').on('click', '.startButton',
    function(event) {
        if (STORE.questionNumber >= 0) {
            $('questionBox').show
            $('.questionNumber').text(1)
            $('.questionBox').prepend(generateQuestion());
            //generateQuestion() //+= $('.questionBox');
            console.log("red");
        }
        if(STORE.questionNumber > STORE.content.length){
            finalScore();
            $('.questionNumber').text(10);
        }
        // $('.startQuiz').hide;
        // $('.questionNumber').text(1);
        // $('questionBox').show;
        // $('.questionBox').prepend(generateQuestion());
        // //console.log('hello');
    });
    
}

//Submit answer
function submitAnswer(){
    $('.theBar').on('submit',function (event){
        event.preventDefault();
        //$('.response').style.display = 'block';
        $('.response').show;
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = STORE[questionNumber].correctAnswer;

        if (answer === correct) {
            correctAnswer();
          } else {
            wrongAnswer();
          }
    });    
}


//correct answer
function correctAnswer(){
    $('.response').html(
        `<h3>Correct!!</h3>
        <img src="https://preview.redd.it/ttsrz526zi811.jpg?auto=webp&s=8e82aac0eec65d8ab81dcc724552c6b8db39e7ff" alt="Happy Charlie" class="images" width="200px">
          <p class="sizeMe">You're a true fan!</p>
          <button type="button" class="nextButton button">Next</button>`
      );
      updateScore();
      console.log('hi');

}

//wrong answer
function wrongAnswer(){

    $('.response').html(
        `<h3>Incorrect!</h3>
        <img src="https://pbs.twimg.com/media/C1yMJ0AUAAA-PZO.jpg:large" alt="Frank dissapointed" class="images" width="200px">
        <p class="sizeMe">The correct response is:</p>
        <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
        <button type="button" class="nextButton button">Next</button>`
      );


}

//next question
function nextQuestion(){
    $('.thebar').on('click', '.nextButton',
    function (event) {
        $('.questionBox').show;
        updateQuestionNumber();
        $('.questionBox form').replaceWith(generateQuestion());
    });
}

//Gives final score
function finalScore(){
$('.final').css('display', 'block');
//$('.final').show;

  const great = [
    'Nice job Champ!',
    'http://cdn.collider.com/wp-content/uploads/2011/06/its-always-sunny-in-philadelphia-image-2.jpg',
    'Dennis dancing',
    'How many hours have you spent watching this show?!'
  ];

  const good = [
    'Good, but you can do better!',
    'https://images.static-bluray.com/reviews/8734_5.jpg',
    'The gang raising their hands',
    'You should watch the show more'
  ];

  const bad = [
    'Have you ever seen the show?',
    'https://pmcdeadline2.files.wordpress.com/2016/04/its-always-sunny-in-philadelphia.jpg?w=630&h=383&crop=1',
    'The gang is mad',
    'Please watch a few episodes right now.'
  ];
  let array= [];

  if (STORE.score >= 8) {
    array = great;
  } else if (STORE.score < 8 && STORE.score >= 5) {
    array = good;
  } else {
    array = bad;
  }
  return $('.final').html(
    `<h3>${array[0]}</h3>
      <img src="${array[1]}" alt="${array[2]}" class="images">
        <h3>Your score is ${STORE.score} / 10</h3>
        <p class="sizeMe">${array[3]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}

//Restart quiz
function restartQuiz(){
$('.thebar').on('click', '.restartButton', function (event){
event.preventDefault();
resetStats();
//$('.startQuiz').style.display = 'block';
$('.startQuiz').show;
});
}

//run functions
function generateQuiz(){
    //list all functions here
    startScreen();
    startQuiz();
}
//     generateQuestion();
//     submitAnswer();
//     nextQuestion();
//     restartQuiz();
// }

$(generateQuiz);

