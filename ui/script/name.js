// name.js
id("name").addEventListener("click", () => {
  changeId();
});

id("name").addEventListener("mouseenter", () => {
  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
});

id("name").addEventListener("mouseout", () => {
  if (!lock) id("name").style.background = "transparent";
});
