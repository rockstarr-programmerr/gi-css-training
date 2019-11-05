document.getElementById('adjacent-sibling-selector-btn').addEventListener('click', showAnswerAdjacent);

function showAnswerAdjacent() {
    document.getElementById('adjacent-sibling-selector-answer').style.display = 'inline';
    document.getElementById('adjacent-sibling-selector-btn').style.display = 'none';
}

document.getElementById('general-sibling-selector-btn').addEventListener('click', showAnswerGeneral);

function showAnswerGeneral() {
    document.getElementById('general-sibling-selector-answer').style.display = 'inline';
    document.getElementById('general-sibling-selector-btn').style.display = 'none';
}
