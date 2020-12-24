/*eslint-disable*/
const die = document.querySelector('.die');
const score = document.createElement('p');
const body = document.querySelector('body');

score.setAttribute('class', 'score');
body.appendChild(score);

function randomInteger(min = 1, max = 6) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset() {
  const die = document.querySelector('.die');
  die.textContent = '';
}

function createDot() {
  const dot = document.createElement('div');
  dot.setAttribute('class', 'dot');
  return dot;
}

const cssGridPositions3 = [
  { row: '1/2', column: '3/4' },
  { row: '2/3', column: '2/3' },
  { row: '3/4', column: '1/2' },
];
const cssGridPositions5 = [
  { row: '1/2', column: '1/2' },
  { row: '1/2', column: '3/4' },
  { row: '2/3', column: '2/3' },
  { row: '3/4', column: '1/2' },
  { row: '3/4', column: '3/4' },
];

function positionDots(face) {
  const dots = document.querySelectorAll('.dot');
  switch (face) {
    case 3:
      cssGridPositions3.forEach((position, index) => {
        dots[index].style.gridRow = position.row;
        dots[index].style.gridColumn = position.column;
      });
      break;
    case 5:
      cssGridPositions5.forEach((position, index) => {
        dots[index].style.gridRow = position.row;
        dots[index].style.gridColumn = position.column;
      });
      break;
    default:
      return null;
  }
}

function clickHandler() {
  reset();
  const face = randomInteger();
  const die = document.querySelector('.die');
  const score = document.querySelector('.score');
  score.innerText = `Score : ${face}`;
  die.setAttribute('class', `die die--dots-${face}`);
  for (let i = 1; i <= face; i++) {
    die.appendChild(createDot());
  }
  if (face === 3 || face === 5) {
    positionDots(face);
  }
}

die.addEventListener('click', clickHandler);

clickHandler();
