const container = document.querySelector(".container");
container.style.padding = "10px";

container.flexDirection = "column";

function createSquare(row) {
  const square = document.createElement("div");
  square.style.flex = "1";
  square.style.backgroundColor = "white";

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  })

  row.appendChild(square);
}

function createRow(size) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flex = "1";
  for(let i = 0; i < size; i++) {
    createSquare(row);
  }
  container.appendChild(row);
}

function createGrid(size) {
  for(let i = 0; i < size; i++) {
    createRow(size);
  }
}

createGrid(128);


const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", () => {
  const squares = container.querySelectorAll("div div");

  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});