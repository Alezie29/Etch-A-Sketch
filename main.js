const container = document.querySelector('#container')
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.style.width = `${100 / gridSize}%`;
    cell.style.height = `${100 / gridSize}%`;
});

const hover = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'Black';
    });
});