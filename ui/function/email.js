// const email_div = document.getElementById("email");

// email_div.addEventListener("click", () => {
//   const email = email_div.textContent;

//   // Use Clipboard API to copy the email
//   navigator.clipboard
//     .writeText(email)
//     .then(() => {
//       alert("marc in your clipboard");
//     })
//     .catch((err) => {
//       console.error("fail to access clipboard", err);
//     });
// });

const email_element = document.getElementById("email");
const copy_email = () => {
  const email = email_element.textContent;

  navigator.clipboard
    .writeText(email)
    .then(() => {
      prompt("my email was copied to clipboard: ", email);
    })
    .catch((err) => {
      console.error("Failed to access clipboard", err);
    });
};
email_element.addEventListener("click", copy_email);
