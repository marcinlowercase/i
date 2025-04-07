// name.js
id("name").addEventListener("click", () => {
  changeId();
});

id("name").addEventListener("mouseenter", () => {
  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
});

id("name").addEventListener("mouseout", () => {
  id("name").style.background = "transparent";
  // id("cursor").style.background = "black";
});
