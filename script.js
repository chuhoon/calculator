const btnArr = [
  'CE',
  '(',
  ')',
  '×',
  '7',
  '8',
  '9',
  '÷',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '.',
  '0',
  '←',
  '=',
];
const wrapBtn = document.querySelector('.btn-calculator');
let display = document.getElementById('display');

btnArr.forEach((i) => {
  const elLi = document.createElement('button');
  elLi.innerText = i;
  wrapBtn.appendChild(elLi);
});

const items = wrapBtn.querySelectorAll('button');

function lookNumber() {
  items.forEach((i) => {
    i.addEventListener('click', (j) => {
      if (j.target.innerText == 'CE') {
        display.value = '';
      } else if (j.target.innerText == '×') {
        display.value += '*';
      } else if (j.target.innerText == '÷') {
        display.value += '/';
      } else if (j.target.innerText == '←') {
        display.value = display.value.substring(0, display.value.length - 1);
      } else if (j.target.innerText == '=') {
        display.value = eval(display.value);
      } else {
        let targetNumber = j.target.innerText;
        display.value += targetNumber;
      }
    });
  });
}

lookNumber();
