// boot.js
const boot = () => {
  tom.style.opacity = "1";
  name.style.opacity = "0";
  setTimeout(() => {
    name.style.opacity = "1";
    if (!lock && !hoverring) tom.style.opacity = "0";
    booting = false;
  }, 500);
};

window.addEventListener("load", boot);
