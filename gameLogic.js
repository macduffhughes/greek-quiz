// Game logic for Ancient Greek Future Tense Practice

const persons = ["1st", "2nd", "3rd"];
const numbers = ["singular", "plural", "dual"];
const personNumberMap = {
    "1st-singular": "1s", "2nd-singular": "2s", "3rd-singular": "3s",
    "2nd-dual": "2d", "3rd-dual": "3d",
    "1st-plural": "1p", "2nd-plural": "2p", "3rd-plural": "3p"
};

function generateFuture(base, person, number) {
    const key = `${person}-${number}`;
    return verbConjugations[base].future[personNumberMap[key]];
}

function initializeGame(state) {
    state.questions = [];
    state.startTime = Date.now();
    state.isRetrying = false;
    state.selectedLeft = null;
    state.selectedRight = null;
    state.matched = [];
    state.firstTryCorrect = 0;
    for (let i = 0; i < state.questionCount; i++) {
        const verb = state.verbs[Math.floor(Math.random() * state.verbs.length)];
        const person = persons[Math.floor(Math.random() * persons.length)];
        const numOptions = state.includeDual ? numbers : numbers.slice(0, 2);
        const number = numOptions[Math.floor(Math.random() * numOptions.length)];
        let question, answer;
        switch (state.exerciseType) {
            case "generate":
                question = `${verb}, ${person} person ${number}`;
                answer = generateFuture(verb, person, number);
                break;
            case "recognize":
                answer = `${verb}, ${person} person ${number}`;
                question = generateFuture(verb, person, number);
                break;
            case "rewrite-present":
                question = verbConjugations[verb].present[personNumberMap[`${person}-${number}`]];
                answer = generateFuture(verb, person, number);
                break;
            case "rewrite-future":
                question = generateFuture(verb, person, number);
                answer = verbConjugations[verb].present[personNumberMap[`${person}-${number}`]];
                break;
        }
        state.questions.push({ question, answer });
    }
}

function displayQuestion(state) {
    const q = state.questions[state.currentIndex];
    let prompt = "";
    switch (state.exerciseType) {
        case "generate":
            if (state.gameMode === "multiple-choice") {
                prompt = `Select the future for: <b>${q.question.split(", ")[0]}</b> ${q.question.split(", ")[1]}`;
            } else if (state.gameMode === "matching") {
                prompt = "Click an item from the left column, then click the matching item from the right column.";
            } else {
                prompt = `Type the future for: <b>${q.question.split(", ")[0]}</b> ${q.question.split(", ")[1]}`;
            }
            break;
        case "recognize":
            if (state.gameMode === "multiple-choice") {
                prompt = `Choose the base verb and case/number for: <b>${q.question}</b>`;
            } else if (state.gameMode === "matching") {
                prompt = "Click an item from the left column, then click the matching item from the right column.";
            } else {
                prompt = `Type the base verb and case/number for: <b>${q.question}</b>`;
            }
            break;
        case "rewrite-present":
            if (state.gameMode === "multiple-choice") {
                prompt = `Choose the future form for: <b>${q.question}</b>`;
            } else if (state.gameMode === "matching") {
                prompt = "Click an item from the left column, then click the matching item from the right column.";
            } else {
                prompt = `Type the future form for: <b>${q.question}</b>`;
            }
            break;
        case "rewrite-future":
            if (state.gameMode === "multiple-choice") {
                prompt = `Choose the present form for: <b>${q.question}</b>`;
            } else if (state.gameMode === "matching") {
                prompt = "Click an item from the left column, then click the matching item from the right column.";
            } else {
                prompt = `Type the present form for: <b>${q.question}</b>`;
            }
            break;
    }
    document.getElementById("question").innerHTML = prompt;
    document.getElementById("progress").textContent = `Question ${state.currentIndex + 1} of ${state.questionCount}`;
    document.getElementById("feedback").textContent = "";
    document.getElementById("input").value = "";

    if (state.gameMode === "multiple-choice") {
        const choices = [q.answer];
        while (choices.length < 5) {
            const other = state.questions[Math.floor(Math.random() * state.questions.length)].answer;
            if (!choices.includes(other)) choices.push(other);
        }
        shuffleArray(choices);
        document.getElementById("choices").innerHTML = choices.map(c => `<button onclick="checkAnswer('${c}', gameState)">${c}</button>`).join("");
        document.getElementById("choices").style.display = "block";
        document.getElementById("input-area").style.display = "none";
        document.getElementById("matching").style.display = "none";
    } else if (state.gameMode === "matching") {
        const left = state.questions.map((q, i) => ({ id: i, text: q.question }));
        const right = state.questions.map((q, i) => ({ id: i, text: q.answer }));
        shuffleArray(right);
        document.getElementById("matching-left").innerHTML = left.map(item => 
            `<div class="match-item${state.matched.includes(item.id) ? ' correct' : ''}" data-id="${item.id}" onclick="selectItem(this, 'left')">${item.text}</div>`
        ).join("");
        document.getElementById("matching-right").innerHTML = right.map(item => 
            `<div class="match-item${state.matched.includes(item.id) ? ' correct' : ''}" data-id="${item.id}" onclick="selectItem(this, 'right')">${item.text}</div>`
        ).join("");
        document.getElementById("choices").style.display = "none";
        document.getElementById("input-area").style.display = "none";
        document.getElementById("matching").style.display = "flex";
    } else {
        document.getElementById("choices").style.display = "none";
        document.getElementById("input-area").style.display = "block";
        document.getElementById("matching").style.display = "none";
    }
}

function checkAnswer(userAnswer, state) {
    let correctAnswer = state.questions[state.currentIndex].answer;
    const baseAnswer = correctAnswer.replace(/\(ν\)$/, "");
    const nuAnswer = baseAnswer + "ν";
    const isCorrect = userAnswer === correctAnswer || userAnswer === baseAnswer || userAnswer === nuAnswer || 
                      (state.fuzzyMatch && (isNearMatch(userAnswer, correctAnswer) || isNearMatch(userAnswer, baseAnswer) || isNearMatch(userAnswer, nuAnswer)));
    let feedback = "";

    if (isCorrect) {
        if (!state.isRetrying) state.firstTryCorrect++;
        feedback = "καλός!";
        state.isRetrying = false;
        state.currentIndex++;
        setTimeout(() => loadNextQuestion(), 1000);
    } else {
        feedback = `Incorrect. The correct answer is "${correctAnswer}".`;
        if (state.gameMode === "multiple-choice" || state.gameMode === "free-typing") {
            state.isRetrying = true;
        } else {
            document.getElementById("feedback").textContent = feedback;
        }
    }
    document.getElementById("feedback").innerHTML = feedback;
}

function selectItem(element, side) {
    if (element.classList.contains("correct")) return;

    const state = gameState;
    const id = parseInt(element.getAttribute("data-id"));

    if (side === "left") {
        if (state.selectedLeft === id) {
            element.classList.remove("selected");
            state.selectedLeft = null;
        } else {
            state.selectedLeft = id;
            element.classList.add("selected");
        }
    } else {
        if (state.selectedRight === id) {
            element.classList.remove("selected");
            state.selectedRight = null;
        } else {
            state.selectedRight = id;
            element.classList.add("selected");
        }
    }

    if (state.selectedLeft !== null && state.selectedRight !== null) {
        if (state.selectedLeft === state.selectedRight) {
            const leftItem = document.querySelector(`#matching-left .match-item[data-id="${state.selectedLeft}"]`);
            const rightItem = document.querySelector(`#matching-right .match-item[data-id="${state.selectedRight}"]`);
            leftItem.classList.remove("selected");
            rightItem.classList.remove("selected");
            leftItem.classList.add("correct");
            rightItem.classList.add("correct");
            state.matched.push(state.selectedLeft);
            document.getElementById("feedback").textContent = "Correct!";
            if (state.matched.length === state.questions.length) {
                setTimeout(() => endGame(), 1000);
            }
            state.selectedLeft = null;
            state.selectedRight = null;
        } else {
            document.getElementById("feedback").textContent = "Incorrect.";
            setTimeout(() => {
                document.querySelectorAll("#matching-left .match-item.selected").forEach(item => item.classList.remove("selected"));
                document.querySelectorAll("#matching-right .match-item.selected").forEach(item => item.classList.remove("selected"));
                state.selectedLeft = null;
                state.selectedRight = null;
                document.getElementById("feedback").textContent = "";
            }, 1000);
        }
    }
}

function endGame() {
    const elapsed = (Date.now() - gameState.startTime) / 1000;
    const percentCorrect = (gameState.firstTryCorrect / gameState.questionCount * 100).toFixed(1);
    document.getElementById("game").innerHTML = `
        <h2>Game Over!</h2>
        <p>${gameState.gameMode === "matching" ? `Time: ${elapsed} seconds` : `Score: ${percentCorrect}% (${gameState.firstTryCorrect}/${gameState.questionCount})`}</p>
        <button onclick="location.reload()">Play Again</button>
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}