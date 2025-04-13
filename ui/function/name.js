// name.js
if (!on_touch_only_device()) {
  const name = id("name");
  name.addEventListener("click", () => {
    change_id();
    // change_grid_background();
  });

  name.addEventListener("mouseenter", () => {
    name.style.background = identities[current].color;
    id("cursor").style.background = identities[current].color;
  });

  name.addEventListener("mouseout", () => {
    if (!lock) name.style.background = "transparent";
    if (info_showing) name.style.background = "white";
  });
}
