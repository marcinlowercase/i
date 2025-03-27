const cursor = id("cursor");
// Update cursor position on mouse move
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Listen for double-click event on the cursor
cursor.addEventListener("dblclick", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";
  console.log(document.body.style.backgroundColor === "black");
});
