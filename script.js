const gridContainer = document.querySelector('#gridContainer');
const clearButton = document.querySelector('#clearbtn');
const gridFill = document.querySelector('.gridfill');



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


function fillGrid(e) {
    e.target.style.backgroundColor = 'black';
}

clearButton.addEventListener('click', clearGrid);

function clearGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(16)
}




createGrid(16);