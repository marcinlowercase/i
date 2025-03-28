let lock = false;
id("tom").addEventListener("mouseover", (e) => {
  id("tom").style.opacity = "1";
  id("cursor").style.opacity = "0";
  document.body.style.background = "black";
  id("name").style.background = identities[current].color;
});
id("tom").addEventListener("mouseout", (e) => {
  if (!lock) {
    id("tom").style.opacity = "0";
    id("cursor").style.opacity = "1";
    id("name").style.background = "white";
    document.body.style.background = "white";
  }
});
id("tom").addEventListener("dblclick", () => {
  lock = !lock;
  id("tom").style.cursor = lock ? "default" : "grab";
  document.body.style.cursor = lock ? "default" : "grabbing";
});
