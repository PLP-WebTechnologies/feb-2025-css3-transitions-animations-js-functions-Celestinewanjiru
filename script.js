// Event listener to handle name input and store it in localStorage
const submitNameButton = document.getElementById("submitName");
const userNameInput = document.getElementById("userName");
const welcomeMessage = document.getElementById("welcomeMessage");

// Check if the name is already in localStorage and greet the user
window.onload = function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    welcomeMessage.textContent = `Welcome back, ${savedName}!`;
  }
};

// Handle name submission
submitNameButton.addEventListener("click", function () {
  const name = userNameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    welcomeMessage.textContent = `Welcome to Kenya, ${name}!`;
  } else {
    welcomeMessage.textContent = "Please enter your name.";
  }
});

// Event listener for showing/hiding extra information
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", function () {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleBtn.textContent = "Hide Information";
  } else {
    extraInfo.style.display = "none";
    toggleBtn.textContent = "Learn More About Kenya";
  }
});
