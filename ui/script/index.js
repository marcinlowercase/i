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
    index: 0,
  },
  {
    icon: "../data/img/deno.svg",
    text: "deno",
    link: "https://deno.com/",
    index: 0,
  },
  {
    icon: "../data/img/rust.svg",
    text: "rust",
    link: "https://www.rust-lang.org/",
    index: 0,
  },
  {
    icon: "../data/img/figma.svg",
    text: "figma",
    link: "https://www.figma.com/",
    index: 0,
  },
  {
    icon: "../data/img/google.svg",
    text: "google",
    link: "https://www.google.com/",
    index: 0,
  },
  {
    icon: "../data/img/zig.svg",
    text: "zig",
    link: "https://ziglang.org/",
    index: 0,
  },
  {
    icon: "../data/img/tldraw.svg",
    text: "tldraw",
    link: "https://www.tldraw.com/",
    index: 0,
  },
  {
    icon: "../data/img/excalidraw.svg",
    text: "excalidraw",
    link: "https://excalidraw.com/",
    index: 0,
  },
  {
    icon: "../data/img/vim.svg",
    text: "vim",
    link: "https://www.vim.org/",
    index: 0,
  },
  {
    icon: "../data/img/c.svg",
    text: "c",
    link: "https://www.google.com/search?q=The+C+Programming+Language&sca_esv=242238691926b20a&sxsrf=AHTn8zqJl_uKnGdxTPEdh9gA0L8wcExJiA%3A1744243070841&ei=fgn3Z7qKM-urptQPiZyg2Aw&ved=0ahUKEwi6wY7lk8yMAxXrlYkEHQkOCMsQ4dUDCBA&uact=5&oq=The+C+Programming+Language&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlRoZSBDIFByb2dyYW1taW5nIExhbmd1YWdlMgoQIxiABBgnGIoFMgoQIxiABBgnGIoFMg0QLhiABBhDGNQCGIoFMgoQABiABBhDGIoFMgoQLhiABBhDGIoFMg0QLhiABBhDGNQCGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAESNUpUABY4CVwAXgBkAEAmAF7oAHEE6oBBDIxLja4AQPIAQD4AQGYAhygAuEUwgIEECMYJ8ICEBAAGIAEGLEDGEMYgwEYigXCAgoQABiABBgUGIcCwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBixAxiDAcICDhAuGIAEGMcBGI4FGK8BwgILEC4YgAQYxwEYrwHCAgUQLhiABMICCBAuGIAEGNQCwgIHEAAYgAQYCsICBxAjGLACGCfCAgoQLhiABBjUAhgNwgIHEAAYgAQYDcICBxAuGIAEGA2YAwCSBwUxOC4xMKAHpdQDsgcFMTcuMTC4B9sU&sclient=gws-wiz-serp",
    index: 0,
  },
  {
    icon: "../data/img/javascript.svg",
    text: "javascript",
    link: "https://javascript.tm/",
    index: 0,
  },
  {
    icon: "../data/img/idx.svg",
    text: "idx",
    link: "https://idx.google.com/",
    index: 0,
  },
  {
    icon: "../data/img/github.svg",
    text: "github",
    link: "https://github.com/",
    index: 0,
  },
  {
    icon: "../data/img/fedora.svg",
    text: "fedora",
    link: "https://fedoraproject.org/",
    index: 0,
  },
];

let identities = [
  {
    name: "Tran Nguyen Hong Thai",
    color: "#777777",
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

const column = 13;
const iSpot = column - 1;
let row = 0;

let gridHoverStatus = [];

const changeGridBackground = (color, i = 0) => {
  const totalSpots = column * row;
  if (i < totalSpots) {
    const gridSpot = document.getElementById(`grid-spot-${i}`);
    if (gridSpot) {
      gridSpot.style.background = color;
      // if (!gridHoverStatus[i]) {
      //   gridSpot.style.background =
      //     hoverring || lock ? identities[current].subcolor : "white";
      // } else {
      //   gridSpot.style.background = identities[current].color;
      // }
    }

    setTimeout(() => {
      changeGridBackground(color, i + 1);
    }, 1);
  }
};

const changeGridBackgroundColor = (i = 0) => {
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
const availableSpot = (start, end, exclusion) => {
  let availableSpots = [];
  for (let i = start; i <= end; i++) {
    if (i !== exclusion) {
      availableSpots.push(i);
    }
  }
  return availableSpots;
};

const randomSpot = (availableSpots) => {
  for (let i = 0; i < interesting.length; i++) {
    randomIndex = Math.floor(Math.random() * availableSpots.length);
    console.log(randomIndex);
    interesting[i].index = availableSpots[randomIndex];
    availableSpots.splice(randomIndex, 1);
  }
};
