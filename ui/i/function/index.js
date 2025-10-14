// index.js

// deisable connection
let connection = [
  // {
  //   icon: "../data/img/pdf.svg",
  //   text: "resume",
  //   link: "https://docs.google.com/document/d/1Zb1G7-cnQZPLSe6emyRnGTxa02sNw04VKvyczkuLDPE/edit?usp=sharing",
  // },
  // // {
  // //   icon: "../data/img/mail.svg",
  // //   text: "email",
  // //   link: "marcinlowercase@gmail.com",
  // // },
  // {
  //   icon: "../data/img/linkedin.svg",
  //   text: "linkedin",
  //   link: "https://www.linkedin.com/in/trannguyenhongthai/",
  // },
  // {
  //   icon: "../data/img/github.svg",
  //   text: "github",
  //   link: "https://github.com/marcinlowercase",
  // },
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
  {
    icon: "../data/img/arm.svg",
    text: "arm",
    link: "https://www.arm.com/architecture",
    index: 0,
  },
  {
    icon: "../data/img/chrome.svg",
    text: "chrome",
    link: "https://www.google.com/intl/en_ca/chrome/canary/",
    index: 0,
  },
  {
    icon: "../data/img/tmux.svg",
    text: "tmux",
    link: "https://github.com/tmux/tmux",
    index: 0,
  },
  {
    icon: "../data/img/gnome.svg",
    text: "gnome",
    link: "https://www.gnome.org/",
    index: 0,
  },
  {
    icon: "../data/img/android.svg",
    text: "android",
    link: "https://developer.android.com/",
    index: 0,
  },
  {
    icon: "../data/img/swift.svg",
    text: "swift",
    link: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
    index: 0,
  },
  {
    icon: "../data/img/redis.svg",
    text: "redis",
    link: "https://redis.io/",
    index: 0,
  },
  {
    icon: "../data/img/sway.svg",
    text: "sway",
    link: "https://swaywm.org/",
    index: 0,
  },
  {
    icon: "../data/img/monkeytype.svg",
    text: "monkeytype",
    link: "https://monkeytype.com/",
    index: 0,
  },
  {
    icon: "../data/img/git.svg",
    text: "git",
    link: "https://git-scm.com/",
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

// 0 - landing
// 1 - greeting
// 2 - connection
// 3 - interesting
let screen = 0;

const id = (id) => {
  return document.getElementById(id);
};

const on_touch_device = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

const on_device_has_mouse = () => {
  console.log("on_device_has_mouse() called");
  if (window.APP_CONFIG) console.log("APP_CONFIG exists");
  if (window.APP_CONFIG && window.APP_CONFIG.hasSimulatedCursor) {
    // If the server told us the cursor is simulated, we lie and say we have a mouse.
    console.log("Simulated cursor detected! Faking mouse presence.");
    return true;
  }
  return window.matchMedia("(pointer: fine)").matches;
};

const on_touch_only_device = () => {
  return on_touch_device() && !on_device_has_mouse();
};

console.log("on_touch_only_device: ", on_touch_only_device());
if (on_touch_only_device()) {
  document.title = "Theo";
}

let lock = false;
let hoverring = false;
let booting = true;

const change_id = () => {
  current++;
  if (current >= identities.length) current = 0;

  name.style.opacity = "0";

  document.title = identities[current].name;

  setTimeout(() => {
    name.innerText = info_showing
      ? "just a placeholder"
      : identities[current].name;
    // id("name-span").innerHTML = identities[current].name;

    change_color();

    setTimeout(() => {
      name.style.opacity = "1";
    }, 200);
  }, 200);
};

const change_color = () => {
  let background =
    lock || hoverring ? identities[current].color : "transparent";
  if (info_showing) background = "white";
  name.style.background = background;
  id("cursor").style.background = identities[current].color;
};

let current = 0;

const name = id("name");
const tom = id("tom");
const transparent_tom = id("transparent_tom");
const i_am = id("i_am");
const a_programmer = id("a_programmer");

const column = 13;
const iSpot = column - 1;
let row = 0;

let grid_hover_status = [];
let info_showing = false;

const change_grid_background = (color, i = 0) => {
  const totalSpots = column * row;
  if (i < totalSpots) {
    const grid_spot = document.getElementById(`grid-spot-${i}`);
    if (grid_spot) {
      grid_spot.style.background = color;
      // if (!grid_hover_status[i]) {
      //   grid_spot.style.background =
      //     hoverring || lock ? identities[current].subcolor : "white";
      // } else {
      //   grid_spot.style.background = identities[current].color;
      // }
    }

    setTimeout(() => {
      change_grid_background(color, i + 1);
    }, 1);
  }
};

const change_grid_background_color = (i = 0) => {
  const totalSpots = column * row;
  if (i < totalSpots) {
    const grid_spot = document.getElementById(`grid-spot-${i}`);
    if (grid_spot) {
      if (!grid_hover_status[i]) {
        grid_spot.style.background =
          hoverring || lock ? identities[current].subcolor : "white";
      } else {
        grid_spot.style.background = identities[current].color;
      }
    }

    setTimeout(() => {
      change_grid_background(i + 1);
    }, 1);
  }
};
const availabe_spot = (start, end, exclusion) => {
  let available_spots = [];
  for (let i = start; i <= end; i++) {
    if (i !== exclusion) {
      available_spots.push(i);
    }
  }
  return available_spots;
};

const random_spot = (available_spots) => {
  for (let i = 0; i < interesting.length; i++) {
    random_index = Math.floor(Math.random() * available_spots.length);
    interesting[i].index = available_spots[random_index];
    available_spots.splice(random_index, 1);
  }
};

// id("name-span").innerText = identities[current].name;
let i_am_showing = false;
const type_writer_effect = (divId, text, speed, callback) => {
  const divElement = document.getElementById(divId);
  let i = 0;

  if (!divElement) {
    console.error(`Element with ID "${divId}" not found.`);
    return;
  }

  const type = () => {
    if (i < text.length) {
      divElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // i_am_showing = false; // Reset the flag when typing is complete
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  // if (i_am_showing) {
  //   console.warn(`Typewriter effect for "${divId}" is already in progress.`);
  //   return; // Exit the function if it's already running
  // }
  // i_am_showing = true;
  divElement.innerHTML = "";
  type();
};
const type_writer_remove_effect = (divId, speed, callback) => {
  const divElement = document.getElementById(divId);
  let text = divElement.innerHTML;
  let i = text.length - 1;

  if (!divElement) {
    console.error(`Element with ID "${divId}" not found.`);
    return;
  }

  const remove = () => {
    if (i >= 0) {
      divElement.innerHTML = text.substring(0, i);
      i--;
      setTimeout(remove, speed);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  remove();
};
const remove_element_content = (element) => {
  element.innerHTML = "";
};
