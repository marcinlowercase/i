id("name").addEventListener("click", () => {
  if (current < identities.length - 1)
    id("name").innerText = identities[++current].name;
  else {
    id("name").innerText = identities[0].name;
    current = 0;
  }

  document.title = identities[current].name;

  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
});

id("name").addEventListener("mouseenter", () => {
  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
});

id("name").addEventListener("mouseout", () => {
  id("name").style.background = "transparent";
  // id("cursor").style.background = "black";
});
