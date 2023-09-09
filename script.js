const gridView = document.querySelector("#grid");
const range = document.querySelector("#grid-size");
const rangeLabel = document.querySelector('label[for="grid-size"]');

let mode = "draw";

const drawGrid = (gridSize) => {
  gridView.innerHTML = "";
  gridView.style.gridTemplateColumns =
    gridView.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    gridView.appendChild(pixel);
  }
};

const setRange = (size) => {
  rangeLabel.textContent = `${size}x${size}`;
  drawGrid(size);
};

// If you want to real time update you can change to "input"
range.addEventListener("change", (e) => {
  let newSize = e.target.value;
  setRange(newSize);
});

window.addEventListener("DOMContentLoaded", () => {
  // Init event
  setRange(16);
});
