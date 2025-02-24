// Near-match detection and highlighting for Ancient Greek quiz

function isNearMatch(userAnswer, correctAnswer) {
    // Define characters to strip: accents, breathings, and terminal punctuation
    const diacritics = /[\u0300-\u036F\u0374-\u0375\u037A-\u037E\u0384-\u0385\u1FBD-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF]/g;
    const terminalPunctuation = /[\u00B7\u037E\u002E]$/g; // Greek middle dot (·), question mark (;), period (.)

    // Normalize by removing diacritics and terminal punctuation
    const stripMarks = str => str
        .normalize("NFD") // Decompose to separate base characters and diacritics
        .replace(diacritics, "") // Remove accents and breathings
        .replace(terminalPunctuation, ""); // Remove terminal punctuation

    const userStripped = stripMarks(userAnswer);
    const correctStripped = stripMarks(correctAnswer);

    // If stripped versions match, it’s a near-match
    return userStripped === correctStripped && userAnswer !== correctAnswer;
}

function highlightDifferences(userAnswer, correctAnswer) {
    let userHighlighted = "";
    let correctHighlighted = "";
    const maxLength = Math.max(userAnswer.length, correctAnswer.length);

    // Define diacritic and punctuation ranges for highlighting
    const isDiacriticOrPunctuation = char => /[\u0300-\u036F\u0374-\u0375\u037A-\u037E\u0384-\u0385\u1FBD-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u00B7\u037E\u002E]/.test(char);

    for (let i = 0; i < maxLength; i++) {
        const userChar = userAnswer[i] || "";
        const correctChar = correctAnswer[i] || "";
        if (userChar !== correctChar) {
            // Bold only if it’s a diacritic or punctuation difference
            if (isDiacriticOrPunctuation(userChar) || isDiacriticOrPunctuation(correctChar)) {
                userHighlighted += `<b>${userChar}</b>`;
                correctHighlighted += `<b>${correctChar}</b>`;
            } else {
                userHighlighted += userChar;
                correctHighlighted += correctChar;
            }
        } else {
            userHighlighted += userChar;
            correctHighlighted += correctChar;
        }
    }
    return { user: userHighlighted, correct: correctHighlighted };
}