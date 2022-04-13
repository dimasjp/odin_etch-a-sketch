const gridContainer = document.querySelector('#gridContainer');
const buttons = document.querySelector('#buttons');
const clearButton = document.querySelector('.clearbtn');
const blackbtn = document.querySelector('.blackbtn');
const colorbtn = document.querySelector('.colorbtn');
const eraserbtn = document.querySelector('.eraserbtn');

const defaultColor = 'mono';
let currentColor = defaultColor;


function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows  = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const grids = document.createElement('div');
        grids.classList.add('grids');

        grids.style.backgroundColor = 'white';

        grids.addEventListener('mouseover', fillGrid);

        gridContainer.appendChild(grids);
    }
}

blackbtn.addEventListener('click', () => setCurrentColor('mono'));
colorbtn.addEventListener('click', () => setCurrentColor('rainbow'));
eraserbtn.addEventListener('click', () => setCurrentColor('eraser'));

function fillGrid(e) {
    if (currentColor === 'mono') {
        e.target.style.backgroundColor = 'black';
    } else if (currentColor === 'rainbow') {
        e.target.style.backgroundColor = 'red';
    } else if (currentColor === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}


function setCurrentColor(newColor) {
    currentColor = newColor;
}

clearButton.addEventListener('click', resetGrid);

// function clearGrid() {
//     while (gridContainer.hasChildNodes()) {
//         gridContainer.removeChild(gridContainer.firstChild);
//     }
//     createGrid(16)
// }

function resetGrid() {
    let promptCellSize = prompt("How big is the grid? (Max 100)");
    let size = parseInt(promptCellSize, 10);
    if (isNaN(size)) {
        window.alert("Whoops! You didn't enter anything.");
        return;
    }
    else if (size <= 0) {
        window.alert("You must enter a positive integer. (Max 100)");
        return;
    }
    else if (size > 100) {
        window.alert("Sorry! Maximum size is 100.");
        return;
    }

    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(size);
}




createGrid(16);