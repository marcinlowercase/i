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
    icon: "../data/img/pdf.svg",
    text: "resume",
    link: "https://docs.google.com/document/d/1Zb1G7-cnQZPLSe6emyRnGTxa02sNw04VKvyczkuLDPE/edit?usp=sharing",
  },
  {
    icon: "../data/img/mail.svg",
    text: "email",
    link: "marcinlowercase@gmail.com",
  },
  {
    icon: "../data/img/linkedin.svg",
    text: "linkedin",
    link: "https://www.linkedin.com/in/trannguyenhongthai/",
  },
  {
    icon: "../data/img/github.svg",
    text: "github",
    link: "https://github.com/marcinlowercase",
  },
];
let interesting = [
  {
    icon: "../data/img/archlinux.svg",
    text: "archlinux",
    link: "https://archlinux.org/",
  },
  {
    icon: "../data/img/deno.svg",
    text: "deno",
    link: "https://deno.com/",
  },
  {
    icon: "../data/img/rust.svg",
    text: "rust",
    link: "https://www.rust-lang.org/",
  },
  {
    icon: "../data/img/figma.svg",
    text: "figma",
    link: "https://www.figma.com/",
  },
  {
    icon: "../data/img/google.svg",
    text: "google",
    link: "https://www.google.com/",
  },
  {
    icon: "../data/img/zig.svg",
    text: "zig",
    link: "https://ziglang.org/",
  },
  {
    icon: "../data/img/tldraw.svg",
    text: "tldraw",
    link: "https://www.tldraw.com/",
  },
  {
    icon: "../data/img/excalidraw.svg",
    text: "excalidraw",
    link: "https://excalidraw.com/",
  },
  {
    icon: "../data/img/vim.svg",
    text: "vim",
    link: "https://www.vim.org/",
  },
  {
    icon: "../data/img/c.svg",
    text: "c",
    link: "#",
  },
  {
    icon: "../data/img/javascript.svg",
    text: "javascript",
    link: "#",
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

const column = 11;
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
