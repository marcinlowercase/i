// swipe.js

const transition = () => {
  const body = document.body;
  body.style.background = "gray";
};
const show_menu = () => {
  const body = document.body;
  body.style.background = "black";
};

// 0 - nothing
// 1 - left
// 2 - down
// 3 - up
// 4 - right
let direction = 0;

if (on_touch_only_device()) {
  const body = document.body;
  let start_x;
  let start_y;

  body.addEventListener("touchstart", (event) => {
    console.log("Touch started");
    start_x = event.touches[0].clientX;
    start_y = event.touches[0].clientY;
  });

  body.addEventListener("touchmove", (event) => {
    if (!start_x || !start_y) {
      return;
    }

    const current_x = event.touches[0].clientX;
    const current_y = event.touches[0].clientY;

    const diff_x = start_x - current_x;
    const diff_y = start_y - current_y;

    // You can adjust this threshold to control how sensitive the swipe detection is
    const threshold = 50;

    // Check for horizontal swipe
    if (Math.abs(diff_x) > threshold && Math.abs(diff_y) < threshold) {
      if (diff_x > 0) {
        console.log("Swiped left on body");
        direction = 1;
        screen = screen === 1 ? 0 : 1;

        if (screen === 1) {
          if (!lock) transparent_tom.style.opacity = 0.3;
          else tom.style.opacity = 0.3;
        } else if (screen === 0) {
          i_am.style.opacity = 0.3;
          a_programmer.style.opacity = 0.3;
        }
      } else {
        console.log("Swiped right on body");
        // Do something when swiped right on the body
      }
      start_x = null;
      start_y = null;
    }

    // Check for vertical swipe
    if (Math.abs(diff_y) > threshold && Math.abs(diff_x) < threshold) {
      if (diff_y > 0) {
        console.log("Swiped up on body");
        // Do something when swiped up on the body
      } else {
        console.log("Swiped down on body");
        // Do something when swiped down on the body
      }
      start_x = null;
      start_y = null;
      direction = 0;
    }
  });

  body.addEventListener("touchend", () => {
    console.log("Touch out");
    if (direction === 1) {
      if (screen === 1) {
        tom.style.opacity = 0;
        transparent_tom.style.opacity = 0;
        i_am.style.opacity = 1;
        a_programmer.style.opacity = 1;

        if (!i_am_showing)
          type_writer_effect("i_am", `I am Theo,`, 100, () => {
            type_writer_effect("a_programmer", `a Programmer`, 100);
            i_am_showing = true;
          });
      } else if (screen === 0) {
        i_am.style.opacity = 0;
        a_programmer.style.opacity = 0;
        tom.style.opacity = lock ? 1 : 0;
        transparent_tom.style.opacity = 1;
      }
    }
    start_x = null;
    start_y = null;
  });

  body.addEventListener("touchcancel", () => {
    console.log("Touch cancelled");
    start_x = null;
    start_y = null;
  });
}
