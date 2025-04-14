// avatar.js
if (!on_touch_only_device()) {
  const cursor = id("cursor");
  tom.addEventListener("mouseover", (e) => {
    hoverring = true;
    // start_audio("boot");
    tom.style.opacity = "1";
    cursor.style.opacity = "0";
    name.style.background = identities[current].color;
    document.body.style.background = "black";
    // change_grid_background();
  });
  tom.addEventListener("mouseout", (e) => {
    hoverring = false;
    name.style.zIndex = "10000";
    cursor.style.opacity = "1";

    if (!lock) {
      tom.style.opacity = "0";
      name.style.background = "transparent";
      // change_grid_background();
      // document.body.style.background = "black";

      document.body.style.background = "white";
    }
  });
  tom.addEventListener("dblclick", () => {
    lock = !lock;
    tom.style.cursor = lock ? "default" : "grab";
    document.body.style.cursor = lock ? "default" : "grabbing";
    // change_grid_background();
    document.body.style.background = "black";
  });
} else {
  tom.addEventListener("click", () => {
    if (!booting && screen === 0) {
      lock = !lock;
      if (lock) start_audio("boot");
      tom.style.opacity = tom.style.opacity === "1" ? "0" : "1";
      document.body.style.background =
        document.body.style.background === "black" ? "white" : "black";
      change_greeting_color();
      // change_color();
    }
  });
}
