// greeting.js
const change_greeting_color = () => {
  if (on_touch_only_device()) {
    i_am.style.color = lock ? "white" : "black";
    a_programmer.style.color = lock ? "white" : "black";
  }
};
change_greeting_color();
