// index.js
const id = (id) => {
  return document.getElementById(id);
};

let lock = false;
let hoverring = false;

const changeId = () => {
  id("name").style.opacity = "0";

  document.title = identities[current].name;
  current++;

  if (current >= identities.length) current = 0;

  setTimeout(() => {
    id("name").innerText = identities[current].name;

    const background =
      lock || hoverring ? identities[current].color : "transparent";
    id("name").style.background = background;
    id("cursor").style.background = identities[current].color;

    setTimeout(() => {
      id("name").style.opacity = "1";
    }, 200);
  }, 200);
};

let connection = [
  {
    icon: "link",
    text: "resume",
    link: "https://docs.google.com/document/d/1Zb1G7-cnQZPLSe6emyRnGTxa02sNw04VKvyczkuLDPE/edit?usp=sharing",
  },
  {
    icon: "link",
    text: "Email",
    link: "https://www.linkedin.com/in/trannguyenhongthai/",
  },
  {
    icon: "link",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/trannguyenhongthai/",
  },
  {
    icon: "link",
    text: "GitHub",
    link: "https://github.com/marcinlowercase",
  },
];

let identities = [
  {
    name: "Tran Nguyen Hong Thai",
    color: "black",
    subcolor: "#333333",
  },
  {
    name: "Theo",
    color: "red",
    subcolor: "#550000",
  },
  {
    name: "marcinlowercase",
    color: "blue",
    subcolor: "#000055",
  },
];
let current = 0;

const name = id("name");
const tom = id("tom");

const column = 20;
let row = 0;
let gridHoverStatus = [];

const changeGridBackground = (i = 0) => {
  const totalSpots = column * row;
  if (i < totalSpots) {
    const gridSpot = document.getElementById(`grid-spot-${i}`);
    if (gridSpot) {
      if (!gridHoverStatus[i]) {
        gridSpot.style.background =
          hoverring || lock ? identities[current].subcolor : "white";
      } else {
        gridSpot.style.background = identities[current].color;
      }
    }

    setTimeout(() => {
      changeGridBackground(i + 1);
    }, 1);
  }
};
