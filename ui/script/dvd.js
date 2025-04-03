// dvd.js
const startDVDBounce = (id, originalX, originalY, zoom, speed) => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("Skipping DVD animation on mobile.");
    return;
  }

  const dvd = document.getElementById(id);
  if (!dvd) {
    console.error(`Element with ID '${id}' not found.`);
    return;
  }
  dvd.style.position = "absolute";

  let x = originalX;
  let y = originalY;
  let dx = 1;
  let dy = 1;

  let currentZoom = zoom;
  let currentSpeed = speed;

  dvd.addEventListener("mouseenter", () => {
    dvd.style.transform = `scale(${currentZoom + 0.1})`;
  });

  dvd.addEventListener("mouseleave", () => {
    dvd.style.transform = `scale(${currentZoom})`;
  });

  dvd.addEventListener("mousedown", () => {});

  function moveDVD() {
    // const maxX = window.innerWidth - dvd.clientWidth;
    // const maxY = window.innerHeight - dvd.clientHeight;
    const maxX = document.documentElement.clientWidth - dvd.clientWidth;
    const maxY = document.documentElement.clientHeight - dvd.clientHeight;

    x += dx * currentSpeed;
    y += dy * currentSpeed;

    let bounced = false;
    if (x <= 0) {
      dx = 1;
      x = 0;
      bounced = true;
    } else if (x >= maxX) {
      dx = -1;
      x = maxX;
      bounced = true;
    }

    if (y <= 0) {
      dy = 1;
      y = 0;
      bounced = true;
    } else if (y >= maxY) {
      dy = -1;
      y = maxY;
      bounced = true;
    }

    dvd.style.left = `${x}px`;
    dvd.style.top = `${y}px`;

    requestAnimationFrame(moveDVD);
  }
  moveDVD();
};

startDVDBounce("name", 0, 0, 1, 2);
