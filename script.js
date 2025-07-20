let questions = [
    {
        "question": "Was ist die Hauptfunktion eines Betriebssystems?",
        "answers": [
            "Dokumente automatisch speichern",
            "Internetverbindungen beschleunigen",
            "Hardwarekomponenten steuern und Ressourcen verwalten",
            "Grafiken für Spiele rendern"
            ],
        "rightAnswer": 2
    },
    {
        "question": "Welches dieser Konzepte ist ein grundlegendes Prinzip der objektorientierten Programmierung?",
        "answers": [
            "Vererbung",
            "Lineare Suche",
            "Globaler Variableneinsatz",
            "Prozedurale Programmierung"
            ],
        "rightAnswer": 0
    },
    {
        "question": "Was beschreibt der Begriff 'Big O Notation' in der Informatik?",
        "answers": [
            "Die Größe eines Datenspeichers",
            "Die Laufzeitkomplexität eines Algorithmus",
            "Die Version eines Betriebssystems",
            "Die Geschwindigkeit einer Internetverbindung"
            ],
        "rightAnswer": 1
    },
    {
        "question": "Welches Protokoll wird typischerweise für die sichere Übertragung von Daten im Internet verwendet?",
        "answers": [
            "FTP",
            "HTTP",
            "SMTP",
            "HTTPS"
            ],
        "rightAnswer": 3
    },
    {
        "question": "Was ist ein 'Stack' in der Informatik?",
        "answers": [
            "Eine Datenstruktur nach dem LIFO-Prinzip",
            "Ein spezieller Typ einer Datenbank",
            "Ein Algorithmus zur Sortierung",
            "Ein Maß für die Rechenleistung"
            ],
        "rightAnswer": 0
    }
];



let currentQuestion = 0;

function init() {
    document.getElementById('quantity').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answers[0];
    document.getElementById('answer_2').innerHTML = question.answers[1];
    document.getElementById('answer_3').innerHTML = question.answers[2];
    document.getElementById('answer_4').innerHTML = question.answers[3];
}