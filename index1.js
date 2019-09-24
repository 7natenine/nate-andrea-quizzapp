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
    }



    function startQuiz() {
        $('.startQuiz').on('click', '.startButton',
        function(event) {
    
            if (STORE.questionNumber >= 0) {
                $('questionBox').show
                $('.questionNumber').text('1')
                $('.questionBox').prepend(createHtml(returnQuestionNumber()));
                //generateQuestion() //+= $('.questionBox');
                console.log("red");
            }
            if(STORE.questionNumber > STORE.content.length){
                finalScore();
                $('.questionNumber').text('10');
            }
        });
        
    }


returnQuestionNumber(){
    
}


//run functions
function generateQuiz(){
    //list all functions here
    startScreen();
    startQuiz();
}


$(generateQuiz);