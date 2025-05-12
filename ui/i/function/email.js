const emailDiv = document.getElementById("email");

emailDiv.addEventListener("click", () => {
  const email = emailDiv.textContent;

  // Use Clipboard API to copy the email
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
});
