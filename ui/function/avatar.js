id("tom").addEventListener("mouseover", (e) => {
  hoverring = true;

  id("tom").style.opacity = "1";
  id("cursor").style.opacity = "0";
  id("name").style.background = identities[current].color;
  document.body.style.background = "black";
  // change_grid_background();
});
id("tom").addEventListener("mouseout", (e) => {
  hoverring = false;
  id("name").style.zIndex = "10000";
  id("cursor").style.opacity = "1";

  if (!lock) {
    id("tom").style.opacity = "0";
    id("name").style.background = "transparent";
    // change_grid_background();
    // document.body.style.background = "black";

    document.body.style.background = "white";
  }
});
id("tom").addEventListener("dblclick", () => {
  lock = !lock;
  id("tom").style.cursor = lock ? "default" : "grab";
  document.body.style.cursor = lock ? "default" : "grabbing";
  // change_grid_background();
  document.body.style.background = "black";
});
