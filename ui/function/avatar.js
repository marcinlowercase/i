// avatar.js
if (!on_touch_only_device()) {
  const tom = id("tom");
  const cursor = id("cursor");
  const name = id("name");
  tom.addEventListener("mouseover", (e) => {
    hoverring = true;

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
}
