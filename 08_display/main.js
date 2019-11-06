document.getElementById('display-none').addEventListener('click', displayNone);
document.getElementById('visibility-hidden').addEventListener('click', visibilityHidden);
document.getElementById('reset').addEventListener('click', reset);

function displayNone() {
    document.getElementById('display-none').style.display = 'none';
}

function visibilityHidden() {
    document.getElementById('visibility-hidden').style.visibility = 'hidden';
}

function reset() {
    document.getElementById('display-none').style.display = 'block';
    document.getElementById('visibility-hidden').style.visibility = 'visible';
}
