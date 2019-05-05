function createTableHeader(newTable) {
  var header = document.createElement('thead');
  newTable.appendChild(header);

  for (var i = 0; i < 4; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = 'Header ' + (i + 1);
    header.appendChild(headerCell);
  }
}

function createTableBody(newTable) {
  var body = document.createElement('tbody');
  newTable.appendChild(body);

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
  newTable.style.borderCollapse = 'collapse';
  createTableHeader(newTable);
  createTableBody(newTable);
  parent.appendChild(newTable);
}

function markCell(event) {
  var currentCell = document.getElementById('selected');

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

  if (row > 0) {
    var newCell = oldCell.parentNode.previousElementSibling.children[col];
    if (newCell && oldCell) {
      if (oldCell.getAttribute('id') == 'selected') {
        oldCell.removeAttribute('id');
        oldCell.style.border = '1px solid black';
      }
      newCell.style.border = '2px solid black';
      newCell.setAttribute('id', 'selected');
    }
  }
}

function moveDown(event) {
  var oldCell = document.getElementById('selected');
  var col = oldCell.cellIndex;
  var row = oldCell.parentNode.rowIndex;

  if (row < 2) {
    var newCell = oldCell.parentNode.nextElementSibling.children[col];
    if (newCell && oldCell) {
      if (oldCell.getAttribute('id') == 'selected') {
        oldCell.removeAttribute('id');
        oldCell.style.border = '1px solid black';
      }
      newCell.style.border = '2px solid black';
      newCell.setAttribute('id', 'selected');
    }
  }
}

function moveLeft(event) {
  var oldCell = document.getElementById('selected');
  var newCell = oldCell.previousElementSibling;

  if (newCell && oldCell) {
    if (oldCell.getAttribute('id') == 'selected') {
      oldCell.removeAttribute('id');
      oldCell.style.border = '1px solid black';
    }
    newCell.style.border = '2px solid black';
    newCell.setAttribute('id', 'selected');
  }
}

function moveRight(event) {
  var oldCell = document.getElementById('selected');
  var newCell = oldCell.nextElementSibling;

  if (newCell && oldCell) {
    if (oldCell.getAttribute('id') == 'selected') {
      oldCell.removeAttribute('id');
      oldCell.style.border = '1px solid black';
    }
    newCell.style.border = '2px solid black';
    newCell.setAttribute('id', 'selected');
  }
}

function createButton(parent, label) {
  var newButton = document.createElement('button');
  newButton.textContent = label
  parent.appendChild(newButton);
}

var table = document.createElement('table');
createTable(document.body, table);

createButton(document.body, 'Up');
createButton(document.body, 'Down');
createButton(document.body, 'Left');
createButton(document.body, 'Right');
createButton(document.body, 'Mark Cell');

document.getElementsByTagName('button')[0].addEventListener('click', moveUp);
document.getElementsByTagName('button')[1].addEventListener('click', moveDown);
document.getElementsByTagName('button')[2].addEventListener('click', moveLeft);
document.getElementsByTagName('button')[3].addEventListener('click', moveRight);
document.getElementsByTagName('button')[4].addEventListener('click', markCell);

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  var cell = document.getElementsByTagName('td')[0];
  cell.setAttribute('id', 'selected');
  cell.style.border = '2px solid black';
});
