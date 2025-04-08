// index.js
const id = (id) => {
  return document.getElementById(id);
};

let lock = false;
let hoverring = false;

const changeId = () => {
  id("name").style.opacity = "0";
  if (current < identities.length - 1)
    id("name").innerText = identities[++current].name;
  else {
    id("name").innerText = identities[0].name;
    current = 0;
  }
  document.title = identities[current].name;

  setTimeout(() => {
    const background =
      lock || hoverring ? identities[current].color : "transparent";
    id("name").style.background = background;
    id("cursor").style.background = identities[current].color;

    setTimeout(() => {
      id("name").style.opacity = "1";
    }, 100);
  }, 100);
};

let identities = [
  {
    name: "Tran Nguyen Hong Thai",
    color: "black",
    subcolor: "#333333",

    data: [
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
    ],
  },
  {
    name: "Theo",
    color: "red",
    subcolor: "#550000",
    data: [
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
    ],
  },
  {
    name: "marcinlowercase",
    color: "blue",
    subcolor: "#000055",

    data: [
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
      {
        icon: "link",
        text: "link",
        link: "link",
      },
    ],
  },
];
let current = 0;

const name = id("name");
const tom = id("tom");

const column = 5;
let row = 0;

const changeGridBackground = (i = 0) => {
  const totalSpots = column * row;
  if (i < totalSpots) {
    const gridSpot = document.getElementById(`grid-spot-${i}`); // Use document.getElementById
    if (gridSpot) {
      gridSpot.style.background =
        hoverring || lock ? identities[current].subcolor : "white";
    }

    setTimeout(() => {
      changeGridBackground(i + 1);
    }, 30);
  }
};
