// cursor.js
if (!on_touch_only_device()) {
  const cursor = id("cursor");
  // Update cursor position on mouse move
  document.addEventListener("mousemove", (e) => {
    cursor.style.opacity = "1";
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.background = identities[current].color;
  });

  // Listen for double-click event on the cursor
  cursor.addEventListener("dblclick", () => {
    document.body.style.background =
      document.body.style.background === "black" ? "white" : "black";
  });
}
