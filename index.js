const input = document.querySelector(".input");
const output = document.querySelector(".output > h3");

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("start") || e.target.classList.contains("skip")) {
    startRandomizer(e);
  } else if (e.target.classList.contains("accept")) {
    accept();
  }
});

let itemList;
let randomItem;

function startRandomizer(e) {
  if (e !== undefined && e.target.classList.contains("start")) {
    itemList = Array.from(document.querySelectorAll("ul > li"))
      .map((item) => item.textContent)
      .filter((item) => item !== "");
  }

  randomItem = itemList[Math.floor(Math.random() * itemList.length)];
  output.textContent = randomItem;
  input.style.display = "none";
  document.querySelector(".output").style.display = "flex";
}

function accept() {
  itemList = itemList.filter((item) => item !== randomItem);
  startRandomizer();
}

