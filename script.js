function createTableHeader(newTable) {
  var header = document.createElement('thead');
  newTable.appendChild(header);
  // Add the header cells with their text content based on index + 1
  for (var i = 0; i < 4; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = 'Header ' + (i + 1);
    header.appendChild(headerCell);
  }
}

function createTableBody(newTable) {
  var body = document.createElement('tbody');
  newTable.appendChild(body);
  /* Add table rows in the outer loop, populating each column with the position
   * in the inner loop.
   */
  for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 4; j++) {
      cell = document.createElement('td');
      cell.textContent = (i + 1) + ', ' + (j + 1);
      cell.style.border = '1px solid black';
      row.appendChild(cell);
    }
    body.appendChild(row);
  }
}

function createTable(parent, newTable) {
  /* Takes a node where the table should be added, and a table
   * to populate with data as arguments. The table is filled
   * and appended to the parent node.
   */
  newTable.style.borderCollapse = 'collapse';
  createTableHeader(newTable);
  createTableBody(newTable);
  parent.appendChild(newTable);
}

function markCell(event) {
  var currentCell = document.getElementById('selected');
  /* Finds the element that's marked as selected, then changes its background
   * color to yellow if it hasn't been marked already.
   */
  if (currentCell) {
    if (currentCell.style.backgroundColor != 'yellow') {
      currentCell.style.backgroundColor = 'yellow';
    }
  }
}

function moveUp(event) {
  var oldCell = document.getElementById('selected');
  var col = oldCell.cellIndex;
  var row = oldCell.parentNode.rowIndex;
  /* Look at the column index property of our current cell, and the row index
   * property of the row we're in. If the row isn't the top row, we make sure
   * our current cell and the cell above it aren't null, then remove styling
   * and id from the current cell and apply those to the new cell.
   */
  if (row > 0) {
    var newCell = oldCell.parentNode.previousElementSibling.children[col];
    if (newCell && oldCell) {
      oldCell.removeAttribute('id');
      oldCell.style.border = '1px solid black';
      newCell.style.border = '2px solid black';
      newCell.setAttribute('id', 'selected');
    }
  }
}

function moveDown(event) {
  var oldCell = document.getElementById('selected');
  var col = oldCell.cellIndex;
  var row = oldCell.parentNode.rowIndex;
  /* Repeat the process from moveUp, but this time making sure we're not in
   * the bottom row before updating any cells.
   */
  if (row < 2) {
    var newCell = oldCell.parentNode.nextElementSibling.children[col];
    if (newCell && oldCell) {
      oldCell.removeAttribute('id');
      oldCell.style.border = '1px solid black';
      newCell.style.border = '2px solid black';
      newCell.setAttribute('id', 'selected');
    }
  }
}

function moveLeft(event) {
  var oldCell = document.getElementById('selected');
  var newCell = oldCell.previousElementSibling;
  /* Sets the oldCell to our currently highlighted cell, then attempts to set
   * the next cell to the cell in the column to the left. If that property
   * isn't null, the styling and id is switched from the old  to the new cell.
   */
  if (newCell && oldCell) {
    oldCell.removeAttribute('id');
    oldCell.style.border = '1px solid black';
    newCell.style.border = '2px solid black';
    newCell.setAttribute('id', 'selected');
  }
}

function moveRight(event) {
  var oldCell = document.getElementById('selected');
  var newCell = oldCell.nextElementSibling;
  // Repeats the process from moveLeft, this time looking at nextElementSibling.
  if (newCell && oldCell) {
    oldCell.removeAttribute('id');
    oldCell.style.border = '1px solid black';
    newCell.style.border = '2px solid black';
    newCell.setAttribute('id', 'selected');
  }
}

function createButton(parent, label) {
  /* Takes a node where the button should be added, and a string
   * to use as a button label. The button is created
   * with the label and appended to the parent node.
   */
  var newButton = document.createElement('button');
  newButton.textContent = label;
  parent.appendChild(newButton);
}

var table = document.createElement('table');
createTable(document.body, table);

createButton(document.body, 'Up');
createButton(document.body, 'Down');
createButton(document.body, 'Left');
createButton(document.body, 'Right');
createButton(document.body, 'Mark Cell');

// Add event listeners in the order corresponding to the button creation above.
document.getElementsByTagName('button')[0].addEventListener('click', moveUp);
document.getElementsByTagName('button')[1].addEventListener('click', moveDown);
document.getElementsByTagName('button')[2].addEventListener('click', moveLeft);
document.getElementsByTagName('button')[3].addEventListener('click', moveRight);
document.getElementsByTagName('button')[4].addEventListener('click', markCell);

// Ensure that our first cell created is selected by default.
document.addEventListener('DOMContentLoaded', function(event) {
  var cell = document.getElementsByTagName('td')[0];
  cell.setAttribute('id', 'selected');
  cell.style.border = '2px solid black';
});
