// general.js
const id = (id) => {
  return document.getElementById(id);
};

const randomSpot = () => {};

const changeId = () => {
  if (current < identities.length - 1)
    id("name").innerText = identities[++current].name;
  else {
    id("name").innerText = identities[0].name;
    current = 0;
  }
  document.title = identities[current].name;

  id("name").style.background = identities[current].color;
  id("cursor").style.background = identities[current].color;
};
