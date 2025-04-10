id("tom").addEventListener("mouseover", (e) => {
  hoverring = true;

  id("tom").style.opacity = "1";
  id("cursor").style.opacity = "0";
  id("name").style.background = identities[current].color;
  document.body.style.background = "black";
  // changeGridBackground();
});
id("tom").addEventListener("mouseout", (e) => {
  hoverring = false;
  id("name").style.zIndex = "10000";
  id("cursor").style.opacity = "1";

  if (!lock) {
    id("tom").style.opacity = "0";
    id("name").style.background = "transparent";
    // changeGridBackground();
    // document.body.style.background = "black";

    document.body.style.background = "white";
  }
});
id("tom").addEventListener("dblclick", () => {
  lock = !lock;
  id("tom").style.cursor = lock ? "default" : "grab";
  document.body.style.cursor = lock ? "default" : "grabbing";
  // changeGridBackground();
  document.body.style.background = "black";
});
