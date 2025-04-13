// swipe.js

if (on_touch_only_device()) {
  const body = document.body;
  let start_x;
  let start_y;

  body.addEventListener("touchstart", (event) => {
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
        // Do something when swiped left on the body
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
    }
  });

  body.addEventListener("touchend", () => {
    start_x = null;
    start_y = null;
  });
}
