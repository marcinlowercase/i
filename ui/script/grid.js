// grid.js
const createDynamicGrid = () => {
  const gridLayout = document.createElement("div");
  gridLayout.id = "grid-layout";
  gridLayout.style.display = "grid";

  const column = 5;
  const gapSize = 10;
  const gridSide =
    (document.documentElement.clientWidth - (column - 1) * gapSize) / column;

  const row =
    Math.floor(
      (document.documentElement.clientHeight - (column - 1) * gapSize) /
        gridSide
    ) + 1;

  console.log("gridSide ", gridSide);
  console.log(`${column} x ${row}`);
  gridLayout.style.gridTemplateColumns = `repeat(${column}, ${gridSide}px)`;
  gridLayout.style.gridTemplateRows = `repeat(${row}, ${gridSide}px)`;
  gridLayout.style.gap = `${gapSize}px`;
  for (let i = 0; i < column * row; i++) {
    const gridSpot = document.createElement("div");
    gridSpot.id = `grid-spot-${i}`;
    gridSpot.classList.add("grid-spot");

    gridSpot.style.background = "white";
    gridSpot.style.display = "flex";
    gridSpot.style.justifyContent = "center";
    gridSpot.style.alignItems = "center";
    gridSpot.style.transition = "background 0.5s";

    gridSpot.addEventListener("mouseenter", () => {
      gridSpot.style.background = identities[current].color;
    });
    gridSpot.addEventListener("mouseleave", () => {
      gridSpot.style.background = "white";
    });

    gridLayout.appendChild(gridSpot);
  }

  document.body.appendChild(gridLayout);

  return gridLayout;
};

const grid = createDynamicGrid();

function handleResize() {
  const existingGrid = id("grid-layout");
  if (existingGrid) {
    console.log("remove old");
    existingGrid.remove();
  }
  createDynamicGrid();
}

window.addEventListener("resize", handleResize);
