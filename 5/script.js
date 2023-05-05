const carInfoForm = document.getElementById('car-info-form');
const boxContainer = document.getElementById('box-container');

let activeBox = null;
let offsetX = 0;
let offsetY = 0;

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

  const removeBtn = document.createElement('div');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = '✕';
  draggableBox.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    boxContainer.removeChild(draggableBox);
    saveDataToLocalStorage();
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

  draggableBox.addEventListener('mousedown', (e) => {
    activeBox = draggableBox;
    offsetX = e.clientX - draggableBox.getBoundingClientRect().left;
    offsetY = e.clientY - draggableBox.getBoundingClientRect().top;
  });
}

document.addEventListener('mousemove', (e) => {
  if (!activeBox) return;
  activeBox.style.left = `${e.clientX - offsetX}px`;
  activeBox.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
  if (!activeBox) return;
  saveDataToLocalStorage();
  activeBox = null;
});

function saveDataToLocalStorage() {
  const draggableBoxesData = Array.from(boxContainer.children).map((box) => {
    return {
      identifier: box.querySelector('.identifier').textContent,
      time: box.querySelector('.info-line').textContent,
      carType1: box.querySelector('.info-line').nextElementSibling.textContent.split(' ')[0],
      carType2: box.querySelector('.info-line').nextElementSibling.textContent.split(' ')[1],
      carType3: box.querySelector('.info-line').nextElementSibling.nextElementSibling.textContent,
      plateRegion: box.querySelector('.plate-info').textContent.split(' ')[0],
      plateNumber: box.querySelector('.plate-info').textContent.split(' ')[1],
      plateHiragana: box.querySelector('.plate-info').nextElementSibling.textContent.split(' ')[0],
      plateSerial: box.querySelector('.plate-info').nextElementSibling.textContent.split(' ')[1],
      position: {
        left: box.style.left,
        top: box.style.top
      }
    };
  });
  localStorage.setItem('draggableBoxesData', JSON.stringify(draggableBoxesData));
}

function loadDataFromLocalStorage() {
  const draggableBoxesData = JSON.parse(localStorage.getItem('draggableBoxesData'));
  if (draggableBoxesData) {
    draggableBoxesData.forEach((boxData) => {
      const draggableBox = createDraggableBox(
        boxData.identifier,
        boxData.time,
        boxData.carType1,
        boxData.carType2,
        boxData.carType3,
        boxData.plateRegion,
        boxData.plateNumber,
        boxData.plateHiragana,
        boxData.plateSerial
      );
      draggableBox.style.left = boxData.position.left;
      draggableBox.style.top = boxData.position.top;
    });
  }
}

// ページ読み込み時にローカルストレージからデータを読み込む
loadDataFromLocalStorage();
