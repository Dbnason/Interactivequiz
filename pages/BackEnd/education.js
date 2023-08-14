const questions = [
    {
      question: "What is the capital of France?",
      answers: ["a. Paris", "b. London", "c. Tokyo", "d. Moscow"]
    },
    {
      question: "What is the capital of Spain?",
      answers: ["a. Madrid", "b. Barcelona", "c. Seville", "d. Granada"]
    },
    {
      question: "What is the capital of Germany?",
      answers: ["a. Munich", "b. Frankfort", "c. Berlin", "d. Hamburg"]
    },
    {
      question: "What is the capital of Italy?",
      answers: ["a. Venice", "b. Florence", "c. Naples", "d. Rome"]
    }
  ];
  
  const answerKey = ["a", "a", "c", "d"];
  
  var questionIndex = 0;
  var question = document.getElementById("insert");
  var userAnswer = document.getElementById("choices");
  const choiceButtons = document.querySelectorAll(".choice");
  const questionText = document.querySelectorAll(".description");
  const questionContainer = document.getElementById("containerQuestion");
  const submitButton = document.getElementById("submit");
  const continueButton = document.getElementById("continue");
  
  continueButton.addEventListener("click", () => {
    nextQuestion();
  });
  
  function handleChoiceClick(event) {
    const selectedButton = event.target;
  
    choiceButtons.forEach(button => {
      button.classList.remove("selected");
    });
  
    selectedButton.classList.add("selected");
  }
  
  choiceButtons.forEach(button => {
    button.addEventListener("click", handleChoiceClick);
  });
  
  function displayQuestionAndAnswers() {
    const currentQuestion = questions[questionIndex];
  
    question.textContent = currentQuestion.question;
  
    questionText.forEach((textElement, index) => {
      const answerText = currentQuestion.answers[index].substring(2); // Remove the prefix
      textElement.textContent = answerText;
    });
  
    submitButton.addEventListener("click", () => {
      checkAnswer();
    });
  }
  
  
  displayQuestionAndAnswers();
  
  function nextQuestion() {
    const resultContainer = document.getElementById("result");
  
    questionIndex++;
  
    if (questionIndex >= questions.length) {
      questionIndex = 0;
    }
  
    displayQuestionAndAnswers();
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector(".choice.selected");
    const resultContainer = document.getElementById("result");
  
    if (selectedAnswer) {
      const selectedAnswerText = selectedAnswer.textContent.trim();
      const selectedAnswerOption = selectedAnswerText.charAt(0);
      const correctAnswerOption = answerKey[questionIndex];
  
      if (selectedAnswerOption === correctAnswerOption) {
        resultContainer.textContent = "Yay! You were correct!";
      } else {
        resultContainer.textContent = `Aww, the right answer was "${correctAnswerOption}".`;
      }
    } else {
      resultContainer.textContent = "Please select an answer.";
    }
  
    resultContainer.removeAttribute("hidden");
    setTimeout(function() {
      resultContainer.setAttribute("hidden", "true");
    }, 1000);
  }
  