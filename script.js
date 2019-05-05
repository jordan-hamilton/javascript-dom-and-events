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

  for (var i = 0; i < 4; i++) {
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
  if (currentCell.style.backgroundColor != 'yellow') {
    currentCell.style.backgroundColor = 'yellow';
  }
  console.log('You turned it yellow!');//DEBUG
}

function move(event) {
  var previousCell = document.getElementById('selected');
  previousCell.removeAttribute('id');
  previousCell.style.border = '1px solid black';
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

for (var i = 0; i < 4; i++) {
  document.getElementsByTagName('button')[i].addEventListener('click', move);
}
document.getElementsByTagName('button')[4].addEventListener('click', markCell);

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  var cell = document.getElementsByTagName('td')[0];
  cell.setAttribute('id', 'selected');
  cell.style.border = '2px solid black';
});
