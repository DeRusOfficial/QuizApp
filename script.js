let questions = [
    {
        "question": "Was ist die Hauptfunktion eines Betriebssystems?",
        "answer_1": "Dokumente automatisch speichern",
        "answer_2": "Internetverbindungen beschleunigen",
        "answer_3": "Hardwarekomponenten steuern und Ressourcen verwalten",
        "answer_4": "Grafiken für Spiele rendern",
        "rightAnswer": "answer_3"
    },
    {
        "question": "Welches dieser Konzepte ist ein grundlegendes Prinzip der objektorientierten Programmierung?",
        "answer_1": "Vererbung",
        "answer_2": "Lineare Suche",
        "answer_3": "Globaler Variableneinsatz",
        "answer_4": "Prozedurale Programmierung",
        "rightAnswer": "answer_1"
    },
    {
        "question": "Was beschreibt der Begriff 'Big O Notation' in der Informatik?",
        "answer_1": "Die Größe eines Datenspeichers",
        "answer_2": "Die Laufzeitkomplexität eines Algorithmus",
        "answer_3": "Die Version eines Betriebssystems",
        "answer_4": "Die Geschwindigkeit einer Internetverbindung",    
        "rightAnswer": "answer_2"
    },
    {
        "question": "Welches Protokoll wird typischerweise für die sichere Übertragung von Daten im Internet verwendet?",
        "answer_1": "FTP",
        "answer_2": "HTTP",
        "answer_3": "SMTP",
        "answer_4": "HTTPS",    
        "rightAnswer": "answer_4"
    },
    {
        "question": "Was ist ein 'Stack' in der Informatik?",
        "answer_1": "Eine Datenstruktur nach dem LIFO-Prinzip",
        "answer_2": "Ein spezieller Typ einer Datenbank",
        "answer_3": "Ein Algorithmus zur Sortierung",
        "answer_4": "Ein Maß für die Rechenleistung",    
        "rightAnswer": "answer_1"
    }
];



let currentQuestion = 0;
let amountOfRightAnswers = 0;
let percent;

function init() {
    document.getElementById('quantity').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style.display = 'flex';
        document.getElementById('question-body').style.display = 'none';
        document.getElementById('question-amount').innerHTML = questions.length;
        document.getElementById('right-question-amount').innerHTML = amountOfRightAnswers;
        percent = 100;
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    } else {
        percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}



function answer(selection) {
    let question = questions[currentQuestion];
    let rightAnswerOfQuestion = question.rightAnswer;

    if (selection === rightAnswerOfQuestion) {
        document.getElementById(selection).parentElement.classList.add('bg-success');
        amountOfRightAnswers++;
    } else {
        document.getElementById(selection).parentElement.classList.add('bg-danger');
        document.getElementById(rightAnswerOfQuestion).parentElement.classList.add('bg-success');
    }
    document.getElementById('next-btn').disabled = false;
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