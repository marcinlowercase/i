// grid.js
const createDynamicGrid = () => {
  const gridLayout = document.createElement("div");
  gridLayout.id = "grid-layout";
  gridLayout.style.display = "grid";

  const gapSize = document.documentElement.clientWidth * 0.001;
  // const gapSize = 0;
  console.log("GAP SIZE", gapSize);
  const gridSide =
    (document.documentElement.clientWidth - (column - 1) * gapSize) / column;

  row =
    Math.floor(
      (document.documentElement.clientHeight - (column - 1) * gapSize) /
        gridSide
    ) + 1;

  // console.log("gridSide ", gridSide);
  // console.log(`${column} x ${row}`);
  gridLayout.style.gridTemplateColumns = `repeat(${column}, ${gridSide}px)`;
  gridLayout.style.gridTemplateRows = `repeat(${row}, ${gridSide}px)`;
  gridLayout.style.gap = `${gapSize}px`;
  for (let i = 0; i < column * row; i++) {
    const gridSpot = document.createElement("div");
    gridSpot.id = `grid-spot-${i}`;
    gridSpot.classList.add("grid-spot");
    gridSpot.classList.add("unselectable");

    // gridSpot.innerText = `${i}`;

    gridSpot.addEventListener("mouseenter", () => {
      // if (!lock && !hoverring)
      gridSpot.style.background = identities[current].color;
      // gridSpot.style.zIndex = `${parseInt(name.style.zIndex) + 1}`;
      gridHoverStatus[i] = true;
    });
    gridSpot.addEventListener("mouseleave", () => {
      gridHoverStatus[i] = false;
      gridSpot.style.zIndex = "5555";

      if (!lock && !hoverring) gridSpot.style.background = "white";
      else gridSpot.style.background = identities[current].subcolor;
    });

    // connection
    if (i < connection.length) {
      gridSpot.innerHTML = `
        <div class='grid-content'><a href="${connection[i].link}" target="_blank">
          <img src="${connection[i].icon}" alt="${connection[i].text}" title="${connection[i].text}" class="connection" />
        </a>
        </div>
        
      `;
      gridSpot.style.borderRadius = "50%";
    } else if (i === column) {
      gridSpot.innerText = "i";
      gridSpot.classList.add("info");
    } else if (i === connection.length) {
    } else {
      gridSpot.innerHTML = `
        <div class='grid-content'><a href="${connection[i].link}" target="_blank">
          <img src="${connection[i].icon}" alt="${connection[i].text}" title="${connection[i].text}" class="connection" />
        </a>
        </div>
        
      `;
    }
    gridLayout.appendChild(gridSpot);
  }

  document.body.appendChild(gridLayout);

  return gridLayout;
};

const grid = createDynamicGrid();

const handleResize = () => {
  const existingGrid = id("grid-layout");
  if (existingGrid) {
    console.log("remove old");
    existingGrid.remove();
  }
  createDynamicGrid();
}

window.addEventListener("resize", handleResize);
