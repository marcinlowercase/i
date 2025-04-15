// dvd.js
const start_dvd_bounce = (id, originalX, originalY, zoom, speed) => {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    return;
  }

  const dvd = document.getElementById(id);
  if (!dvd) {
    console.error(`Element with ID '${id}' not found.`);
    return;
  }
  dvd.style.position = "absolute";
  console.log("this line");
  dvd.style.zIndex = "10000";

  let x = originalX;
  let y = originalY;
  let dx = 1;
  let dy = 1;
  let last_bounce_time = 0;
  const bounce_interval = 3000;

  let current_zoom = zoom;
  let current_speed = speed;

  dvd.addEventListener("mouseenter", () => {
    dvd.style.transform = `scale(${current_zoom + 0.5})`;
  });

  dvd.addEventListener("mouseleave", () => {
    dvd.style.transform = `scale(${current_zoom})`;
  });

  dvd.addEventListener("mousedown", () => {});

  const move_dvd = () => {
    const maxX = document.documentElement.clientWidth - dvd.clientWidth;
    const maxY = document.documentElement.clientHeight - dvd.clientHeight;

    x += dx * current_speed;
    y += dy * current_speed;

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

    if (bounced) {
      const currentTime = Date.now();
      if (currentTime - last_bounce_time >= bounce_interval) {
        recreate_grid_layout();

        change_id();
        if (lock || hoverring)
          dvd.style.zIndex = dvd.style.zIndex === "10000" ? "12321" : "10000";
        else {
          dvd.style.zIndex = "10000";
        }
        // change_grid_background();

        if (info_showing)
          document.body.style.background = identities[current].color;

        last_bounce_time = currentTime;
      }
    }
    console.log(dvd.style.zIndex);
    dvd.style.left = `${x}px`;
    dvd.style.top = `${y}px`;
    requestAnimationFrame(move_dvd);
  };
  move_dvd();
};

if (!on_touch_only_device()) {
  start_dvd_bounce("name", 0, 0, 1, 1.5);
}
