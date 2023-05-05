const carInfoForm = document.getElementById('car-info-form');
const boxContainer = document.getElementById('box-container');

let activeBox = null;
let offsetX = 0;
let offsetY = 0;
let touchOffsetX = 0;
let touchOffsetY = 0;

carInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const identifier = document.getElementById('identifier').value;
  const hour = document.getElementById('hour').value;
  const minute = document.getElementById('minute').value;
  const carType1 = document.getElementById('car-type1').value;
  const carType2 = document.getElementById('car-type2').value;
  const carType3 = document.getElementById('car-type3').value;
  const plateRegion = document.getElementById('plate-region').value;
  const plateNumber = document.getElementById('plate-number').value;
  const plateHiragana = document.getElementById('plate-hiragana').value;
  const plateSerial = document.getElementById('plate-serial').value;

  createDraggableBox(identifier, `${hour}:${minute}`, carType1, carType2, carType3, plateRegion, plateNumber, plateHiragana, plateSerial);
});

function createDraggableBox(identifier, time, carType1, carType2, carType3, plateRegion, plateNumber, plateHiragana, plateSerial) {
  const draggableBox = document.createElement('div');
  draggableBox.classList.add('draggable-box');

  const identifierElement = document.createElement('div');
  identifierElement.classList.add('identifier');
  identifierElement.textContent = identifier;
  draggableBox.appendChild(identifierElement);

  // ここにドラッグハンドルを追加します
  const dragHandle = document.createElement('div');
  dragHandle.classList.add('drag-handle');
  draggableBox.appendChild(dragHandle);

  const removeBtn = document.createElement('div');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = '✕';
  draggableBox.appendChild(removeBtn);

  // 削除ボタンのクリックイベントリスナー
  removeBtn.addEventListener('click', () => {
    boxContainer.removeChild(draggableBox);
  });

  const boxContent = document.createElement('div');
  boxContent.classList.add('box-content');

  const timeElement = document.createElement('div');
  timeElement.classList.add('info-line');
  timeElement.textContent = time;
  boxContent.appendChild(timeElement);

  const carTypeElement = document.createElement('div');
  carTypeElement.classList.add('info-line');
  carTypeElement.innerHTML = `${carType1} ${carType2}<br>${carType3}`;
  boxContent.appendChild(carTypeElement);

  const plateInfoElement = document.createElement('div');
  plateInfoElement.classList.add('plate-info');
  plateInfoElement.innerHTML = `${plateRegion} ${plateNumber}<br>${plateHiragana} ${plateSerial}`;
  boxContent.appendChild(plateInfoElement);

  draggableBox.appendChild(boxContent);

  boxContainer.appendChild(draggableBox);

  // マウスイベントリスナー
  draggableBox.addEventListener('mousedown', (e) => {
    e.preventDefault();
    activeBox = draggableBox;
    offsetX = e.clientX - draggableBox.getBoundingClientRect().left;
    offsetY = e.clientY - draggableBox.getBoundingClientRect().top;
  });

  // タッチイベントリスナー
  draggableBox.addEventListener('touchstart', (e) => {
    if (!e.target.classList.contains('drag-handle')) return;
    const touch = e.touches[0];
    activeBox = draggableBox;
    touchOffsetX = touch.clientX - draggableBox.getBoundingClientRect().left;
    touchOffsetY = touch.clientY - draggableBox.getBoundingClientRect().top;
    e.preventDefault();
  });
}

document.addEventListener('mousemove', (e) => {
  if (!activeBox) return;
  e.preventDefault();
  activeBox.style.left = `${e.clientX - offsetX}px`;
  activeBox.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
  activeBox = null;
});

document.addEventListener('touchmove', (e) => {
  if (!activeBox) return;
  const touch = e.touches[0];
  activeBox.style.left = `${touch.clientX - touchOffsetX}px`;
  activeBox.style.top = `${touch.clientY - touchOffsetY}px`;
  e.preventDefault();
});

document.addEventListener('touchend', () => {
  activeBox = null;
});
