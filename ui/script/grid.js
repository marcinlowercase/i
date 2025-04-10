// grid.js
const createGridLayout = () => {
  const gridLayout = document.createElement("div");
  gridLayout.style.opacity = "0";
  // document.body.style.background = "white";

  gridLayout.id = "grid-layout";
  gridLayout.style.display = "grid";

  // const gapSize = document.documentElement.clientWidth * 0.001;
  const gapSize = 0;
  // console.log("GAP SIZE", gapSize);
  const gridSide =
    (document.documentElement.clientWidth - (column - 1) * gapSize) / column;

  row =
    Math.floor(
      (document.documentElement.clientHeight - (column - 1) * gapSize) /
        gridSide
    ) + 1;
  gridLayout.style.gridTemplateColumns = `repeat(${column}, ${gridSide}px)`;
  gridLayout.style.gridTemplateRows = `repeat(${row}, ${gridSide}px)`;
  gridLayout.style.gap = `${gapSize}px`;
  const availableSpots = availableSpot(connection.length, column * row, column);
  randomSpot(availableSpots);
  for (let i = 0; i < column * row; i++) {
    const gridSpot = document.createElement("div");
    gridSpot.id = `grid-spot-${i}`;
    gridSpot.classList.add("grid-spot");
    gridSpot.classList.add("unselectable");

    // gridSpot.innerText = `${i}`;

    gridSpot.addEventListener("mouseenter", () => {
      gridSpot.style.background = identities[current].subcolor;
      gridHoverStatus[i] = true;
    });
    gridSpot.addEventListener("mouseleave", () => {
      gridHoverStatus[i] = false;
      gridSpot.style.zIndex = "5555";

      gridSpot.style.background = "transparent";
      // if (!lock && !hoverring) gridSpot.style.background = "transparent";
      // else gridSpot.style.background = identities[current].subcolor;
    });

    // connection
    if (i < connection.length) {
      gridSpot.innerHTML = `
        <div class="grid-content connection-spot">
        <a href="${connection[i].link}" target="_blank">
          <img
            src="${connection[i].icon}"
            alt="${connection[i].text}"
            title="${connection[i].text}"
            class="connection"
          />
        </a>
      </div>
      `;
      gridSpot.style.borderRadius = "50%";
    } else if (i === column - 1) {
      ///// info
      gridSpot.innerText = "i";
      gridSpot.classList.add("info");

      gridSpot.addEventListener("mouseenter", () => {
        if (!infoShowing) {
          infoShowing = true;
          changeGridBackground(identities[current].color);
          document.body.style.background = identities[current].color;
          id("transparent_tom").style.opacity = "0";
          if (lock) id("tom").style.opacity = "0";

          document.querySelectorAll(".interesting").forEach((el) => {
            el.style.opacity = "0";
          });

          id("greeting").style.opacity = "1";
          id("greetingone").style.opacity = "1";
          if (!greetingShowing) {
            if (infoShowing)
              typeWriterEffect("greeting", `I am Theo,`, 100, () => {
                typeWriterEffect("greetingone", `a Programmer`, 100);
              });
            greetingShowing = true;
          }

          id("name").innerText = "just a placeholder";
          id("name").style.background = "white";
        }
      });
      gridSpot.addEventListener("mouseout", () => {
        infoShowing = false;

        changeGridBackground("transparent");
        document.body.style.background = lock ? "black" : "white";
        id("transparent_tom").style.opacity = "1";
        if (lock) id("tom").style.opacity = "1";

        document.querySelectorAll(".interesting").forEach((el) => {
          el.style.opacity = "1";
        });
        id("greeting").style.opacity = "0";
        id("greetingone").style.opacity = "0";
        id("name").innerText = identities[current].name;
        id("name").style.background = lock
          ? identities[current].color
          : "transparent";
      });
      // gridSpot.style.width = "50%";
      // gridSpot.style.height = "50%";
      // gridSpot.style.right = "0";
    } else {
      ///// interesting
      for (let j = 0; j < interesting.length; j++) {
        if (i === interesting[j].index) {
          gridSpot.innerHTML = `
            <div class="grid-content">
              <a href="${interesting[j].link}" target="_blank">
               <img
                  src="${interesting[j].icon}"
                  alt="${interesting[j].text}"
                  title="${interesting[j].text}"
                  class="interesting"
                  style="opacity: ${infoShowing ? "0" : "1"}"
                  
                />
              </a>
            </div>
          `;
        }
      }
    }
    gridLayout.appendChild(gridSpot);
  }

  document.body.appendChild(gridLayout);
  setTimeout(() => {
    gridLayout.style.opacity = "1";
    if ((lock || hoverring) && !infoShowing)
      document.body.style.background = "black";
  }, 500);

  return gridLayout;
};

const grid = createGridLayout();

const recreateGridLayout = () => {
  const existingGrid = id("grid-layout");

  if (existingGrid) {
    existingGrid.style.opacity = "0";
    setTimeout(() => {
      existingGrid.remove();
      createGridLayout();
    }, 500);
  }

  console.log("recreate");
};

window.addEventListener("resize", recreateGridLayout);
