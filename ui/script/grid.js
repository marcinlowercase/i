// grid.js
const create_grid_layout = () => {
  const grid_layout = document.createElement("div");
  grid_layout.style.opacity = "0";
  // document.body.style.background = "white";

  grid_layout.id = "grid-layout";
  grid_layout.style.display = "grid";

  // const gap_size = document.documentElement.clientWidth * 0.001;
  const gap_size = 0;
  // console.log("GAP SIZE", gap_size);
  const grid_side =
    (document.documentElement.clientWidth - (column - 1) * gap_size) / column;

  row =
    Math.floor(
      (document.documentElement.clientHeight - (column - 1) * gap_size) /
        grid_side
    ) + 1;
  grid_layout.style.gridTemplateColumns = `repeat(${column}, ${grid_side}px)`;
  grid_layout.style.gridTemplateRows = `repeat(${row}, ${grid_side}px)`;
  grid_layout.style.gap = `${gap_size}px`;
  const available_spots = availabe_spot(
    connection.length,
    column * row,
    column
  );
  random_spot(available_spots);
  for (let i = 0; i < column * row; i++) {
    const grid_spot = document.createElement("div");
    grid_spot.id = `grid-spot-${i}`;
    grid_spot.classList.add("grid-spot");
    grid_spot.classList.add("unselectable");

    // grid_spot.innerText = `${i}`;

    grid_spot.addEventListener("mouseenter", () => {
      grid_spot.style.background = identities[current].subcolor;
      grid_hover_status[i] = true;
    });
    grid_spot.addEventListener("mouseleave", () => {
      grid_hover_status[i] = false;
      grid_spot.style.zIndex = "5555";

      grid_spot.style.background = "transparent";
      // if (!lock && !hoverring) grid_spot.style.background = "transparent";
      // else grid_spot.style.background = identities[current].subcolor;
    });

    // connection
    if (i < connection.length) {
      grid_spot.innerHTML = `
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
      grid_spot.style.borderRadius = "50%";
    } else if (i === column - 1) {
      ///// info
      grid_spot.innerText = "i";
      grid_spot.classList.add("info");

      grid_spot.addEventListener("mouseenter", () => {
        if (!info_showing) {
          info_showing = true;
          change_grid_background(identities[current].color);
          document.body.style.background = identities[current].color;
          id("transparent_tom").style.opacity = "0";
          if (lock) id("tom").style.opacity = "0";

          document.querySelectorAll(".interesting").forEach((el) => {
            el.style.opacity = "0";
          });

          id("i_am").style.opacity = "1";
          id("a_programmer").style.opacity = "1";
          if (!i_am_showing) {
            if (info_showing)
              type_writer_effect("i_am", `I am Theo,`, 100, () => {
                type_writer_effect("a_programmer", `a Programmer`, 100);
              });
            i_am_showing = true;
          }

          id("name").innerText = "just a placeholder";
          id("name").style.background = "white";
        }
      });
      grid_spot.addEventListener("mouseout", () => {
        info_showing = false;

        change_grid_background("transparent");
        document.body.style.background = lock ? "black" : "white";
        id("transparent_tom").style.opacity = "1";
        if (lock) id("tom").style.opacity = "1";

        document.querySelectorAll(".interesting").forEach((el) => {
          el.style.opacity = "1";
        });
        id("i_am").style.opacity = "0";
        id("a_programmer").style.opacity = "0";
        id("name").innerText = identities[current].name;
        id("name").style.background = lock
          ? identities[current].color
          : "transparent";
      });
      // grid_spot.style.width = "50%";
      // grid_spot.style.height = "50%";
      // grid_spot.style.right = "0";
    } else {
      ///// interesting
      for (let j = 0; j < interesting.length; j++) {
        if (i === interesting[j].index) {
          grid_spot.innerHTML = `
            <div class="grid-content">
              <a href="${interesting[j].link}" target="_blank">
               <img
                  src="${interesting[j].icon}"
                  alt="${interesting[j].text}"
                  title="${interesting[j].text}"
                  class="interesting"
                  style="opacity: ${info_showing ? "0" : "1"}"
                  
                />
              </a>
            </div>
          `;
        }
      }
    }
    grid_layout.appendChild(grid_spot);
  }

  document.body.appendChild(grid_layout);
  setTimeout(() => {
    grid_layout.style.opacity = "1";
    if ((lock || hoverring) && !info_showing)
      document.body.style.background = "black";
  }, 500);

  return grid_layout;
};

const grid = create_grid_layout();

const recreate_grid_layout = () => {
  const existingGrid = id("grid-layout");

  if (existingGrid) {
    existingGrid.style.opacity = "0";
    setTimeout(() => {
      existingGrid.remove();
      create_grid_layout();
    }, 500);
  }

  console.log("recreate");
};

window.addEventListener("resize", recreate_grid_layout);
