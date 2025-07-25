let currentQuestion = 0;
let amountOfRightAnswers = 0;
let percent;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');



function init() {
    document.getElementById('quantity').innerHTML = questions.length;
    showQuestion();
}



function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

//If requirement true - end screen will be shown
function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style.display = 'flex';
    document.getElementById('question-body').style.display = 'none';
    document.getElementById('question-amount').innerHTML = questions.length;
    document.getElementById('right-question-amount').innerHTML = amountOfRightAnswers;
    percent = 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}



function answer(selection) {
    let question = questions[currentQuestion];
    let rightAnswerOfQuestion = question.rightAnswer;

    if (selectedRightAnswer(selection,rightAnswerOfQuestion)) {
        pointOutRightAnswer(selection);
    } else {
        pointOutWrongAnswer(selection, rightAnswerOfQuestion);
    }
    document.getElementById('next-btn').disabled = false;
}

function selectedRightAnswer(selection,rightAnswerOfQuestion) {
    return selection === rightAnswerOfQuestion;
}

function pointOutRightAnswer(selection) {
    document.getElementById(selection).parentElement.classList.add('bg-success');
    amountOfRightAnswers++;
    AUDIO_SUCCESS.play();
}

//If you do not write "rightAnswerOfQuestion", the customer can select until he chooses the correct answer
function pointOutWrongAnswer(selection, rightAnswerOfQuestion) {
    document.getElementById(selection).parentElement.classList.add('bg-danger');
    document.getElementById(rightAnswerOfQuestion).parentElement.classList.add('bg-success');
    AUDIO_FAIL.play();
}



function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-btn').disabled = true;   
    resetAnswerBg();
    init();
}



function resetAnswerBg() {
    document.getElementById('answer_1').parentElement.classList.remove('bg-success');
    document.getElementById('answer_1').parentElement.classList.remove('bg-danger');
    document.getElementById('answer_2').parentElement.classList.remove('bg-success');
    document.getElementById('answer_2').parentElement.classList.remove('bg-danger');
    document.getElementById('answer_3').parentElement.classList.remove('bg-success');
    document.getElementById('answer_3').parentElement.classList.remove('bg-danger');
    document.getElementById('answer_4').parentElement.classList.remove('bg-success');
    document.getElementById('answer_4').parentElement.classList.remove('bg-danger');
}



function restartGame() {
    currentQuestion = 0;
    amountOfRightAnswers = 0;
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('question-body').style.display = '';
    init();
}