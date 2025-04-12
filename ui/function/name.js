// name.js
id("name").addEventListener("click", () => {
  change_id();
  // change_grid_background();
});

id("name").addEventListener("mouseenter", () => {
  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
});

id("name").addEventListener("mouseout", () => {
  if (!lock) id("name").style.background = "transparent";
  if (info_showing) id("name").style.background = "white";

  // id("name").style.zIndex =
  //   id("name").style.zIndex === "10000" ? "12321" : "10000";
});
