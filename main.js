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
    let mouseDown = false;

    cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
        mouseDown = true;
        cell.style.backgroundColor = 'black';
    });
    
    cell.addEventListener('mousemove', () => {
        if (mouseDown) {
        cell.style.backgroundColor = 'black';
        }
    });
    
    cell.addEventListener('mouseup', () => {
        mouseDown = false;
    });
    });
});

function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';
      // Create a new grid
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }

    // Set the size of the cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.style.width = `${100 / size}%`;
      cell.style.height = `${100 / size}%`;
    });

      // Add event listeners to change the cell color on hover
  cells.forEach(cell => {
    let mouseDown = false;

    cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
        mouseDown = true;
        cell.style.backgroundColor = 'black';
    });
    
    cell.addEventListener('mousemove', () => {
        if (mouseDown) {
        cell.style.backgroundColor = 'black';
        }
    });
    
    cell.addEventListener('mouseup', () => {
        mouseDown = false;
    });
});
  });
}
// Get the "New Grid" button
const newGridBtn = document.querySelector('#newGrid');

// Add an event listener to the "New Grid" button
newGridBtn.addEventListener('click', () => {
  // Get the size from the user input
  const size = parseInt(prompt('Enter the size of the new grid (max 100): '));
  
  // Check if the size is valid
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Invalid size');
    return;
  }
  
  // Create the new grid
  createGrid(size);
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'lightgray';
  });
});