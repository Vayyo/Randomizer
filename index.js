const input = document.querySelector(".input");
const output = document.querySelector(".output > h3");
const itemListElements = document.querySelectorAll("ul > li");

let itemList = [];
let currentIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleItemList() {
  itemList = Array.from(itemListElements)
    .map((item) => item.textContent)
    .filter((item) => item !== "");

  shuffle(itemList);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("start")) {
    shuffleItemList();
    updateOutput();
  } else if (e.target.classList.contains("skip")) {
    currentIndex++;
    updateOutput();
  } else if (e.target.classList.contains("accept")) {
    accept();
  }
});

function accept() {
  if (itemList.length === 0) {
    alert("No more items left");
    return;
  }
  itemList.splice(currentIndex, 1);
  updateOutput();
}

function updateOutput() {
  if (currentIndex >= itemList.length) {
    shuffle(itemList);
    currentIndex = 0;
  }
  const randomItem = itemList[currentIndex];
  output.textContent = randomItem;
  input.style.display = "none";
  document.querySelector(".output").style.display = "flex";
}

