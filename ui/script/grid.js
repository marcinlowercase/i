// const columns = Math.floor(window.innerWidth / 300) + 1;
// const rows = Math.floor(window.innerHeight / 300) + 1;

// console.log("Number of Columns:", columns);
// console.log("Number of Rows:", rows);

function createDynamicGrid(numColumns, numRows) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("dynamic-grid-container");

  // Set grid layout properties using CSS
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 300px)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 300px)`;
  gridContainer.style.gap = "10px"; // Optional gap between grid items
  // gridContainer.style.padding = "10px"; // Optional padding around the grid

  for (let i = 0; i < numColumns * numRows; i++) {
    const gridItem = document.createElement("div");
    gridItem.id = `grid-spot-${i}`;
    gridItem.classList.add("dynamic-grid-item");
    // gridItem.textContent = i + 1; // Example content
    gridItem.style.width = "300px";
    gridItem.style.height = "300px";
    gridItem.style.background = "white"; // Example styling
    // gridItem.style.border = "1px solid #ccc"; // Example styling
    gridItem.style.display = "flex";
    gridItem.style.justifyContent = "center";
    gridItem.style.alignItems = "center";
    gridItem.style.transition = "background 0.5s";

    // Add event listeners for hover effect
    gridItem.addEventListener("mouseenter", () => {
      gridItem.style.background = identities[current].color;
    });
    gridItem.addEventListener("mouseleave", () => {
      gridItem.style.background = "white";
    });

    gridContainer.appendChild(gridItem);
  }

  // Append the created grid to the body or any other desired container
  document.body.appendChild(gridContainer);

  return gridContainer; // Optionally return the created grid container
}

// Example usage:
const columns = Math.floor(window.innerWidth / 300) + 1;
const rows = Math.floor(window.innerHeight / 300) + 1;

// Call the function to create the grid
const grid = createDynamicGrid(columns, rows);

// You might want to re-calculate and re-create the grid on window resize
function handleResize() {
  // Remove the previous grid if it exists
  const existingGrid = document.querySelector(".dynamic-grid-container");
  if (existingGrid) {
    existingGrid.remove();
  }

  const newColumns = Math.floor(window.innerWidth / 300) + 1;
  const newRows = Math.floor(window.innerHeight / 300) + 1;
  createDynamicGrid(newColumns, newRows);
}

window.addEventListener("resize", handleResize);
