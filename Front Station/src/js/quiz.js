document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');
    const nextBtn = document.getElementById('next');
    const resultContainer = document.getElementById('result');
    const questions = [
        {
            question: "Qual é considerado o primeiro computador eletrônico?",
            choices: ["ENIAC", "Colossus", "UNIVAC", "IBM 360"],
            correctAnswer: "ENIAC"
        },
        {
            question: "Quem é considerado o pai da computação?",
            choices: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Bill Gates"],
            correctAnswer: "Charles Babbage"
        },
        {
            question: "Qual foi o primeiro computador pessoal amplamente vendido?",
            choices: ["Apple I", "IBM PC", "Commodore 64", "Altair 8800"],
            correctAnswer: "Altair 8800"
        },
        {
            question: "Qual linguagem de programação foi criada por Ada Lovelace?",
            choices: ["FORTRAN", "COBOL", "Ada", "Lovelace"],
            correctAnswer: "Ada"
        },
        {
            question: "Qual empresa lançou o primeiro sistema operacional gráfico?",
            choices: ["Apple", "Microsoft", "Xerox", "IBM"],
            correctAnswer: "Xerox"
        },
        {
            question: "Em que ano foi lançado o Windows 95?",
            choices: ["1990", "1995", "2000", "2001"],
            correctAnswer: "1995"
        },
        {
            question: "Quem desenvolveu o conceito de 'máquina universal'?",
            choices: ["Charles Babbage", "Alan Turing", "John von Neumann", "Konrad Zuse"],
            correctAnswer: "Alan Turing"
        },
        {
            question: "Qual empresa criou o processador Intel 4004, o primeiro microprocessador comercial?",
            choices: ["AMD", "Intel", "IBM", "Texas Instruments"],
            correctAnswer: "Intel"
        },
        {
            question: "Qual foi o nome do primeiro mouse de computador?",
            choices: ["X-Y Position Indicator", "Computer Rodent", "Pointing Device", "Trackball"],
            correctAnswer: "X-Y Position Indicator"
        },
        {
            question: "Quem fundou a Microsoft?",
            choices: ["Steve Jobs", "Bill Gates", "Steve Wozniak", "Linus Torvalds"],
            correctAnswer: "Bill Gates"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        choicesContainer.innerHTML = '';

        currentQuestion.choices.forEach(function(choice, index) {
            const choiceElement = document.createElement('button');
            choiceElement.classList.add('choice');
            choiceElement.innerHTML = `<span>${String.fromCharCode(65 + index)}.</span> ${choice}`;
            choiceElement.addEventListener('click', function() {
                checkAnswer(choice);
            });
            choicesContainer.appendChild(choiceElement);
        });
    }

    function checkAnswer(answer) {
        const currentQuestion = questions[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.textContent = `Você acertou ${score} de ${questions.length} questões.`;
    }

    showQuestion();

    nextBtn.addEventListener('click', function() {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
});
