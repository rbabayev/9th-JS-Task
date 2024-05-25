//Task 1
const imgArray = [
  "https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza.png",
  "https://cdn.thecollector.com/wp-content/uploads/2021/12/the-taj-mahal-architectural-digest.jpg?width=1400&quality=55",
  "https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg",
  "https://cdn.britannica.com/30/94530-050-99493FEA/Machu-Picchu.jpg",
  "https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg",
];

document.addEventListener("DOMContentLoaded", function () {
  let i = 0;
  const imgEl = document.getElementById("imgData");
  function imgChange() {
    imgEl.src = imgArray[i];
    i = (i + 1) % imgArray.length;
  }
  setInterval(imgChange, 1000);
});

//Task 2
const nameArray = [
  "Giza Pyramids",
  "Taj Mahal",
  "Colosseum",
  "Machu Pichu",
  "Petra",
];

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const nameEl = document.getElementById("nameData");
  function nameChange() {
    nameEl.textContent = nameArray[index];
    index = (index + 1) % nameArray.length;
  }
  setInterval(nameChange, 1000);
});

//Task 3
document.addEventListener("DOMContentLoaded", function () {
  const timerEl = document.getElementById("timer");
  const timeInput = document.getElementById("timeInput");

  function startCountdown(startSecond) {
    let count = startSecond;

    function updateTimer() {
      timerEl.textContent = count;
      count--;

      if (count < 0) {
        clearInterval(interval);
        timerEl.textContent = "0";
      }
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
  }

  timeInput.addEventListener("change", function () {
    const startSecond = parseInt(timeInput.value);
    if (!isNaN(startSecond) && startSecond >= 0) {
      startCountdown(startSecond);
    }
  });
});
