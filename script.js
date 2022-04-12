const gridContainer = document.querySelector('#gridContainer');
const buttons = document.querySelector('#buttons');
const clearButton = document.querySelector('.clearbtn');
const blackbtn = document.querySelector('.blackbtn');
const colorbtn = document.querySelector('.colorbtn');
const eraserbtn = document.querySelector('.eraserbtn');

const defaultColor = 'bnw';
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

blackbtn.addEventListener('click', () => setCurrentColor('bnw'));
colorbtn.addEventListener('click', () => setCurrentColor('rainbow'));
eraserbtn.addEventListener('click', () => setCurrentColor('eraser'));

function fillGrid(e) {
    if (currentColor === 'bnw') {
        e.target.style.backgroundColor = 'black';
    } else if (currentColor === 'rainbow') {
        e.target.style.backgroundColor = 'red';
    } else if (currentColor === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}


function setCurrentColor(newMode) {
    currentColor = newMode;
}

clearButton.addEventListener('click', clearGrid);

function clearGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(16)
}




createGrid(16);