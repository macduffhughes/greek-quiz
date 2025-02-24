// Client-side state management for Greek Quiz

function saveState(selectedSections, order, completed, wrong, currentIndex, isReviewPass) {
    const state = {
        selectedSections: selectedSections,
        order: order,
        completed: completed,
        wrong: wrong,
        currentIndex: currentIndex,
        isReviewPass: isReviewPass
    };
    localStorage.setItem("greekQuizState", JSON.stringify(state));
}

function loadState() {
    const state = localStorage.getItem("greekQuizState");
    return state ? JSON.parse(state) : null;
}

function clearState() {
    localStorage.removeItem("greekQuizState");
}