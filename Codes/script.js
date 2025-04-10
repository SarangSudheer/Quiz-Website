

document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector("form");

    // Signup and login validation
    if (form) {
        form.addEventListener("submit", function (e) {
            const email = document.getElementById("email").value.trim();
            const pwd = document.getElementById("pwd").value;
            const repwd = document.getElementById("repwd") ? document.getElementById("repwd").value : null;
            const username = document.getElementById("username") ? document.getElementById("username").value.trim() : null;

            if (!email || !pwd || (repwd !== null && !repwd) || (username !== null && !username)) {
                alert("All fields are required.");
                e.preventDefault();
                return;
            }

            if (repwd !== null && pwd !== repwd) {
                alert("Passwords do not match.");
                e.preventDefault();
                return;
            }

            if (pwd.length < 6) {
                alert("Password must be at least 6 characters.");
                e.preventDefault();
                return;
            }

        });
    }

    // Quiz logic
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit-btn");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
    const totalElement = document.getElementById("total");

    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");

    let selectedOptions = {};
    let questionsData = [];

    function loadQuestions(theme) {
        if (!quizThemes || !quizThemes[theme]) {
            quizContainer.innerHTML = "<p class='text-danger'>Invalid or missing quiz theme.</p>";
            return;
        }

        questionsData = quizThemes[theme];
        quizContainer.innerHTML = "";

        questionsData.forEach((question, index) => {
            const questionCard = document.createElement("div");
            questionCard.classList.add("question-card", "p-3", "shadow-sm", "bg-light", "rounded", "mb-3");

            questionCard.innerHTML = `<h5>${index + 1}. ${question.question}</h5>`;

            const optionsContainer = document.createElement("div");
            optionsContainer.classList.add("mt-2");

            question.options.forEach(option => {
                const button = document.createElement("button");
                button.classList.add("btn", "btn-outline-primary", "option-button", "m-1");
                button.textContent = option;

                button.addEventListener("click", () =>
                    handleOptionSelect(button, option, question.answer, index)
                );

                optionsContainer.appendChild(button);
            });

            questionCard.appendChild(optionsContainer);
            quizContainer.appendChild(questionCard);
        });

        totalElement.textContent = questionsData.length;
    }

    function handleOptionSelect(button, selectedOption, correctAnswer, index) {
        selectedOptions[index] = selectedOption;

        const buttons = button.parentElement.querySelectorAll(".option-button");
        buttons.forEach(btn => btn.classList.remove("selected", "btn-success", "btn-danger"));

        button.classList.add("selected");

        if (Object.keys(selectedOptions).length === questionsData.length) {
            submitButton.disabled = false;
        }
    }

    function saveQuizResult(theme, score, total) {
        const prevResults = JSON.parse(localStorage.getItem("quizResults")) || [];
        prevResults.unshift({
            theme: theme,
            score: score,
            total: total,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem("quizResults", JSON.stringify(prevResults));
    }
    

    function scoreCalculator() {
        let score = 0;

        Object.keys(selectedOptions).forEach(index => {
            let userAnswer = selectedOptions[index];
            let correctAnswer = questionsData[index].answer;

            const buttons = document.querySelectorAll(`.question-card:nth-child(${parseInt(index) + 1}) .option-button`);
            buttons.forEach(button => {

                button.disabled = true;

                if (button.textContent === correctAnswer) {
                    button.classList.add("border-4" , "border-success");
                } else {
                    button.classList.add("border-4" , "border-danger");
                }
            });

            if (userAnswer === correctAnswer) {
                score++;
            }
        });

        return score;
    }

    submitButton.addEventListener("click", () => {
        const score = scoreCalculator();
        const total = questionsData.length;
    
        scoreElement.textContent = score;
        resultContainer.classList.remove("d-none");
        submitButton.disabled = true;
    
        // Send score to DB
        const email = localStorage.getItem("email"); // Set this during login
        if (email) {
            fetch("save_score.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, theme, score, total })
            });
        }
    });

    if (theme) {
        loadQuestions(theme);
    } else {
        quizContainer.innerHTML = "<p class='text-danger'>No theme selected.</p>";
    }
});
