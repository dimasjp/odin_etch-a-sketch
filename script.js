const gridContainer = document.querySelector('.gridContainer');


function createGrid(squares) {
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`

    for (let i = 0; i < squares * squares; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', fillGrid);
        gridContainer.appendChild(grid);
    }
}

function fillGrid() {
    this.style.backgroundColor = "black";
}

createGrid(16);